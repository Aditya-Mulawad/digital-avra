import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSolution } from "@/components/ProblemSolution";
import { GrowthSystem } from "@/components/GrowthSystem";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyDigitalAvra } from "@/components/WhyDigitalAvra";
import { IndustriesSection } from "@/components/IndustriesSection";
import { WorkSection } from "@/components/WorkSection";
import { MetricsSection } from "@/components/MetricsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { GrowthAuditSection } from "@/components/GrowthAuditSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { site } from "@/data/site";
import { faqs } from "@/data/faqs";
import { jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: site.tagline,
      description: site.description,
      path: "/",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: site.name,
        description: site.description,
        slogan: site.tagline,
        areaServed: "IN",
        address: { "@type": "PostalAddress", addressLocality: site.location },
      }),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }),
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <GrowthSystem />
        <ServicesSection limit={6} />
        <WhyDigitalAvra />
        <IndustriesSection />
        <WorkSection />
        <MetricsSection />
        <ProcessSection />
        <GrowthAuditSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
