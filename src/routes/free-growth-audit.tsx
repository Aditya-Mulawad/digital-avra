import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { GrowthAuditSection } from "@/components/GrowthAuditSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FaqSection } from "@/components/FaqSection";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/free-growth-audit")({
  head: () => ({
    ...pageMeta({
      title: "Free Growth Audit",
      description:
        "Request a free digital growth audit. We review your website, search visibility, advertising, social presence and tracking, then send a prioritised action plan.",
      path: "/free-growth-audit",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Free Growth Audit", path: "/free-growth-audit" },
      ]),
    ],
  }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Free Growth Audit"
        title="See Exactly Where Your Digital Growth Is Leaking"
        subtitle="A practical review of your current digital presence and a prioritised plan for what to fix first. No cost, no obligation."
        crumbs={[{ name: "Free Growth Audit" }]}
      />
      <GrowthAuditSection />
      <ProcessSection />
      <FaqSection />
    </PageShell>
  );
}
