export const SITE = {
  name: "galeo tek",
  tagline: "Soluciones tecnológicas para tu hogar y negocio",
  subtitle: "Software, electricidad, cámaras y asesoría en un solo lugar",
  whatsappNumber: "573207282185",
  whatsappDisplay: "+57 320 728 2185",
  email: "cabsystem.axm@gmail.com",
  city: "Armenia, Quindío",
  coverage: "Armenia y todo el Quindío",
} as const;

export const waLink = (message = "Hola galeo tek, quisiera solicitar un servicio.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
