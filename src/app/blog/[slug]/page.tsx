import { Metadata } from "next"
import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { POSTS_QUERY, POST_QUERY } from "../../../../sanity/lib/queries"
import Post from "../../../components/post"

import { sanityFetch } from "../../../../sanity/lib/fetch"

export async function generateMetadata({
  params,
}: { 
  params: { id: string } 
}): Promise<Metadata> { 
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
  
  return { 
      title: post.title + " | A Bored Techie", 
      description: post.description,
  } 
}

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
  if (!post) {
    return notFound()
  }
  return <Post post={post} />
}