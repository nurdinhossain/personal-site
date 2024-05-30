import { SanityDocument } from "next-sanity"
import { sanityFetch } from "../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../sanity/lib/queries"

const url = "https://aboredtechie.com"

export default async function sitemap() {
    const posts = await sanityFetch<SanityDocument[]>({
        query: POSTS_QUERY,
    });
    
    const postMap = posts.map((post) => ({
        url: `${url}/blog/${post.slug.current}`,
        lastModified: post._updatedAt,
    }));

    const routes = ["", "/blog", "/contact"].map((route) => ({
        url: `${url}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...postMap];
}