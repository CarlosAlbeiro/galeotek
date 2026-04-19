import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";

export const Route = createFileRoute("/admin/ajustes")({
  component: AjustesPage,
});

function AjustesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Ajustes</h1>
        <p className="text-sm text-muted-foreground">
          Configuración general del panel.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
            <Info className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Próximamente</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Edición de textos del sitio, cambio de tema y activación de secciones llegarán en la próxima versión, conectados a Lovable Cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
