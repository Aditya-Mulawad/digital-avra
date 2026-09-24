import { BarChart3, Boxes, Layers, Target, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { whyDigitalAvra } from "@/data/growth";

const icons = [Boxes, Target, TrendingUp, BarChart3, Layers];

export function WhyDigitalAvra() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Why Digital Avra" title="Why Businesses Choose Digital Avra" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyDigitalAvra.map((item, i) => {
          const Icon = icons[i] ?? Boxes;
          return (
            <Reveal
              key={item.number}
              delay={Math.min(i, 3) * 0.06}
              as="article"
              className="border-border bg-card hover:border-primary/40 rounded-xl border p-6 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-primary bg-primary-soft flex size-10 items-center justify-center rounded-lg">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-muted-foreground text-xs font-semibold tracking-[0.14em]">
                  {item.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
