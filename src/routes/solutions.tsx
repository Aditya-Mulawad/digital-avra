import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GrowthSystem } from "@/components/GrowthSystem";
import { FinalCta } from "@/components/FinalCta";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    ...pageMeta({
      title: "Digital Solutions",
      description:
        "Objective-based digital solutions: launch a new business online, generate more leads, grow search visibility or scale existing digital marketing.",
      path: "/solutions",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
      ]),
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Solutions"
        title="Start With Your Objective, Not a Service List"
        subtitle="Every business is at a different stage. Pick the outcome you're after and we'll assemble the right combination of services around it."
        crumbs={[{ name: "Solutions" }]}
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {solutions.map((solution, i) => (
            <Reveal
              key={solution.slug}
              delay={Math.min(i, 3) * 0.06}
              as="article"
              className="border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-7 transition-all duration-300"
            >
              <span className="bg-primary-soft text-primary flex size-11 items-center justify-center rounded-lg">
                <solution.icon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{solution.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {solution.description}
              </p>
              <p className="eyebrow mt-6">Typically includes</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {solution.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/free-growth-audit">
                    Discuss this solution
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <GrowthSystem />
      <FinalCta />
    </PageShell>
  );
}
