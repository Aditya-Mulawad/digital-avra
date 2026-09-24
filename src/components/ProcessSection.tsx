import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { processSteps } from "@/data/growth";

export function ProcessSection() {
  return (
    <Section tone="muted" id="process">
      <SectionHeading
        eyebrow="Our Process"
        title="A Clear, Structured Approach"
        subtitle="No guesswork. Every engagement follows the same five steps so you always know what happens next."
      />

      <ol className="relative mt-12 grid gap-5 lg:grid-cols-5">
        <span
          className="bg-border absolute top-11 right-0 left-0 hidden h-px lg:block"
          aria-hidden
        />
        {processSteps.map((step, i) => (
          <Reveal
            key={step.number}
            delay={Math.min(i, 4) * 0.07}
            as="li"
            className="relative"
          >
            <span className="border-primary bg-background text-primary relative z-10 flex size-11 items-center justify-center rounded-full border-2 text-sm font-semibold">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg font-semibold">{step.name}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {step.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
