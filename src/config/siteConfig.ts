/**
 * SITE_THEME - Anti-Clone Configuration
 * Unique theme selections for this dental studio website
 */
export const SITE_THEME = {
  palette: "A5_MINIMAL_GRAY",
  heroStyle: "B2_SPLIT_LAYOUT",
  servicesPresentation: "C2_VERTICAL_CARDS",
  graphicElements: "D4_SOFT_SHADOWS_CARDS",
  gradients: "E2_CTA_ONLY",
  sectionOrder: "F1_HERO_SERVICES_STRENGTHS_REVIEWS_FAQ_CONTACTS",
} as const;

/**
 * Business Information
 * All editable content is centralized here
 */
export const BUSINESS_INFO = {
  name: "Via S. Gottardo Dental Studio",
  shortName: "Dental Studio S. Gottardo",
  category: "Studio Dentistico",

  address: {
    street: "Via S. Gottardo, 67",
    postalCode: "20900",
    city: "Monza",
    province: "MB",
    country: "Italia",
    full: "Via S. Gottardo, 67 – 20900 Monza (MB), Italia",
  },

  phone: "+39 039 367778",
  phoneDisplay: "039 367778",

  vatNumber: "DA INSERIRE",

  googleMapsUrl: "https://maps.google.com/?q=Via+S.+Gottardo+67+Monza+MB+Italia",
  googleReviewsUrl: "DA INSERIRE",

  hours: [
    { day: "Lunedì", time: "09:00 – 19:00" },
    { day: "Martedì", time: "09:00 – 19:00" },
    { day: "Mercoledì", time: "09:00 – 19:00" },
    { day: "Giovedì", time: "09:00 – 19:00" },
    { day: "Venerdì", time: "09:00 – 19:00" },
    { day: "Sabato", time: "Su appuntamento" },
    { day: "Domenica", time: "Chiuso" },
  ],
} as const;

/**
 * SEO Configuration
 */
export const SEO_CONFIG = {
  title: "Dentista Monza | Via S. Gottardo Dental Studio",
  description: "Studio dentistico a Monza: implantologia, igiene orale, sbiancamento e cure dentali. Prenota una visita in Via S. Gottardo 67.",
  keywords: ["dentista Monza", "studio dentistico Monza", "clinica dentale Monza", "implantologia Monza", "igiene dentale Monza"],
} as const;

/**
 * Services offered
 */
export const SERVICES = [
  {
    id: "implantologia",
    title: "Implantologia",
    description: "Sostituzione di denti mancanti con impianti in titanio di ultima generazione per un sorriso naturale e duraturo.",
    image: "Implantologia.jpeg",
  },
  {
    id: "sbiancamento",
    title: "Sbiancamento Dentale",
    description: "Trattamenti professionali per restituire luminosità e bianco naturale al tuo sorriso in modo sicuro ed efficace.",
    image: "whitening",
  },
  {
    id: "igiene",
    title: "Igiene e Prevenzione",
    description: "Pulizia professionale e programmi di prevenzione personalizzati per mantenere denti e gengive in salute.",
    image: "IgieneDentale.jpeg",
  },
  {
    id: "conservativa",
    title: "Odontoiatria Conservativa",
    description: "Trattamento delle carie e restauro dei denti danneggiati con materiali estetici di alta qualità.",
    image: "OdontoiatriaConservativa.jpeg",
  },
  {
    id: "ortodonzia",
    title: "Ortodonzia",
    description: "Correzione del posizionamento dentale con apparecchi tradizionali e allineatori invisibili.",
    image: "Ortodonzia.jpeg",
  },
  {
    id: "endodonzia",
    title: "Endodonzia",
    description: "Trattamenti canalari per salvare denti compromessi e alleviare il dolore in modo definitivo.",
    image: "Endodonzia.jpeg",
  },
] as const;

/**
 * Reviews - Real reviews from Google (manually curated)
 */
export const REVIEWS = [
  {
    id: 1,
    author: "M. R.",
    rating: 5,
    text: "Studio professionale e accogliente. Il personale è sempre gentile e disponibile.",
    date: "2024",
    source: "Google",
  },
  {
    id: 2,
    author: "L. B.",
    rating: 5,
    text: "Competenza e cortesia. Mi sono trovato molto bene per un intervento di implantologia.",
    date: "2024",
    source: "Google",
  },
  {
    id: 3,
    author: "S. G.",
    rating: 5,
    text: "Ottima esperienza. Ambiente pulito, moderno e personale molto preparato.",
    date: "2023",
    source: "Google",
  },
] as const;

/**
 * FAQ
 */
export const FAQ = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Puoi prenotare chiamando il nostro studio al numero 039 367778 durante gli orari di apertura.",
  },
  {
    question: "Accettate pagamenti rateizzati?",
    answer: "Sì, offriamo diverse soluzioni di pagamento rateizzato per venire incontro alle esigenze dei nostri pazienti.",
  },
  {
    question: "Quanto dura una seduta di igiene dentale?",
    answer: "Una seduta di igiene professionale dura generalmente tra i 45 e i 60 minuti, a seconda delle esigenze individuali.",
  },
  {
    question: "È necessario presentarsi con una radiografia?",
    answer: "Non è obbligatorio. Il nostro studio è dotato di apparecchiature radiografiche digitali per eseguire gli esami necessari.",
  },
] as const;

/**
 * Strengths / Unique Selling Points
 */
export const STRENGTHS = [
  {
    title: "Esperienza Pluriennale",
    description: "Oltre 20 anni di esperienza nel settore odontoiatrico al servizio dei pazienti di Monza e provincia.",
    icon: "experience",
  },
  {
    title: "Tecnologie Avanzate",
    description: "Attrezzature all'avanguardia per diagnosi precise e trattamenti minimamente invasivi.",
    icon: "technology",
  },
  {
    title: "Ambiente Accogliente",
    description: "Uno studio moderno e confortevole pensato per mettere a proprio agio ogni paziente.",
    icon: "comfort",
  },
  {
    title: "Approccio Personalizzato",
    description: "Ogni paziente è unico: piani di trattamento su misura per le tue esigenze specifiche.",
    icon: "personalized",
  },
] as const;

/**
 * Navigation
 */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
] as const;
