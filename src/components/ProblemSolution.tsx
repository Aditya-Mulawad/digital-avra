import { ArrowDown } from "lucide-react";
import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import logoUrl from "@/assets/digital-avra-logo.png";

const scattered = [
  "Website",
  "Social Media",
  "Ads",
  "SEO",
  "Branding",
  "Analytics",
];

const connected = [
  { title: "One strategy", body: "Every channel points at the same business objective." },
  { title: "One team", body: "Build, marketing and infrastructure managed together." },
  { title: "One report", body: "Enquiries, cost per lead and channel performance in one view." },
];

export function ProblemSolution() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="The Problem"
            title={
              <>
                Your Business Doesn't Need More Digital Tools. It Needs a{" "}
                <span className="text-primary">Digital System.</span>
              </>
            }
          />
          <Reveal delay={0.05} className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
            <p>A website that doesn't generate enquiries is just a brochure.</p>
            <p>Social media without strategy becomes noise.</p>
            <p>Ads without tracking waste money.</p>
            <p>
              SEO without the right foundation takes longer to deliver results.
            </p>
            <p className="text-foreground font-medium">
              Digital Avra brings everything together into one connected digital
              growth system.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border-border bg-card shadow-card rounded-xl border p-6 sm:p-8">
            <p className="eyebrow">Scattered digital activities</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {scattered.map((item) => (
                <li
                  key={item}
                  className="border-border bg-surface text-muted-foreground rounded-md border border-dashed px-3 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-muted-foreground my-6 flex justify-center">
              <ArrowDown className="size-5" aria-hidden />
            </div>

            <div className="border-primary/25 bg-primary-soft/60 flex items-center justify-center rounded-lg border p-5">
              <img
                src={logoUrl}
                alt="Digital Avra"
                width={320}
                height={104}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto"
              />
            </div>

            <div className="text-muted-foreground my-6 flex justify-center">
              <ArrowDown className="size-5" aria-hidden />
            </div>

            <p className="eyebrow">Connected digital growth system</p>
            <ul className="mt-4 space-y-3">
              {connected.map((item) => (
                <li
                  key={item.title}
                  className="border-border bg-background rounded-lg border p-4"
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
