import fs from "node:fs";
import path from "node:path";
import { content, type Lang } from "@/content";
import { Zoomable } from "./Zoomable";

const inPublic = (src: string) => fs.existsSync(path.join(process.cwd(), "public", src));

// Captura de un proyecto. En el recuadro va un recorte legible (src); al tocarla se
// abre la pantalla completa (src con sufijo -full, si existe). Si el archivo todavía
// no está en /public, reserva el lugar con el mismo tamaño para que el layout no cambie.
// compact: captura secundaria (la chica superpuesta), lleva solo el ícono.
export function Shot({ src, alt, lang, priority = false, compact = false }: { src: string; alt: string; lang: Lang; priority?: boolean; compact?: boolean }) {
  const t = content[lang].work;
  const full = src.replace(/\.png$/, "-full.png");

  return (
    <div className="relative aspect-[16/10] rounded-xl border border-line bg-surface shadow-[0_24px_60px_-30px_rgb(15_27_45/0.35)]">
      {inPublic(src) ? (
        <Zoomable src={src} full={inPublic(full) ? full : src} alt={alt} zoomLabel={t.zoom} closeLabel={t.close} priority={priority} compact={compact} />
      ) : (
        <div className="flex h-full items-center justify-center font-mono text-xs text-muted">{t.pending}</div>
      )}
    </div>
  );
}
