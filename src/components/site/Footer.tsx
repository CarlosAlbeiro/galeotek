import { Link } from "@tanstack/react-router";
import { Cpu, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-background/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-primary)] shadow-glow">
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="text-lg font-semibold">
              galeo <span className="text-primary">tek</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {SITE.subtitle}. Cobertura en {SITE.coverage}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/servicios" className="hover:text-foreground">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/paquetes" className="hover:text-foreground">
                Paquetes
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-foreground">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-foreground">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <span>{SITE.whatsappDisplay}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>{SITE.city}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} galeo tek. Todos los derechos reservados.</p>
          <p>Hecho con tecnología en {SITE.city}.</p>
        </div>
      </div>
    </footer>
  );
}
