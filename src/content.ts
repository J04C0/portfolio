export type Lang = "en" | "es";

export type Project = {
  id: string;
  name: string;
  kind: string;
  status: string;
  summary: string;
  points: string[];
  stack: string[];
  // Capturas en /public/work. Si falta alguna, se muestra el hueco reservado.
  images: { src: string; alt: string }[];
};

export type Role = {
  dates: string;
  title: string;
  org: string;
  note: string;
};

type Content = {
  meta: { title: string; description: string };
  nav: { about: string; work: string; experience: string; contact: string; other: string };
  hero: { title: [string, string]; sub: string; ctaWork: string; ctaCv: string };
  about: { title: string; paragraphs: string[] };
  work: { title: string; note: string; projects: Project[]; pending: string; zoom: string; close: string };
  bot: { title: string; kind: string; status: string; text: string; facts: string[]; stack: string[] };
  experience: { title: string; roles: Role[]; educationTitle: string; education: Role[]; languagesTitle: string; languages: string };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  contact: { title: string; text: string; cvTitle: string; cvs: { label: string; href: string }[] };
};

const RECORDS_STACK = ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Mantine", "Zod", "Vitest"];
const OPS_STACK = ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "GitHub Actions"];
const BOT_STACK = ["n8n", "Docker", "Oracle Cloud", "Claude API", "WhatsApp Cloud API", "Google Sheets"];

