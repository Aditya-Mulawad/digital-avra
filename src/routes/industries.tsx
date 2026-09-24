import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCta } from "@/components/FinalCta";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => ({
    ...pageMeta({
      title: "Industries We Serve",
      description:
        "Digital growth strategies for real estate, local businesses, startups, professional services, retail, e-commerce and growing businesses.",
      path: "/industries",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
      ]),
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Industries"
        title="Strategies Shaped Around Your Industry"
        subtitle="How customers search, compare and decide changes from one industry to the next. Our approach changes with it."
        crumbs={[{ name: "Industries" }]}
      />
      <IndustriesSection heading={false} />
      <ProcessSection />
      <FinalCta />
    </PageShell>
  );
}
