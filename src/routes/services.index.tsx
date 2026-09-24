import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCta } from "@/components/FinalCta";
import { services } from "@/data/services";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageMeta({
      title: "Digital Services",
      description:
        "Websites, SEO, Google Ads, Meta Ads, social media, branding, e-commerce and digital infrastructure — delivered by one digital growth partner.",
      path: "/services",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Digital Services Built Around Business Growth"
        subtitle="Choose a single service or build a complete digital growth system. Everything we deliver is designed to produce measurable business outcomes."
        crumbs={[{ name: "Services" }]}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>
      <ProcessSection />
      <FinalCta />
    </PageShell>
  );
}
