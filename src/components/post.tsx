import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { SanityDocument } from "next-sanity"
import { urlFor } from "@/utils/helper"

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post

  return (
    <main className="container mx-auto prose prose-lg p-4 text-black">
      {title ? <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl mt-6 p-2 font-mono">{title}</h1> : null}
      <div className="bg-red-400 border-4 border-dashed border-slate-900 p-4 font-mono">
        {mainImage ? (
          <Image
            className="float-left m-0 w-1/3 mr-4 rounded-lg border-4 border-solid border-slate-900"
            src={urlFor(mainImage).width(300).height(300).quality(80).url()}
            width={300}
            height={300}
            alt={mainImage.alt || ""}
          />
        ) : null}
        {body ? <PortableText value={body} /> : null}
      </div>
    </main>
  )
}