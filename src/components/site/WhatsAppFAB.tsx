import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFAB() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] shadow-glow-neon transition-transform hover:scale-110 animate-pulse-glow"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