const CVS_EN = [
  { label: "Software (EN)", href: "/cv/CV_Joaquin_Gomensoro_Software_EN.pdf" },
  { label: "Hardware (EN)", href: "/cv/CV_Joaquin_Gomensoro_Hardware_EN.pdf" },
  { label: "Software (ES)", href: "/cv/CV_Joaquin_Gomensoro_Software_ES.pdf" },
  { label: "Hardware (ES)", href: "/cv/CV_Joaquin_Gomensoro_Hardware_ES.pdf" },
];

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Joaquín Gomensoro | Full stack developer",
      description: "Full stack developer and Electronic Engineering student in Montevideo, Uruguay.",
    },
    nav: { about: "About", work: "Work", experience: "Experience", contact: "Contact", other: "ES" },
    hero: {
      title: ["Full stack developer.", "Electronic engineering student."],
      sub: "Three years building payment alerting at a fintech. Now building management systems for real clients, remotely from Uruguay.",
      ctaWork: "View work",
      ctaCv: "Download CV",
    },
    about: {
      title: "About",
      paragraphs: [
        "Hi, I'm Joaco. I'm a developer from Montevideo, Uruguay, and I like building things people actually use. Right now I'm building two management systems for real clients, from the database up.",
        "Before that I spent three years at Handy, a payments fintech, building the alerts that told the team when a transaction went wrong. Along the way I moved from Systems to Electronic Engineering, so these days I work on both sides: TypeScript for the web, a soldering iron and an Arduino for everything else.",
        "When I'm not coding I teach programming and robotics to kids at MoscaLabs, and I go rock climbing.",
      ],
    },
    work: {
      title: "Selected work",
      note: "Both are real client projects, still in development, so I keep the clients and the product details private. Screenshots use test data.",
      pending: "Screenshot coming soon",
      zoom: "View larger",
      close: "Close",
      projects: [
        {
          id: "records",
          name: "Sensitive records platform",
          kind: "Client project",
          status: "In development",
          summary: "Back office that handles sensitive personal data, where who can see what matters as much as the features.",
          points: [
            "Access is granted per record and per person, and some roles never see sensitive data. Row-level security in PostgreSQL enforces it, not the UI.",
            "Signed entries can't be edited, and every change or read of a record is logged. Both live in the database.",
            "The permission matrix and every RLS policy are tested against a real Postgres in CI.",
          ],
          stack: RECORDS_STACK,
          images: [
            { src: "/work/records-1.png", alt: "Access management screen, with test data" },
            { src: "/work/records-2.png", alt: "Audit log screen, with test data" },
          ],
        },
        {
          id: "ops",
          name: "Multi-tenant operations system",
          kind: "Client project",
          status: "In development",
          summary: "Day-to-day operations software for a field services company, built around one question: what has to be done next.",
          points: [
            "Multi-tenant from day one: every table and every query is scoped to the company on the server.",
            "The pending-work board is computed on the server, so what counts as overdue doesn't depend on the viewer's time zone.",
            "Architecture decisions recorded as ADRs and enforced by the linter: components can't touch the database, and no color lives outside the theme tokens.",
          ],
          stack: OPS_STACK,
          images: [
            { src: "/work/ops-1.png", alt: "Pending work board, with test data" },
            { src: "/work/ops-2.png", alt: "Catalog screen, with test data" },
          ],
        },
      ],
    },
    bot: {
      title: "WhatsApp finance assistant",
      kind: "Personal project",
      status: "In daily use",
      text: "I send a text or a voice note with an expense and it lands in my spreadsheet. Claude reads the message, n8n does the rest.",
      facts: [
        "Runs 24/7 on a Docker container in an Oracle Cloud VM.",
        "Tracks credit card installments by each card's billing cycle.",
        "Sends a monthly summary and reminders on its own.",
      ],
      stack: BOT_STACK,
    },
    experience: {
      title: "Experience",
      roles: [
        { dates: "2026 - now", title: "Freelance Full Stack Developer", org: "Independent", note: "Building two client systems end to end, from the data model to the interface." },
        { dates: "2026 - now", title: "Technical Support & Instructor", org: "MoscaLabs", note: "Teach programming and robotics to kids aged 5 to 12, and repair the circuits and gear we use." },
        { dates: "2021 - 2024", title: "Software Developer", org: "Handy", note: "Built AWS alerting for payment fraud and errors at a fintech serving about 20,000 small businesses. Later moved to the Angular front end." },
      ],
      educationTitle: "Education",
      education: [
        { dates: "Expected 2029", title: "Electronic Engineering", org: "Universidad ORT Uruguay", note: "Third year, after two years of Systems Engineering." },
        { dates: "2019", title: "IB Diploma", org: "The British Schools of Montevideo", note: "Full schooling in English." },
      ],
      languagesTitle: "Languages",
      languages: "Spanish (native), English (native-level).",
    },
    skills: {
      title: "What I work with",
      groups: [
        { name: "Web", items: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "HTML & CSS"] },
        { name: "Data & cloud", items: ["PostgreSQL", "Supabase", "SQL", "AWS CloudWatch", "AWS Lambda", "AWS SNS", "Docker"] },
        { name: "Hardware", items: ["Soldering", "Arduino", "PCB design in Fusion", "Circuit repair"] },
        { name: "Also", items: ["C++", ".NET", "n8n", "Git", "GitHub Actions", "Scrum"] },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "I'm looking for a remote full stack or backend role, or something where hardware meets software.",
      cvTitle: "CV",
      cvs: CVS_EN,
    },
  },
  es: {
    meta: {
      title: "Joaquín Gomensoro | Desarrollador full stack",
      description: "Desarrollador full stack y estudiante de Ingeniería Electrónica en Montevideo, Uruguay.",
    },
    nav: { about: "Sobre mí", work: "Proyectos", experience: "Experiencia", contact: "Contacto", other: "EN" },
    hero: {
      title: ["Desarrollador full stack.", "Estudiante de electrónica."],
      sub: "Tres años construyendo alertas de pagos en una fintech. Hoy desarrollo sistemas de gestión para clientes reales.",
      ctaWork: "Ver proyectos",
      ctaCv: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Hola, soy Joaco. Soy desarrollador, de Montevideo, y me gusta construir cosas que la gente usa de verdad. Hoy estoy desarrollando dos sistemas de gestión para clientes reales, desde la base de datos hacia arriba.",
        "Antes estuve tres años en Handy, una fintech de pagos, armando las alertas que le avisaban al equipo cuando algo fallaba en una transacción. En el camino pasé de Ingeniería en Sistemas a Electrónica, así que hoy trabajo de los dos lados: TypeScript para la web, y soldador y Arduino para todo lo demás.",
        "Cuando no estoy programando, enseño programación y robótica a niños en MoscaLabs, y hago escalada.",
      ],
    },
    work: {
      title: "Proyectos",
      note: "Los dos son proyectos reales para clientes, todavía en desarrollo, así que los clientes y los detalles del producto quedan en reserva. Las capturas usan datos de prueba.",
      pending: "Captura en camino",
      zoom: "Ver en grande",
      close: "Cerrar",
      projects: [
        {
          id: "records",
          name: "Plataforma de registros sensibles",
          kind: "Proyecto para cliente",
          status: "En desarrollo",
          summary: "Back office que maneja datos personales sensibles, donde quién ve qué importa tanto como las funcionalidades.",
          points: [
            "El acceso se otorga por registro y por persona, y hay roles que nunca ven datos sensibles. Lo garantiza la seguridad a nivel de fila en PostgreSQL, no la interfaz.",
            "Lo firmado no se puede editar, y cada cambio o lectura de un registro queda anotado. Las dos cosas viven en la base de datos.",
            "La matriz de permisos y cada política de RLS se prueban contra un Postgres real en CI.",
          ],
          stack: RECORDS_STACK,
          images: [
            { src: "/work/records-1.png", alt: "Pantalla de gestión de accesos, con datos de prueba" },
            { src: "/work/records-2.png", alt: "Pantalla de auditoría, con datos de prueba" },
          ],
        },
        {
          id: "ops",
          name: "Sistema de operaciones multiempresa",
          kind: "Proyecto para cliente",
          status: "En desarrollo",
          summary: "Software de operaciones para una empresa de servicios de campo, armado alrededor de una pregunta: qué hay que hacer ahora.",
          points: [
            "Multiempresa desde el inicio: cada tabla y cada consulta quedan acotadas a la empresa en el servidor.",
            "El tablero de pendientes se calcula en el servidor, así lo que está atrasado no depende de la zona horaria de quien mira.",
            "Decisiones de arquitectura documentadas como ADR y aplicadas por el linter: los componentes no tocan la base, y ningún color vive fuera de los tokens del tema.",
          ],
          stack: OPS_STACK,
          images: [
            { src: "/work/ops-1.png", alt: "Tablero de trabajos pendientes, con datos de prueba" },
            { src: "/work/ops-2.png", alt: "Pantalla de catálogo, con datos de prueba" },
          ],
        },
      ],
    },
    bot: {
      title: "Asistente de finanzas por WhatsApp",
      kind: "Proyecto personal",
      status: "En uso diario",
      text: "Mando un texto o un audio con un gasto y queda en mi planilla. Claude interpreta el mensaje y n8n hace el resto.",
      facts: [
        "Corre 24/7 en un contenedor Docker sobre una VM de Oracle Cloud.",
        "Lleva las cuotas de cada tarjeta según su fecha de cierre.",
        "Manda solo un resumen mensual y recordatorios.",
      ],
      stack: BOT_STACK,
    },
    experience: {
      title: "Experiencia",
      roles: [
        { dates: "2026 - hoy", title: "Desarrollador Full Stack freelance", org: "Independiente", note: "Desarrollo dos sistemas para clientes de punta a punta, del modelo de datos a la interfaz." },
        { dates: "2026 - hoy", title: "Soporte Técnico y Docente", org: "MoscaLabs", note: "Enseño programación y robótica a niños de 5 a 12 años y reparo los circuitos y equipos que usamos." },
        { dates: "2021 - 2024", title: "Desarrollador de Software", org: "Handy", note: "Construí alertas en AWS para fraude y errores de pago en una fintech con unos 20.000 comercios. Después pasé al front-end en Angular." },
      ],
      educationTitle: "Formación",
      education: [
        { dates: "Egreso 2029", title: "Ingeniería Electrónica", org: "Universidad ORT Uruguay", note: "Tercer año, después de dos años de Ingeniería en Sistemas." },
        { dates: "2019", title: "Bachillerato Internacional (IB)", org: "The British Schools of Montevideo", note: "Escolaridad completa en inglés." },
      ],
      languagesTitle: "Idiomas",
      languages: "Español (nativo), inglés (nivel nativo).",
    },
    skills: {
      title: "Con qué trabajo",
      groups: [
        { name: "Web", items: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "HTML y CSS"] },
        { name: "Datos y cloud", items: ["PostgreSQL", "Supabase", "SQL", "AWS CloudWatch", "AWS Lambda", "AWS SNS", "Docker"] },
        { name: "Hardware", items: ["Soldadura", "Arduino", "Diseño de PCB en Fusion", "Reparación de circuitos"] },
        { name: "Además", items: ["C++", ".NET", "n8n", "Git", "GitHub Actions", "Scrum"] },
      ],
    },
    contact: {
      title: "Hablemos",
      text: "Busco un rol remoto full stack o backend, o algo donde el hardware se cruce con el software.",
      cvTitle: "CV",
      cvs: [CVS_EN[2], CVS_EN[3], CVS_EN[0], CVS_EN[1]],
    },
  },
};
