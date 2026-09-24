import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { GrowthAuditSection } from "@/components/GrowthAuditSection";
import { FinalCta } from "@/components/FinalCta";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/data/services";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service || !service.hasPage) throw notFound();
    return { name: service.name, description: service.description };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      ...pageMeta({
        title: loaderData.name,
        description: loaderData.description,
        path: `/services/${params.slug}`,
      }),
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: loaderData.name, path: `/services/${params.slug}` },
        ]),
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        eyebrow={service.name}
        title={service.title}
        subtitle={service.description}
        crumbs={[{ name: "Services", to: "/services" }, { name: service.name }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our Approach" title={`How we deliver ${service.name}`} />
            <div className="mt-8 space-y-6">
              {service.approach.map((step, i) => (
                <Reveal
                  key={step.heading}
                  delay={Math.min(i, 3) * 0.06}
                  className="border-border border-l-2 pl-5"
                >
                  <h3 className="text-lg font-semibold">{step.heading}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <Reveal className="border-border bg-card shadow-card rounded-xl border p-6">
              <p className="eyebrow">What's included</p>
              <ul className="mt-4 grid gap-2.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.06} className="border-border bg-surface rounded-xl border p-6">
              <p className="eyebrow">What you get</p>
              <ul className="mt-4 space-y-2.5">
                {service.outcomes.map((item) => (
                  <li key={item} className="text-muted-foreground flex gap-2.5 text-sm">
                    <span className="bg-primary mt-2 size-1 shrink-0 rounded-full" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full">
                <Link to="/free-growth-audit">
                  {service.ctaLabel}
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="More Services" title="Pair this with" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <GrowthAuditSection />
      <FinalCta />
    </PageShell>
  );
}
