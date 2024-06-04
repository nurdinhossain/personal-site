import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { SanityDocument } from "next-sanity"
import { urlFor } from "@/utils/helper"
import {getImageDimensions} from '@sanity/asset-utils'
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import remarkMath from "remark-math"
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

function SanityImage(source: any) {
  const img = source.value
  const {width, height} = getImageDimensions(img);

  return (
    <div className="flex flex-row justify-center">
      <Image 
        className="w-1/2 p-4 bg-slate-300 rounded-lg border-4 border-dashed border-slate-900"
        src={urlFor(img).width(width).height(height).quality(80).url()}
        alt={img.alt || ""}
        width={width}
        height={height}
      />
    </div>
  )
}

// for formatted time
const options: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true
};

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body, code } = post
  const {width, height} = getImageDimensions(mainImage);
  const date = new Date(post.publishedAt);
  date.setHours(date.getHours() - 4); // Subtract 4 hours to convert UTC to Eastern Time

  return (
    <main className="container mx-auto prose prose-lg p-4 text-black marker:text-black break-words">
      {title ? <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl mt-6 p-2 font-mono">{title}</h1> : null}
      <div className="bg-red-400 border-4 border-dashed border-slate-900 p-4 font-mono">
        {mainImage ? (
          <div className="flex flex-row justify-center">
            <Image
              className="p-4 bg-slate-300 w-1/2 rounded-lg border-4 border-solid border-slate-900"
              src={urlFor(mainImage).width(width).height(height).quality(80).url()}
              width={width}
              height={height}
              alt={mainImage.alt || ""}
            />
          </div>
        ) : null}
        {post.publishedAt ? <p className='text-center font-bold underline'>Published on {date.toLocaleString("en-US", options)}</p> : null}
        {body ? 
        <PortableText value={body}
          components={{
            types: {
              image: SanityImage
            }
          }}
        /> : null}
        {code ?
        <Markdown className="bg-slate-200 p-4 border-4 border-solid border-slate-900" remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{code}</Markdown>
        : null}
      </div>
    </main>
  )
}