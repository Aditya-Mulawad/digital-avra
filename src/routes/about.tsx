import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { WhyDigitalAvra } from "@/components/WhyDigitalAvra";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCta } from "@/components/FinalCta";
import { site } from "@/data/site";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

const values = [
  {
    title: "Clarity over jargon",
    body: "You should always understand what we're doing, why we're doing it and what it's meant to achieve.",
  },
  {
    title: "Outcomes over activity",
    body: "Posts, clicks and impressions are inputs. Enquiries, calls and customers are the point.",
  },
  {
    title: "Systems over one-offs",
    body: "A single campaign fades. A connected digital system compounds.",
  },
  {
    title: "Honesty about results",
    body: "We publish figures only when they're verified. No inflated claims, no borrowed case studies.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageMeta({
      title: "About Us",
      description:
        "Digital Avra is a digital solutions and growth agency helping businesses build, market and grow online through one connected digital system.",
      path: "/about",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="One Digital Partner. Everything Your Business Needs Online."
        subtitle={site.description}
        crumbs={[{ name: "About" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Built for businesses that want growth, not just presence" />
            <Reveal delay={0.05} className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
              <p>
                Digital Avra is a digital solutions and growth agency. We work with
                businesses that are tired of juggling separate vendors for their website,
                their ads, their SEO and their social media — and getting no clear picture
                of what any of it is producing.
              </p>
              <p>
                Instead of selling isolated services, we build a connected digital growth
                system: the foundation that makes you credible, the channels that bring in
                the right people, the pages that convert them, and the measurement that
                tells you what to do next.
              </p>
              <p className="text-foreground font-medium">
                {site.tagline}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-border bg-card rounded-xl border p-5"
              >
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <WhyDigitalAvra />
      <ProcessSection />
      <FinalCta />
    </PageShell>
  );
}
