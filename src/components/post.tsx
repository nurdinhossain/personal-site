import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { SanityDocument } from "next-sanity"
import { urlFor } from "@/utils/helper"
import {getImageDimensions} from '@sanity/asset-utils'

function SanityImage(source: any) {
  const img = source.value
  const {width, height} = getImageDimensions(img);

  return (
    <div className="float-left m-0 p-4 w-1/3 mr-4 bg-slate-300 rounded-lg border-4 border-dashed border-slate-900">
      <Image 
        src={urlFor(img).width(width).height(height).quality(80).url()}
        alt={img.alt || ""}
        width={300}
        height={300}
      />
    </div>
  )
}

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post
  const {width, height} = getImageDimensions(mainImage);

  return (
    <main className="container mx-auto prose prose-lg p-4 text-black">
      {title ? <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl mt-6 p-2 font-mono">{title}</h1> : null}
      <div className="bg-red-400 border-4 border-dashed border-slate-900 p-4 font-mono">
        {mainImage ? (
          <Image
            className="float-left m-0 p-4 w-1/3 mr-4 bg-slate-300 rounded-lg border-4 border-solid border-slate-900"
            src={urlFor(mainImage).width(width).height(height).quality(80).url()}
            width={300}
            height={300}
            alt={mainImage.alt || ""}
          />
        ) : null}
        {body ? 
        <PortableText value={body}
          components={{
            types: {
              image: SanityImage
            }
          }}
        /> : null}
      </div>
    </main>
  )
}