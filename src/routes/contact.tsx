import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { FaqSection } from "@/components/FaqSection";
import { site, whatsappHref } from "@/data/site";
import { track } from "@/lib/analytics";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact Us",
      description:
        "Talk to Digital Avra about your website, SEO, advertising, social media or branding. Send a message or reach us on WhatsApp.",
      path: "/contact",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About Your Digital Growth"
        subtitle="Tell us where your business is today and what you want it to look like online. We'll reply with a clear, practical next step."
        crumbs={[{ name: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="space-y-4">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_whatsapp", { location: "contact_page" })}
              className="border-border bg-card hover:border-primary/40 flex items-start gap-4 rounded-xl border p-5 transition-colors"
            >
              <span className="bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="text-muted-foreground mt-1 block text-sm">
                  {site.whatsappNumber}
                </span>
              </span>
            </a>

            <div className="border-border bg-card flex items-start gap-4 rounded-xl border p-5">
              <span className="bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Mail className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold">Email</span>
                <span className="text-muted-foreground mt-1 block text-sm">{site.email}</span>
              </span>
            </div>

            <div className="border-border bg-card flex items-start gap-4 rounded-xl border p-5">
              <span className="bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                <MapPin className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold">Based in</span>
                <span className="text-muted-foreground mt-1 block text-sm">{site.location}</span>
              </span>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed">
              Prefer email? Write to us anytime — we usually reply within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <LeadForm source="contact" />
          </Reveal>
        </div>
      </Section>

      <FaqSection />
    </PageShell>
  );
}
