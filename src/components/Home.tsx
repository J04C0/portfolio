import { ArrowDownRight, ArrowUpRight, DownloadSimple, EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { content, type Lang, type Project } from "@/content";
import { Shot } from "./Shot";

const EMAIL = "joaquin.gomensoro1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/joaqu%C3%ADn-gomensoro-624360181/";

const Chips = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((s) => (
      <li key={s} className="rounded-xl bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
        {s}
      </li>
    ))}
  </ul>
);

// Tipo de proyecto y su estado real. El punto indica estado, no es decoración.
const Status = ({ kind, status }: { kind: string; status: string }) => (
  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
    {kind}
    <span className="inline-flex items-center gap-1.5 rounded-xl border border-accent/40 px-2 py-0.5 text-accent">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      {status}
    </span>
  </p>
);

// "Idea: detalle". La idea va marcada para que el punto se pueda escanear sin leerlo entero.
const Point = ({ text }: { text: string }) => {
  const i = text.indexOf(": ");
  if (i === -1) return <span>{text}</span>;
  return (
    <span className="text-muted">
      <span className="font-medium text-text">{text.slice(0, i + 1)}</span> {text.slice(i + 2)}
    </span>
  );
};

function ProjectBlock({ p, flip, lang }: { p: Project; flip: boolean; lang: Lang }) {
  return (
    <article className="reveal grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <Shot {...p.images[0]} lang={lang} />
        <div className={`relative -mt-12 hidden w-3/5 sm:block ${flip ? "mr-auto -ml-4" : "ml-auto -mr-4"}`}>
          <Shot {...p.images[1]} lang={lang} compact />
        </div>
      </div>
      <div className={`flex flex-col gap-5 lg:col-span-5 lg:pt-6 ${flip ? "lg:order-1" : ""}`}>
        <div>
          <Status kind={p.kind} status={p.status} />
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{p.name}</h3>
        </div>
        <p className="max-w-[60ch] leading-relaxed text-muted">{p.summary}</p>
        <ul className="grid gap-3">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-3 leading-relaxed">
              <span aria-hidden className="mt-[0.6em] h-px w-4 shrink-0 bg-accent" />
              <Point text={pt} />
            </li>
          ))}
        </ul>
        <Chips items={p.stack} />
      </div>
    </article>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const t = content[lang];
  const other = lang === "en" ? "/es" : "/";
  const mainCv = t.contact.cvs[0].href;

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line/60 bg-bg/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <a href="#top" className="font-semibold tracking-tight">
            Joaquín Gomensoro
          </a>
          <div className="flex items-center gap-5 text-sm text-muted md:gap-7">
            <a href="#about" className="hidden transition-colors hover:text-text md:inline">{t.nav.about}</a>
            <a href="#work" className="hidden transition-colors hover:text-text sm:inline">{t.nav.work}</a>
            <a href="#experience" className="hidden transition-colors hover:text-text sm:inline">{t.nav.experience}</a>
            <a href="#contact" className="transition-colors hover:text-text">{t.nav.contact}</a>
            <a href={other} hrefLang={lang === "en" ? "es" : "en"} className="rounded-xl border border-line px-2.5 py-1 font-mono text-xs transition-colors hover:border-text hover:text-text">
              {t.nav.other}
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Hero */}
        <section className="grid grid-cols-1 items-center gap-12 pt-14 pb-20 md:pt-20 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-7">
            <h1 className="enter text-4xl leading-[1.05] font-semibold tracking-tighter md:text-5xl lg:text-[2.4rem] xl:text-[2.75rem]" style={{ ["--i" as string]: 1 }}>
              {t.hero.title[0]}
              <span className="block text-accent">{t.hero.title[1]}</span>
            </h1>
            <p className="enter mt-6 max-w-[46ch] text-lg leading-relaxed text-muted" style={{ ["--i" as string]: 2 }}>
              {t.hero.sub}
            </p>
            <div className="enter mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium whitespace-nowrap text-accent-ink transition-transform active:scale-[0.98]">
                {t.hero.ctaWork}
                <ArrowDownRight size={16} weight="bold" />
              </a>
              <a href={mainCv} download className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors hover:border-text active:scale-[0.98]">
                {t.hero.ctaCv}
                <DownloadSimple size={16} weight="bold" />
              </a>
            </div>
          </div>
          <div className="enter relative lg:col-span-5" style={{ ["--i" as string]: 2 }}>
            <Shot {...t.work.projects[0].images[0]} lang={lang} priority />
            <div className="absolute -bottom-10 -left-6 hidden w-1/2 md:block">
              <Shot {...t.work.projects[1].images[0]} lang={lang} compact priority />
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="about" className="grid grid-cols-1 gap-10 border-t border-line py-20 md:grid-cols-12 md:gap-12 md:py-28">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.about.title}</h2>
          </div>
          <div className="grid content-start gap-5 md:col-span-8 md:pt-1.5">
            {t.about.paragraphs.map((para, i) => (
              <p key={i} className={`max-w-[62ch] leading-relaxed ${i === 0 ? "text-xl text-text" : "text-lg text-muted"}`}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="work" className="border-t border-line py-20 md:py-28">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.work.title}</h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-muted">{t.work.note}</p>
          <div className="mt-14 grid gap-24">
            {t.work.projects.map((p, i) => (
              <ProjectBlock key={p.id} p={p} flip={i % 2 === 1} lang={lang} />
            ))}
          </div>

          <article className="reveal mt-24 rounded-xl bg-surface p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Status kind={t.bot.kind} status={t.bot.status} />
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t.bot.title}</h3>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">{t.bot.text}</p>
              </div>
              <div className="flex flex-col justify-between gap-6 lg:col-span-7">
                <ul className="grid gap-4 sm:grid-cols-3">
                  {t.bot.facts.map((f) => (
                    <li key={f} className="border-l border-accent pl-4 text-sm leading-relaxed">{f}</li>
                  ))}
                </ul>
                <Chips items={t.bot.stack} />
              </div>
            </div>
          </article>
        </section>

        {/* Experiencia */}
        <section id="experience" className="grid gap-14 border-t border-line py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.experience.title}</h2>
            <ol className="mt-8 grid gap-2">
              {t.experience.roles.map((r) => (
                <li key={r.title} className="reveal group -mx-4 grid gap-2 rounded-xl px-4 py-4 transition-colors hover:bg-surface sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="font-mono text-sm text-muted">{r.dates}</span>
                  <div>
                    <h3 className="font-semibold transition-colors group-hover:text-accent">
                      {r.title} <span className="font-normal text-muted">· {r.org}</span>
                    </h3>
                    <p className="mt-1.5 max-w-[60ch] leading-relaxed text-muted">{r.note}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a href={mainCv} download className="group mt-8 inline-flex items-center gap-2 font-medium text-accent">
              {t.hero.ctaCv}
              <DownloadSimple size={16} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
          <aside className="grid content-start gap-10 lg:col-span-4 lg:pt-2">
            <div>
              <h3 className="text-sm font-semibold">{t.experience.educationTitle}</h3>
              <ul className="mt-4 grid gap-5">
                {t.experience.education.map((e) => (
                  <li key={e.title}>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted">{e.org}, {e.dates}</p>
                    <p className="mt-1 text-sm text-muted">{e.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{t.experience.languagesTitle}</h3>
              <p className="mt-3 text-sm text-muted">{t.experience.languages}</p>
            </div>
          </aside>
        </section>

        {/* Herramientas */}
        <section className="border-t border-line py-20 md:py-28">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.skills.title}</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.skills.groups.map((g) => (
              <div key={g.name} className="reveal">
                <h3 className="text-sm font-semibold">{g.name}</h3>
                <ul className="mt-4 grid gap-2 text-muted">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="grid gap-12 border-t border-line py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-semibold tracking-tighter md:text-6xl">{t.contact.title}</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-transform active:scale-[0.98]">
                <EnvelopeSimple size={16} weight="bold" />
                {EMAIL}
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-text active:scale-[0.98]">
                <LinkedinLogo size={16} weight="bold" />
                LinkedIn
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <h3 className="text-sm font-semibold">{t.contact.cvTitle}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {t.contact.cvs.map((cv) => (
                <li key={cv.href}>
                  <a href={cv.href} download className="flex items-center justify-between gap-2 rounded-xl border border-line px-4 py-3 text-sm transition-colors hover:border-text">
                    {cv.label}
                    <DownloadSimple size={16} className="text-muted" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted md:px-8">© 2026 Joaquín Gomensoro</div>
      </footer>
    </>
  );
}
