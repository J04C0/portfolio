import type { MetadataRoute } from "next";
import { SITE } from "@/components/Shell";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: SITE, es: `${SITE}/es` };
  return [
    { url: SITE, alternates: { languages } },
    { url: `${SITE}/es`, alternates: { languages } },
  ];
}
