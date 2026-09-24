import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "./Reveal";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-border bg-surface relative overflow-hidden border-b pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div
        className="grid-faint pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <div className="container-page relative">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
