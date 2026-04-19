import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/paquetes")({
  head: () => ({
    meta: [
      { title: "Paquetes — CAB system" },
      {
        name: "description",
        content: "Paquetes integrales de tecnología para tu hogar y negocio. Precios claros, todo en uno.",
      },
      { property: "og:title", content: "Paquetes — CAB system" },
      {
        property: "og:description",
        content: "Soluciones combinadas para hogar y emprendedores con un mejor precio.",
      },
    ],
  }),
  component: PackagesPage,
});

const PACKAGES = [
  {
    id: "hogar",
    name: "Hogar en Orden",
    tag: "Más popular",
    price: "$199.000",
    description: "Todo lo esencial para tu casa en una sola visita.",
    features: [
      "Revisión eléctrica completa",
      "Mantenimiento de 1 computador",
      "Asesoría de cámaras",
      "Soporte WhatsApp 30 días",
    ],
    highlight: true,
  },
  {
    id: "empre",
    name: "Emprendedor Digital",
    price: "$499.000",
    description: "Lanza tu negocio online con identidad y tecnología sólida.",
    features: [
      "Página web (1 sección)",
      "Dominio y correo profesional",
      "Configuración de redes",
      "Capacitación 1 hora",
    ],
    highlight: false,
  },
  {
    id: "seg",
    name: "Seguridad Total",
    price: "$899.000",
    description: "Protege tu hogar o local con un sistema profesional.",
    features: [
      "4 cámaras HD instaladas",
      "Acceso desde el celular",
      "DVR + cableado",
      "Garantía 6 meses",
    ],
    highlight: false,
  },
];

function PackagesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pt-20">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Paquetes</span>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Soluciones combinadas</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Mezclamos lo mejor de cada servicio para darte más por menos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.id}
              className={
                "relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur transition-all " +
                (p.highlight
                  ? "border-primary/50 bg-card/80 shadow-glow"
                  : "border-white/10 bg-card/60 hover:border-primary/30")
              }
            >
              {p.tag && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--gradient-neon)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--neon-foreground)] shadow-glow-neon">
                  <Sparkles className="h-3 w-3" /> {p.tag}
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="my-5">
                <div className="text-4xl font-bold gradient-text">{p.price}</div>
                <div className="text-xs text-muted-foreground">COP</div>
              </div>
              <ul className="space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={
                  "mt-6 gap-2 " +
                  (p.highlight
                    ? "bg-[var(--gradient-primary)] text-primary-foreground shadow-glow"
                    : "border border-white/15 bg-white/5 text-foreground hover:bg-white/10")
                }
                variant={p.highlight ? "default" : "outline"}
              >
                <a
                  href={waLink(`Hola, me interesa el paquete ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> Solicitar
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* comparison */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur">
          <div className="grid grid-cols-4 border-b border-white/10 p-4 text-xs font-medium text-muted-foreground sm:text-sm">
            <div>Característica</div>
            {PACKAGES.map((p) => (
              <div key={p.id} className="text-center">
                {p.name}
              </div>
            ))}
          </div>
          {[
            { label: "Servicio eléctrico", v: [true, false, false] },
            { label: "Mantenimiento PC", v: [true, false, false] },
            { label: "Página web", v: [false, true, false] },
            { label: "Cámaras instaladas", v: [false, false, true] },
            { label: "Soporte WhatsApp", v: [true, true, true] },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-4 border-b border-white/5 p-4 text-xs sm:text-sm"
            >
              <div className="text-muted-foreground">{row.label}</div>
              {row.v.map((on, i) => (
                <div key={i} className="text-center">
                  {on ? (
                    <CheckCircle2 className="mx-auto h-4 w-4 text-accent" />
                  ) : (
                    <span className="text-muted-foreground/40">—</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
