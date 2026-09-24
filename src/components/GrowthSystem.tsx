import { useState } from "react";
import { motion } from "motion/react";
import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { growthStages } from "@/data/growth";
import { cn } from "@/lib/utils";

export function GrowthSystem() {
  const [active, setActive] = useState(0);
  const stage = growthStages[active]!;

  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Our Framework"
        title={
          <span className="text-background">
            The Digital Avra Growth System<sup className="text-sm align-super">™</sup>
          </span>
        }
        subtitle={
          <span className="text-background/70">
            Four connected stages that take a business from digital foundation to
            measurable, compounding growth.
          </span>
        }
      />

      <Reveal delay={0.05} className="mt-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {growthStages.map((s, i) => (
            <button
              key={s.number}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={cn(
                "group relative rounded-lg border p-5 text-left transition-colors",
                active === i
                  ? "border-primary bg-background/8"
                  : "border-background/15 hover:border-background/35",
              )}
            >
              <span
                className={cn(
                  "text-xs font-semibold tracking-[0.14em]",
                  active === i ? "text-primary" : "text-background/45",
                )}
              >
                {s.number}
              </span>
              <span className="text-background mt-2 block text-lg font-semibold">
                {s.name}
              </span>
              <span className="text-background/60 mt-1 block text-sm">{s.summary}</span>
              {active === i && (
                <motion.span
                  layoutId="growth-stage-underline"
                  className="bg-primary absolute inset-x-5 bottom-0 h-0.5 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="border-background/15 mt-6 rounded-lg border p-6 sm:p-8">
          <p className="text-background/50 text-xs font-semibold tracking-[0.14em] uppercase">
            {stage.number} — {stage.name}
          </p>
          <p className="text-background mt-2 text-xl font-semibold">{stage.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stage.items.map((item) => (
              <li
                key={item}
                className="border-background/20 text-background/85 rounded-md border px-3 py-1.5 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
