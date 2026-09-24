import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { metrics } from "@/data/growth";

/**
 * Metric values are intentionally null until verified figures exist.
 * Never hardcode performance claims here.
 */
export function MetricsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Measurable Results"
        title="Digital Growth You Can Measure"
        subtitle="We report on what actually matters to your business. Figures are published here only once they are verified for your account."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <Reveal
            key={metric.label}
            delay={Math.min(i, 3) * 0.06}
            as="div"
            className="border-border bg-card rounded-xl border p-6"
          >
            <p className="text-primary text-3xl font-semibold">
              {metric.value === null ? "—" : `${metric.value}${metric.suffix ?? ""}`}
            </p>
            <p className="mt-3 text-sm font-semibold">{metric.label}</p>
            <p className="text-muted-foreground mt-1 text-xs">{metric.note}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="text-muted-foreground mt-8 text-center text-sm">
          Every engagement includes conversion tracking, analytics and transparent
          performance reporting.
        </p>
      </Reveal>
    </Section>
  );
}
