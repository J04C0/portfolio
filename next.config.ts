import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático: se puede publicar en cualquier hosting.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
