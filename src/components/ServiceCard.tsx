import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { track } from "@/lib/analytics";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-11 items-center justify-center rounded-lg transition-colors">
          <Icon className="size-5" aria-hidden />
        </span>
        <span className="text-muted-foreground text-xs font-semibold tracking-[0.14em]">
          {service.number}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold">{service.name}</h3>
      <p className="text-primary mt-1 text-sm font-medium">{service.title}</p>
      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
        {service.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {service.includes.slice(0, 6).map((item) => (
          <li
            key={item}
            className="border-border text-muted-foreground rounded-md border px-2.5 py-1 text-xs"
          >
            {item}
          </li>
        ))}
      </ul>

      <span className="text-primary mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
        {service.ctaLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );

  const className =
    "group border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1";

  if (!service.hasPage) {
    return <article className={className}>{inner}</article>;
  }

  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      onClick={() => track("view_service", { service: service.slug })}
      className={className}
    >
      {inner}
    </Link>
  );
}
