import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";

export function WorkSection() {
  return (
    <Section tone="muted" id="work">
      <SectionHeading
        eyebrow="Our Work"
        title="How We Build Digital Growth"
        subtitle="Example engagement structures showing how we approach different business objectives. Verified client case studies will be published here as they are approved."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.slice(0, 3).map((study, i) => (
          <Reveal key={study.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link to="/work">View All Work</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
