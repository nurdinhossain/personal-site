import imageUrlBuilder from "@sanity/image-url"
import { projectId, dataset } from "../../sanity/env";

export const urlFor = (source: any) =>
    imageUrlBuilder({ projectId, dataset }).image(source)

export default function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    date.setHours(date.getHours() - 4); // Subtract 4 hours to convert UTC to Eastern Time
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
}