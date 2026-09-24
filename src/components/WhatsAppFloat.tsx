import { MessageCircle } from "lucide-react";
import { site, whatsappHref } from "@/data/site";
import { track } from "@/lib/analytics";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("click_whatsapp", { location: "floating_button" })}
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="bg-ink text-background hover:bg-primary fixed right-4 bottom-4 z-40 inline-flex h-13 items-center gap-2 rounded-full px-5 text-sm font-semibold shadow-lg transition-colors sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span>WhatsApp</span>
    </a>
  );
}
