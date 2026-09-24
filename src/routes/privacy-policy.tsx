import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    ...pageMeta({
      title: "Privacy Policy",
      description:
        "How Digital Avra collects, uses and protects the information you share through this website and its enquiry forms.",
      path: "/privacy-policy",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]),
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you submit an enquiry or growth audit request, we collect the details you provide: your name, phone number, email address, business name, website address, service interest, objective, budget range and any message you write.",
      "We also collect standard technical information such as pages visited, referring source, approximate location, device type and browser, through website analytics.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "To respond to your enquiry, prepare your growth audit and discuss services with you.",
      "To improve the website and understand which pages and campaigns are useful.",
      "To send service-related communication you have asked for. We do not sell your information.",
    ],
  },
  {
    title: "Analytics and advertising tools",
    body: [
      "This website is built to support analytics and advertising measurement tools. Where these are active, they may set cookies or similar identifiers to measure traffic and campaign performance.",
      "You can block or delete cookies through your browser settings. Some site features may work differently if you do.",
    ],
  },
  {
    title: "Data sharing",
    body: [
      "We share information only with service providers that help us operate the website, store enquiries and communicate with you, and only to the extent needed for those purposes.",
      "We may disclose information where required by applicable law.",
    ],
  },
  {
    title: "Data retention and security",
    body: [
      "Enquiry details are retained for as long as needed to serve you and to meet legal or record-keeping requirements.",
      "We take reasonable measures to protect the information we hold. No method of transmission or storage online is completely secure.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to access, correct or delete the information you have shared with us, or to stop contacting you, by writing to us at the email address below.",
    ],
  },
];

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This policy explains what we collect through this website, why we collect it and what you can ask us to do with it."
        crumbs={[{ name: "Privacy Policy" }]}
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
              Questions about this policy can be sent to {site.email}. {site.name} operates
              from {site.location}.
            </p>
          </section>
          <p className="text-muted-foreground border-border mt-10 border-t pt-6 text-xs leading-relaxed">
            This policy is a general template and is not legal advice. Have it reviewed
            before publishing, and replace the placeholder contact details with your final
            business information.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
