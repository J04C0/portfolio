import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content, type Lang } from "@/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function metadataFor(lang: Lang): Metadata {
  const { title, description } = content[lang].meta;
  return {
    title,
    description,
    alternates: { languages: { en: "/", es: "/es" } },
    openGraph: { title, description, type: "website", locale: lang === "en" ? "en_US" : "es_UY" },
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
