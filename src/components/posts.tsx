import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/utils/helper";
import formatDate from "@/utils/helper";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="flex flex-row justify-center">
      <main className="grid grid-cols-2 w-screen">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post._id}
              href={"blog/" + post.slug.current}
              className="flex flex-col items-center justify-between bg-orange-400 border-4 border-dashed border-slate-900 text-center text-xl md:text-3xl m-6 p-2 hover:scale-95 shadow-2xl transition ease-in-out"
            >
              <p className="underline decoration-wavy mb-4">{post.title}</p>
              {post.mainImage ? <Image 
                src={urlFor(post.mainImage).width(300).height(300).quality(80).url()}
                className="bg-slate-300 border-4 border-solid border-slate-900 mb-4"
                width={300}
                height={300}
                alt={post.mainImage.alt || ""}
              /> : null}
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