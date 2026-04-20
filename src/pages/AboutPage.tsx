import { useEffect } from "react";
import { Cpu, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE } from "@/lib/site";

const VALUES = [
  { icon: Sparkles, title: "Claridad", text: "Hablamos sin tecnicismos innecesarios. Entiendes qué se hace y por qué." },
  { icon: ShieldCheck, title: "Soluciones reales", text: "Resolvemos el problema de fondo, no parches que duran un par de semanas." },
  { icon: HeartHandshake, title: "Acompañamiento", text: "No desaparecemos al terminar. Soporte y asesoría continua después del servicio." },
];

export default function AboutPage() {
  useEffect(() => { document.title = "Nosotros — galeo tek"; }, []);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Sobre nosotros</span>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
              Tecnología <span className="gradient-text">cercana</span> y profesional
            </h1>
            <p className="mt-4 text-muted-foreground">
              {SITE.name} nace para resolver, en un solo lugar, todo lo tecnológico que tu hogar y tu emprendimiento necesitan.
              Combinamos software, electricidad, seguridad y asesoría con un trato humano y honesto.
            </p>
            <p className="mt-3 text-muted-foreground">Atendemos en {SITE.coverage}, con disponibilidad por WhatsApp y visitas programadas.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[var(--gradient-primary)] opacity-30 blur-2xl" />
            <div className="glass relative flex aspect-square items-center justify-center rounded-3xl">
              <div className="absolute inset-0 bg-grid opacity-30 rounded-3xl" />
              <div className="relative grid h-32 w-32 place-items-center rounded-2xl bg-[var(--gradient-primary)] shadow-glow animate-pulse-glow">
                <Cpu className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold">Cómo trabajamos</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] shadow-glow">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
