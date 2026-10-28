# Joaquín Gomensoro, portfolio

Personal portfolio, live at [www.joaquingomensoro.uy](https://www.joaquingomensoro.uy). Static site built with Next.js, TypeScript and Tailwind CSS, in English (`/`) and Spanish (`/es`).

Hosted on Vercel: every push to `main` deploys. The domain's DNS is managed by Vercel, and the bare domain redirects to `www`, which is why `SITE` in `src/components/Shell.tsx` uses `www`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

Content lives in `src/content.ts`. Project screenshots go in `public/work/`: `records-1.png` is the 16:10 crop shown on the page, and `records-1-full.png` the larger view that opens when you click it (same for `records-2`, `ops-1`, `ops-2`). Until a file exists, the page keeps its slot reserved.
