import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    ...pageMeta({
      title: "Terms & Conditions",
      description:
        "The terms that apply when you use the Digital Avra website, submit an enquiry or engage us for digital services.",
      path: "/terms-and-conditions",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Terms & Conditions", path: "/terms-and-conditions" },
      ]),
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Using this website",
    body: [
      "By accessing this website you agree to use it lawfully and not to attempt to disrupt, copy or misuse it or its content.",
    ],
  },
  {
    title: "Information on this site",
    body: [
      "Content here is provided for general information about our services. Examples shown in the work section are illustrative engagement structures, not verified client results.",
      "We do not guarantee any specific ranking, traffic, lead volume or revenue outcome. Digital results depend on market, budget, competition and factors outside our control.",
    ],
  },
  {
    title: "Enquiries and proposals",
    body: [
      "Submitting a form does not create a contract. Any engagement begins only after a written proposal or agreement is accepted by both sides.",
      "Scope, timelines, deliverables and fees for a project are governed by that written agreement.",
    ],
  },
  {
    title: "Payments",
    body: [
      "Fees, schedules and payment terms are set out in the applicable proposal or agreement. Third-party costs such as advertising spend, hosting, domains and licences are billed separately unless stated otherwise.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Our branding, website content and design remain our property. Deliverables created for a client transfer as described in that client's agreement, normally on full payment.",
      "Clients confirm they hold the rights to any material they supply to us for use in their project.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the extent permitted by law, our liability arising from any engagement is limited to the fees paid for the specific service in question. We are not liable for indirect or consequential losses.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these terms. The version published on this page at the time of your visit is the one that applies.",
    ],
  },
];

function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The basis on which we provide this website and our digital services."
        crumbs={[{ name: "Terms & Conditions" }]}
      />
      <Section>
        <div className="max-w-2xl">
          {sections.map((section) => (
            <section key={section.title} className="mt-10 first:mt-0">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground mt-3 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Questions about these terms can be sent to {site.email}.
            </p>
          </section>
          <p className="text-muted-foreground border-border mt-10 border-t pt-6 text-xs leading-relaxed">
            These terms are a general template and are not legal advice. Have them reviewed
            before publishing.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
