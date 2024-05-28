import Image from "next/image";
import me from "../../public/me.jpg";
import { sanityFetch } from "../../sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { POSTS_QUERY } from "../../sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/utils/helper";
import formatDate from "@/utils/helper";

export default async function Home() {
  const toDo: string[] = [
    "Blender 3D Modeling",
    "Unity Game Design",
    "Creating an Emulator",
    "Reinforcement Learning",
    "Genetic Algorithms",
    "Creating a Graphics Engine",
    "Autonomous Drones",
    "Autonomous Cars"
  ];
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  return (
    <div>
      {/* header */}
      <h1 className="bg-green-300 border-4 border-dashed border-slate-900 font-bold text-center text-4xl m-6 p-2">Home Page</h1>

      {/* main content */}
      <main className="flex flex-row justify-between">
        {/* intro box */}
        <div className="flex flex-col bg-red-400 border-4 w-1/2 border-dashed border-slate-900 shadow-2xl text-center ml-6 mr-3 p-2 hover:scale-95 transition ease-in-out">
          <h1 className="text-xl m-2">
            Hi, welcome to my website! I&apos;m <span className="underline decoration-wavy">Nurdin</span>, a <span className="underline decoration-wavy">first-year</span> undergrad
            at the <span className="underline decoration-wavy">University of Virginia</span>🏫 (go Hoos!).
          </h1>
          <div className="flex justify-center">
            <Image
              src={me}
              alt="Picture of me!"
              className="m-2 border-4 border-slate-900"
              width={400}
            />
          </div>
        </div>

        {/* side-info box */}
        <div className="flex flex-col bg-orange-400 border-4 w-1/2 border-dashed border-slate-900 shadow-2xl text-center mr-6 ml-3 p-2 hover:scale-95 transition ease-in-out">
          <h1 className="text-xl m-2">
            I&apos;m majoring in <span className="underline decoration-wavy">computer science</span>🖥️, so I wanted to make
            a <span className="underline decoration-wavy">portfolio</span> of my fun projects and a <span className="underline decoration-wavy">log</span> of what I learn along the way.
            Here are some ideas I have:
          </h1>
          <ul className="columns-2 font-bold text-xs md:text-sm lg:text-xl">
            {
              toDo.map(
                (element, i) => {
                  return (
                    <li key={i} className="mb-5">{element}</li>
                  )
                }
              )
            }
          </ul>

          {/* space for latest blog post */}
          <h1 className="text-xl">Latest blog post!</h1>
          <Link
            key={posts[0]._id}
            href={"blog/" + posts[0].slug.current}
            className="flex flex-row items-center bg-indigo-400 border-4 border-dashed border-slate-900 text-center text-3xl m-6 p-2 hover:scale-95 shadow-2xl transition ease-in-out"
          >
            <h2 className="underline decoration-wavy mb-4 hidden md:block">{posts[0].title}</h2>
            <Image
              src={urlFor(posts[0].mainImage).width(300).height(300).quality(80).url()}
              className="border-4 border-solid border-slate-900 mb-4 object-scale-down"
              width={150}
              height={150}
              alt={posts[0].mainImage.alt || ""}
            />
            <p className="hidden md:block">Published on <span className="underline decoration-solid">{formatDate(posts[0].publishedAt)}</span></p>
          </Link>
        </div>
      </main>
    </div>
  );
}
