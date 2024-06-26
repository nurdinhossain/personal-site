import { SanityDocument } from "next-sanity"

import Posts from "../../components/posts";
import { sanityFetch } from "../../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../../sanity/lib/queries"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | A Bored Techie",
  description: "Blog page for Nurdin Hossain's website; A collection of Nurdin's latest projects.",
};

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  return (
    <div>
      <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl m-6 p-2">Blog</h1>
      <Posts posts={posts} />
    </div>
  );
}