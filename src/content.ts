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
  contact: { title: string; cvTitle: string; cvs: { label: string; href: string }[] };
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
      description: "Full stack developer in Montevideo, Uruguay. I build the parts of software that can't fail quietly: access control, audit trails and alerting.",
    },
    nav: { about: "About", work: "Work", experience: "Experience", contact: "Contact", other: "ES" },
    hero: {
      title: ["Full stack developer.", "Electronic engineering student."],
      sub: "I build the parts of software that can't fail quietly: access control, audit trails and alerting.",
      ctaWork: "View work",
      ctaCv: "Download CV",
    },
    about: {
      title: "About",
      paragraphs: [
        "Hi, I'm Joaco, a full stack developer from Montevideo. Most of my work lives where users never look: who can see which data, what gets recorded, and who finds out when something breaks.",
        "I spent three years at Handy, a payments fintech serving about 20,000 small businesses, building the AWS alerting that caught fraud and failed transactions and sent each one to the person who could fix it. Today I build two client systems end to end, from the database schema and its security policies to the interface.",
        "I'm also in my third year of Electronic Engineering, so I work on both sides of the wire: TypeScript for the web, a soldering iron and an Arduino for the rest. At MoscaLabs I teach programming and robotics to kids aged 5 to 12, where explaining things simply isn't optional. And I climb.",
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
          summary: "A back office for sensitive personal data, where who can see what matters as much as any feature.",
          points: [
            "Access control lives in the database: permissions are granted per record and per person, and Postgres row-level security enforces them even if the UI has a bug.",
            "Nothing disappears: signed entries are immutable, and every change and every read is written to an audit log.",
            "Permissions are tested, not assumed: the permission matrix and every RLS policy run against a real Postgres in CI.",
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
          summary: "Operations software for a field services company, built around the question its team asks every day: what has to be done next.",
          points: [
            "Built for many companies from day one: every table and every query is scoped to one company on the server.",
            "One screen answers the daily question: the pending-work board is computed on the server, so \"overdue\" never depends on the viewer's time zone.",
            "Rules the codebase can't forget: architecture decisions are recorded as ADRs and enforced by the linter, from database access to theme colors.",
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
        { dates: "2026 - now", title: "Freelance Full Stack Developer", org: "Independent", note: "Design and build two client systems end to end: data model, security policies, server logic and interface." },
        { dates: "2026 - now", title: "Technical Support & Instructor", org: "MoscaLabs", note: "Teach programming and robotics to kids aged 5 to 12, and keep the lab's circuits and equipment running." },
        { dates: "2021 - 2024", title: "Software Developer", org: "Handy", note: "Built the AWS alerting (CloudWatch, Lambda, SNS) that flagged fraud and failed payments and routed each error to whoever could fix it, at a fintech serving about 20,000 small businesses. Later moved to the Angular front end." },
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
      cvTitle: "CV",
      cvs: CVS_EN,
    },
  },
  es: {
    meta: {
      title: "Joaquín Gomensoro | Desarrollador full stack",
      description: "Desarrollador full stack en Montevideo, Uruguay. Construyo las partes del software que no pueden fallar en silencio: control de acceso, auditoría y alertas.",
    },
    nav: { about: "Sobre mí", work: "Proyectos", experience: "Experiencia", contact: "Contacto", other: "EN" },
    hero: {
      title: ["Desarrollador full stack.", "Estudiante de electrónica."],
      sub: "Construyo las partes del software que no pueden fallar en silencio: control de acceso, auditoría y alertas.",
      ctaWork: "Ver proyectos",
      ctaCv: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Hola, soy Joaco, desarrollador full stack de Montevideo. La mayor parte de mi trabajo vive donde el usuario no mira: quién puede ver qué datos, qué queda registrado y quién se entera cuando algo se rompe.",
        "Estuve tres años en Handy, una fintech de pagos con unos 20.000 comercios, construyendo las alertas en AWS que detectaban fraude y transacciones fallidas y le llegaban a quien podía resolverlas. Hoy desarrollo dos sistemas para clientes de punta a punta, del esquema de la base y sus políticas de seguridad a la interfaz.",
        "Además curso tercer año de Ingeniería Electrónica, así que trabajo de los dos lados del cable: TypeScript para la web, soldador y Arduino para el resto. En MoscaLabs enseño programación y robótica a niños de 5 a 12 años, donde explicar simple no es opcional. Y hago escalada.",
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
          summary: "Un back office para datos personales sensibles, donde quién ve qué importa tanto como cualquier funcionalidad.",
          points: [
            "El acceso vive en la base de datos: los permisos se otorgan por registro y por persona, y la seguridad a nivel de fila de Postgres los hace cumplir aunque la interfaz tenga un bug.",
            "Nada se pierde: lo firmado es inmutable, y cada cambio y cada lectura quedan en un registro de auditoría.",
            "Los permisos se prueban, no se suponen: la matriz de permisos y cada política de RLS corren contra un Postgres real en CI.",
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
          summary: "Software de operaciones para una empresa de servicios de campo, armado alrededor de la pregunta que su equipo se hace todos los días: qué hay que hacer ahora.",
          points: [
            "Pensado para muchas empresas desde el día uno: cada tabla y cada consulta quedan acotadas a una empresa en el servidor.",
            "Una pantalla responde la pregunta del día: el tablero de pendientes se calcula en el servidor, así que \"atrasado\" nunca depende de la zona horaria de quien mira.",
            "Reglas que el código no puede olvidar: las decisiones de arquitectura quedan como ADR y las hace cumplir el linter, del acceso a la base a los colores del tema.",
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
        { dates: "2026 - hoy", title: "Desarrollador Full Stack freelance", org: "Independiente", note: "Diseño y desarrollo dos sistemas para clientes de punta a punta: modelo de datos, políticas de seguridad, lógica de servidor e interfaz." },
        { dates: "2026 - hoy", title: "Soporte Técnico y Docente", org: "MoscaLabs", note: "Enseño programación y robótica a niños de 5 a 12 años y mantengo funcionando los circuitos y equipos del laboratorio." },
        { dates: "2021 - 2024", title: "Desarrollador de Software", org: "Handy", note: "Construí las alertas en AWS (CloudWatch, Lambda, SNS) que detectaban fraude y pagos fallidos y le llevaban cada error a quien podía resolverlo, en una fintech con unos 20.000 comercios. Después pasé al front-end en Angular." },
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
      cvTitle: "CV",
      cvs: [CVS_EN[2], CVS_EN[3], CVS_EN[0], CVS_EN[1]],
    },
  },
};
