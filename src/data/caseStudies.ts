/**
 * DEMO CONTENT — replace with real, verified case studies.
 * No client names, revenue figures or performance claims are stated here
 * because none have been verified yet. `metrics` labels are intentionally
 * qualitative until real data is supplied.
 */
export type CaseStudyCategory =
  | "Web"
  | "SEO"
  | "Paid Ads"
  | "Social Media"
  | "Branding";

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  category: CaseStudyCategory;
  challenge: string;
  solution: string;
  services: string[];
  focus: string[];
  isPlaceholder: boolean;
};

export const caseStudyCategories: ("All" | CaseStudyCategory)[] = [
  "All",
  "Web",
  "SEO",
  "Paid Ads",
  "Social Media",
  "Branding",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "real-estate-lead-generation",
    title: "Real Estate Lead Generation",
    industry: "Real Estate",
    category: "Paid Ads",
    challenge: "Low-quality enquiries and a weak online presence.",
    solution:
      "Dedicated landing page, Meta Ads campaign structure, conversion tracking and remarketing built as one connected system.",
    services: ["Landing Pages", "Meta Ads", "Conversion Tracking", "Remarketing"],
    focus: ["Lead Quality", "Conversion Rate", "Cost Per Lead"],
    isPlaceholder: true,
  },
  {
    slug: "local-services-search-visibility",
    title: "Local Services Search Visibility",
    industry: "Local Business",
    category: "SEO",
    challenge:
      "Invisible in local search results and an unclaimed business profile.",
    solution:
      "Technical clean-up, location-focused pages, Google Business Profile optimisation and review workflow.",
    services: ["Technical SEO", "Local SEO", "Google Business Profile", "Content"],
    focus: ["Local Rankings", "Profile Actions", "Enquiry Volume"],
    isPlaceholder: true,
  },
  {
    slug: "professional-services-website-rebuild",
    title: "Professional Services Website Rebuild",
    industry: "Professional Services",
    category: "Web",
    challenge:
      "A brochure website that described the firm but never asked for an enquiry.",
    solution:
      "Rebuilt page structure around service intent, added lead forms, improved speed and wired up analytics.",
    services: ["Web Development", "Conversion Optimization", "Analytics"],
    focus: ["Page Speed", "Form Starts", "Enquiry Rate"],
    isPlaceholder: true,
  },
  {
    slug: "retail-brand-identity-system",
    title: "Retail Brand Identity System",
    industry: "Retail",
    category: "Branding",
    challenge:
      "Inconsistent visual identity across store, packaging and social channels.",
    solution:
      "Identity system with logo, palette, typography and reusable creative templates for campaigns.",
    services: ["Brand Identity", "Creative Strategy", "Ad Creatives"],
    focus: ["Brand Consistency", "Creative Output", "Recall"],
    isPlaceholder: true,
  },
  {
    slug: "startup-launch-social-presence",
    title: "Startup Launch Social Presence",
    industry: "Startup",
    category: "Social Media",
    challenge: "No audience and no publishing rhythm ahead of launch.",
    solution:
      "Content pillars, a 90-day calendar, reels production and monthly performance reviews.",
    services: ["Content Strategy", "Reels", "Creative Design", "Reporting"],
    focus: ["Reach", "Engagement Rate", "Profile Visits"],
    isPlaceholder: true,
  },
  {
    slug: "ecommerce-search-campaign-restructure",
    title: "E-commerce Search Campaign Restructure",
    industry: "E-commerce",
    category: "Paid Ads",
    challenge: "Budget spread across broad keywords with no conversion data.",
    solution:
      "Restructured campaigns by intent, rebuilt landing pages and implemented conversion tracking.",
    services: ["Google Ads", "Landing Pages", "Conversion Tracking"],
    focus: ["Cost Per Lead", "Search Intent Coverage", "Return on Ad Spend"],
    isPlaceholder: true,
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
