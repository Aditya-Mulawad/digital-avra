import { Compass, LineChart, Rocket, Sparkles, type LucideIcon } from "lucide-react";

export type Solution = {
  slug: string;
  title: string;
  audience: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    slug: "build-your-digital-presence",
    title: "Build Your Digital Presence",
    audience: "For businesses starting from scratch.",
    description:
      "Everything required to exist credibly online — a website that works, an identity that holds together, and the infrastructure behind both.",
    includes: ["Website", "Branding", "Hosting", "Analytics", "Google Business Profile"],
    icon: Compass,
  },
  {
    slug: "generate-more-leads",
    title: "Generate More Leads",
    audience: "For businesses focused on enquiries.",
    description:
      "A conversion path from ad to landing page to enquiry, with tracking that shows exactly where leads come from.",
    includes: [
      "Landing Pages",
      "Meta Ads",
      "Google Ads",
      "Conversion Tracking",
      "Remarketing",
    ],
    icon: Rocket,
  },
  {
    slug: "grow-organic-visibility",
    title: "Grow Organic Visibility",
    audience: "For businesses building long-term search demand.",
    description:
      "Sustainable visibility in search, built on a technically sound site and content aimed at real buying intent.",
    includes: ["SEO", "Content", "Local SEO", "Google Business Profile", "Analytics"],
    icon: Sparkles,
  },
  {
    slug: "scale-your-digital-marketing",
    title: "Scale Your Digital Marketing",
    audience: "For businesses with traction that want more of it.",
    description:
      "Expand what is already working across channels, with continuous testing and reporting driving the decisions.",
    includes: [
      "Paid Ads",
      "SEO",
      "Social Media",
      "Creative",
      "Analytics",
      "Conversion Optimization",
    ],
    icon: LineChart,
  },
];
