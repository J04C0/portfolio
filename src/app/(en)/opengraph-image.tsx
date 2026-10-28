import { content } from "@/content";
import { ogImage, ogSize } from "@/components/OgImage";

export const dynamic = "force-static";
export const alt = content.en.meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage("en");
}
