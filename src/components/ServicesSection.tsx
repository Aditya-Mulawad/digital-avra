import { Section, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Everything Your Business Needs to Grow Online"
        subtitle="From your first website to full-scale performance marketing, Digital Avra brings your digital ecosystem together under one partner."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((service, i) => (
          <Reveal key={service.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
