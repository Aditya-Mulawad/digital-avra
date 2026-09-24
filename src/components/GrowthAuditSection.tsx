import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

const included = [
  "Website & landing page review",
  "Search visibility and SEO gaps",
  "Paid advertising opportunities",
  "Social media presence check",
  "Conversion and tracking review",
  "A prioritised action plan",
];

export function GrowthAuditSection() {
  return (
    <Section id="growth-audit" tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Free Growth Audit"
            title="Find Out What's Holding Your Digital Growth Back"
            subtitle="Tell us about your business and we'll review your current digital presence, then send back a clear, prioritised plan — no obligation."
          />
          <Reveal delay={0.05}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="text-primary mt-0.5 size-4.5 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <LeadForm source="growth_audit" />
        </Reveal>
      </div>
    </Section>
  );
}
