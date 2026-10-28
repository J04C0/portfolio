import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content, type Lang } from "@/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Vercel redirige el dominio sin www a www.
export const SITE = "https://www.joaquingomensoro.uy";

export function metadataFor(lang: Lang): Metadata {
  const { title, description } = content[lang].meta;
  const path = lang === "en" ? "/" : "/es";
  return {
    metadataBase: new URL(SITE),
    title,
    description,
    alternates: { canonical: path, languages: { en: "/", es: "/es", "x-default": "/" } },
    openGraph: { title, description, url: path, type: "website", locale: lang === "en" ? "en_US" : "es_UY" },
  };
}

// Cada idioma tiene su propio layout raíz para que <html lang> sea el correcto.
export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
