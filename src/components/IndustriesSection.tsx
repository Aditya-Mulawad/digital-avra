import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { industries } from "@/data/industries";

export function IndustriesSection({ heading = true }: { heading?: boolean }) {
  return (
    <Section id="industries">
      {heading && (
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Work With"
          subtitle="Digital strategies adapted to how each industry actually wins customers."
        />
      )}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => (
          <Reveal
            key={industry.name}
            delay={Math.min(i, 3) * 0.06}
            as="article"
            className="group border-border bg-card hover:border-primary/40 hover:shadow-lift rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="bg-primary-soft text-primary flex size-11 items-center justify-center rounded-lg">
              <industry.icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{industry.name}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {industry.description}
            </p>
            <ul className="mt-5 space-y-1.5">
              {industry.focus.map((f) => (
                <li key={f} className="text-muted-foreground flex gap-2 text-sm">
                  <span className="bg-primary mt-2 size-1 shrink-0 rounded-full" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
