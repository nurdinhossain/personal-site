import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`; // query for dataset of posts with defined slug

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`; // query for individual post (slug.current=$slug)