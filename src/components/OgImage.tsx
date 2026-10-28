import { ImageResponse } from "next/og";
import { content, type Lang } from "@/content";

export const ogSize = { width: 1200, height: 630 };

// Tarjeta que muestran LinkedIn y otras redes al compartir el link. Usa la paleta clara del sitio.
export function ogImage(lang: Lang) {
  const { hero } = content[lang];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          backgroundColor: "#f6f8fb",
          backgroundImage: "radial-gradient(900px 600px at 0% 0%, rgba(10,124,110,0.12), rgba(10,124,110,0) 70%)",
          color: "#0f1b2d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#0a7c6e" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#0a7c6e" }} />
          joaquingomensoro.uy
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, letterSpacing: -2, lineHeight: 1.05 }}>Joaquín Gomensoro</div>
          <div style={{ fontSize: 38, color: "#4f5d72" }}>{hero.title.join(" ")}</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, lineHeight: 1.4, color: "#0f1b2d", maxWidth: 1000, borderLeft: "6px solid #0a7c6e", paddingLeft: 28 }}>
          {hero.sub}
        </div>
      </div>
    ),
    ogSize,
  );
}
