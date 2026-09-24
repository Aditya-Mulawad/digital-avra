import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FinalCta } from "@/components/FinalCta";
import { caseStudies, caseStudyCategories } from "@/data/caseStudies";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    ...pageMeta({
      title: "Our Work",
      description:
        "Example engagement structures showing how Digital Avra approaches websites, SEO, paid advertising, social media and branding projects.",
      path: "/work",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
      ]),
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<(typeof caseStudyCategories)[number]>("All");
  const list =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Work"
        title="How We Build Digital Growth"
        subtitle="These are illustrative engagement structures, not client results. Verified case studies will be published here once clients approve them."
        crumbs={[{ name: "Work" }]}
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work by category">
          {caseStudyCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === category
                  ? "border-ink bg-ink text-background"
                  : "border-border hover:border-primary/50 text-muted-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((study, i) => (
            <Reveal key={study.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-muted-foreground mt-10 text-sm">
            No examples in this category yet.
          </p>
        )}
      </Section>

      <FinalCta />
    </PageShell>
  );
}
