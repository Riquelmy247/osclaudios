/**
 * ============================================================
 * OS CLAUDIOS — Fonte única de conteúdo do site
 * ============================================================
 *
 * Altere telefone, Instagram, textos, fotos e vídeos por aqui.
 * Os componentes consomem este arquivo via `siteData`.
 *
 * PASTAS DE MÍDIA
 * ---------------
 * public/logo/logo-png.png      → logo sem fundo (header, favicon)
 * public/logo/logo.png          → logo com fundo (Open Graph / sobre)
 * public/images/hero.jpg        → imagem de fundo do Hero (opcional)
 * public/videos/hero.mp4        → vídeo de fundo do Hero (opcional)
 * public/images/foto-01.jpg     → fotos da galeria
 * public/videos/video-01.mp4    → vídeos da seção de vídeos
 * public/images/video-01.jpg    → thumbnail do vídeo (opcional)
 *
 * Depois de colocar o arquivo na pasta, registre o caminho abaixo.
 */

export const siteData = {
  name: "Os Claudios",
  slogan: "A família do Pagode 🎤🎵",
  description: "Formada por pai e filhos 🎤",
  phrase: "Venha curtir o melhor do pagode",

  seo: {
    title: "Os Claudios | A Família do Pagode",
    description:
      "Os Claudios é uma família de pagode formada por pai e filhos. Entre em contato e contrate para seu evento.",
  },

  /* URL pública do site, se houver. Usada em Open Graph. */
  siteUrl: "",

  instagram: {
    username: "@os_claudiosofc",
    url: "https://www.instagram.com/os_claudiosofc/",
    embedUrl: "https://www.instagram.com/os_claudiosofc/embed",
    kicker: "Instagram",
    title: "Acompanhe Os Claudios",
    text: "Confira nossos shows, bastidores e novidades no Instagram.",
    profileSubtitle: "A família do Pagode",
  },

  contact: {
    phone: "(34) 99923-3936",
    phoneLink: "tel:+5534999233936",
    whatsappNumber: "5534999233936",
    responsible: "Claudio",
  },

  nav: [
    { id: "inicio", label: "Início", href: "#inicio" },
    { id: "sobre", label: "Sobre", href: "#sobre" },
    { id: "instagram", label: "Instagram", href: "#instagram" },
    { id: "contato", label: "Contato", href: "#contato" },
  ],

  mobileNav: [
    { label: "Início", shortLabel: "Início", href: "#inicio", icon: "home" },
    { label: "Sobre", shortLabel: "Sobre", href: "#sobre", icon: "about" },
    { label: "Instagram", shortLabel: "Insta", href: "#instagram", icon: "instagram" },
    { label: "Contato", shortLabel: "Contato", href: "#contato", icon: "contact" },
    { label: "WhatsApp", shortLabel: "Whats", href: "whatsapp", icon: "whatsapp", external: true },
  ],

  labels: {
    hire: "CONTRATE PARA SEU EVENTO",
    hireShort: "CONTRATAR",
    seeVideos: "VER VÍDEOS",
    hireCta: "QUERO CONTRATAR OS CLAUDIOS",
    whatsapp: "CHAMAR NO WHATSAPP",
    followInstagram: "SEGUIR NO INSTAGRAM",
    instagram: "INSTAGRAM",
    shows: "Shows",
  },

  whatsapp: {
    default:
      "Olá, Claudio! Vi o site dos Os Claudios e gostaria de saber mais sobre a contratação para um show.",
    hire: "Olá, Claudio! Gostaria de contratar Os Claudios para um evento. Pode me passar mais informações?",
  },

  about: {
    kicker: "Quem são Os Claudios?",
    title: "Pai e filhos, uma paixão pelo pagode",
    paragraphs: [
      "Os Claudios é uma família de pagode formada por pai e filhos. Unidos pela música e pela família, eles levam para o palco a alegria, a conexão e o melhor do pagode.",
      "Uma atração feita para animar festas, eventos e comemorações — com a energia de quem divide o palco e a vida.",
    ],
  },

  highlights: [
    {
      id: "pagode",
      icon: "mic",
      title: "PAGODE",
      text: "O melhor do pagode para animar a sua festa.",
    },
    {
      id: "musica",
      icon: "music",
      title: "MÚSICA",
      text: "Voz, ritmo e presença de palco para o seu evento.",
    },
    {
      id: "familia",
      icon: "heart",
      title: "FAMÍLIA",
      text: "Uma família formada por pai e filhos, unidos pela música.",
    },
    {
      id: "energia",
      icon: "fire",
      title: "ENERGIA",
      text: "Alegria e clima de show para a sua comemoração.",
    },
  ],

  marquee: [
    "PAGODE",
    "MÚSICA",
    "FAMÍLIA",
    "ENERGIA",
    "SHOW",
    "FESTA",
    "EVENTOS",
    "OS CLAUDIOS",
  ],

  gallery: {
    kicker: "Galeria",
    title: "Momentos dos Claudios",
    subtitle: "Viva o pagode com Os Claudios.",
    emptyHint: "Confira os momentos dos shows e bastidores no Instagram.",
  },

  videos: {
    kicker: "Vídeos",
    title: "Sinta a energia do pagode",
    emptyHint: "Assista aos vídeos dos Os Claudios no Instagram.",
  },

  cta: {
    title: "Vai ter evento? Chame Os Claudios!",
    text: "Leve o melhor do pagode para sua festa, evento ou comemoração.",
  },

  contactSection: {
    kicker: "Contato",
    title: "Entre em contato",
  },

  footer: {
    copyright: "© 2026 Os Claudios. Todos os direitos reservados.",
  },

  /**
   * MÍDIA
   * -----
   * Deixe as strings vazias até os arquivos existirem.
   * Exemplos:
   *   hero.image: "/images/hero.jpg"
   *   hero.video: "/videos/hero.mp4"
   *   photos: [{ src: "/images/foto-01.jpg", alt: "Os Claudios no palco" }]
   *   videos: [{ title: "Os Claudios ao vivo", src: "/videos/video-01.mp4", thumbnail: "/images/video-01.jpg" }]
   */
  media: {
    logo: "/logo/logo-png.png",
    logoFull: "/logo/logo.png",
    favicon: "/logo/logo-png.png",

    hero: {
      image: "",
      video: "",
    },

    aboutPhotos: {
      main: "/pai.png",
    },

    photos: [
      // { src: "/images/foto-01.jpg", alt: "Os Claudios" },
      // { src: "/images/foto-02.jpg", alt: "Os Claudios no palco" },
    ],

    videos: [
      // {
      //   title: "Os Claudios ao vivo",
      //   src: "/videos/video-01.mp4",
      //   thumbnail: "/images/video-01.jpg",
      // },
    ],
  },
};

export function publicUrl(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\//, "");
  return `${base}${clean}`;
}

export function getWhatsAppUrl(type = "default") {
  const number = siteData.contact.whatsappNumber;
  const message = siteData.whatsapp[type] || siteData.whatsapp.default;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function hasHeroMedia() {
  return Boolean(siteData.media.hero.image || siteData.media.hero.video);
}

export function getPhotos() {
  return (siteData.media.photos || []).filter((item) => item?.src);
}

export function getVideos() {
  return (siteData.media.videos || []).filter((item) => item?.src);
}
