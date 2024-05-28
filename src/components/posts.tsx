import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url"
import { dataset, projectId } from "../../sanity/env"
import { PortableText } from "@portabletext/react"

const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-1/2">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post._id}
              href={"blog/" + post.slug.current}
              className="flex flex-col items-center bg-orange-400 border-4 border-dashed border-slate-900 text-center text-3xl m-6 p-2 hover:scale-95 shadow-2xl transition ease-in-out"
            >
              <h2 className="underline decoration-wavy mb-4">{post.title}</h2>
              <Image 
                src={urlFor(post.mainImage).width(300).height(300).quality(80).url()}
                className="border-4 border-solid border-slate-900 mb-4"
                width={300}
                height={300}
                alt={post.mainImage.alt || ""}
              />
              <p>Published on <span className="underline decoration-solid">{formatDate(post.publishedAt)}</span></p>
            </Link>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </main>
    </div>
  );
}