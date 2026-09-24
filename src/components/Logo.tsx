import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/digital-avra-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Digital Avra — home"
      className={cn("inline-flex items-center", className)}
    >
      <img
        src={logoUrl}
        alt="Digital Avra — Your Business, Digitally Done."
        width={320}
        height={104}
        className="h-9 w-auto sm:h-10"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
