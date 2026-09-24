import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FinalCta } from "@/components/FinalCta";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { title: study.title, challenge: study.challenge };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    return {
      ...pageMeta({
        title: loaderData.title,
        description: loaderData.challenge,
        path: `/work/${params.slug}`,
        type: "article",
      }),
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: loaderData.title, path: `/work/${params.slug}` },
        ]),
      ],
    };
  },
  component: WorkDetail,
});

function WorkDetail() {
  const { slug } = Route.useParams();
  const study = getCaseStudy(slug)!;
  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        eyebrow={`${study.category} • ${study.industry}`}
        title={study.title}
        subtitle="Illustrative engagement example. No client names or performance figures are shown because none have been verified for publication."
        crumbs={[{ name: "Work", to: "/work" }, { name: study.title }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-10">
            <Reveal>
              <h2 className="text-2xl font-semibold">The challenge</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">{study.challenge}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl font-semibold">Our approach</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">{study.solution}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-semibold">What we measure</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {study.focus.map((f) => (
                  <li
                    key={f}
                    className="border-border bg-surface rounded-lg border px-4 py-3 text-sm font-medium"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={0.08}
            className="border-border bg-card shadow-card h-fit rounded-xl border p-6"
          >
            <p className="eyebrow">Services applied</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <li
                  key={s}
                  className="border-border text-muted-foreground rounded-md border px-3 py-1.5 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground border-border mt-6 border-t pt-5 text-xs leading-relaxed">
              This page describes how we structure an engagement of this type. It does not
              represent a specific client or reported outcome.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="More Work" title="Other engagement examples" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((c, i) => (
            <Reveal key={c.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
              <CaseStudyCard study={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta />
    </PageShell>
  );
}
