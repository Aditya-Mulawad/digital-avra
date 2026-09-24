import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { site, whatsappHref } from "@/data/site";
import { track } from "@/lib/analytics";
import logoUrl from "@/assets/digital-avra-logo.png";

const company = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
] as const;

const serviceLinks = [
  { label: "Web Development", slug: "web-development" },
  { label: "SEO", slug: "seo" },
  { label: "Meta Ads", slug: "meta-ads" },
  { label: "Google Ads", slug: "google-ads" },
  { label: "Social Media", slug: "social-media" },
  { label: "Branding", slug: "branding" },
  { label: "Hosting", slug: "hosting" },
];

const socialLinks = Object.entries(site.social)
  .filter(([, url]) => !url.includes("_HERE"))
  .map(([label, href]) => ({ label: label.charAt(0).toUpperCase() + label.slice(1), href }));

export function Footer() {
  return (
    <footer className="bg-ink text-background/75">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <img
              src={logoUrl}
              alt="Digital Avra logo"
              width={320}
              height={104}
              loading="lazy"
              decoding="async"
              className="h-11 w-auto rounded-sm bg-white p-1.5"
            />
            <p className="text-background mt-5 text-base font-medium">{site.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed">{site.description}</p>
          </div>

          <FooterColumn title="Company">
            {company.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-background transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {serviceLinks.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: l.slug }}
                  className="hover:text-background transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <div className="space-y-8">
            <FooterColumn title="Resources">
              <li>
                <Link to="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/free-growth-audit"
                  className="hover:text-background transition-colors"
                >
                  Digital Growth Audit
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  hash="faq"
                  className="hover:text-background transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </FooterColumn>

            <FooterColumn title="Contact">
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                <a
                  href={whatsappHref()}
                  onClick={() => track("click_whatsapp", { location: "footer" })}
                  className="hover:text-background transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-background break-all transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" aria-hidden />
                {site.location}
              </li>
            </FooterColumn>

            {socialLinks.length > 0 && (
              <FooterColumn title="Social">
                {socialLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-background transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </FooterColumn>
            )}
          </div>
        </div>

        <div className="border-background/15 mt-14 flex flex-col gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Digital Avra. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-background transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-background/50 text-xs font-semibold tracking-[0.14em] uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
