import {
  Building2,
  Briefcase,
  Rocket,
  ShoppingBag,
  Store,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
  focus: string[];
};

export const industries: Industry[] = [
  {
    name: "Real Estate",
    description:
      "Generate qualified property enquiries and build a stronger digital presence.",
    icon: Building2,
    focus: ["Landing Pages", "Meta Ads", "Lead Tracking", "Remarketing"],
  },
  {
    name: "Local Businesses",
    description: "Get discovered, build trust and turn searches into customers.",
    icon: Store,
    focus: ["Local SEO", "Google Business Profile", "Website", "Reviews"],
  },
  {
    name: "Startups",
    description: "Build your digital foundation from day one.",
    icon: Rocket,
    focus: ["Branding", "Website", "Analytics", "Launch Campaigns"],
  },
  {
    name: "Professional Services",
    description:
      "Turn expertise into a consistent and credible digital presence.",
    icon: Briefcase,
    focus: ["Website", "SEO", "Content", "Lead Forms"],
  },
  {
    name: "Retail & E-commerce",
    description: "Build visibility and turn digital traffic into sales.",
    icon: ShoppingBag,
    focus: ["E-commerce", "Google Ads", "Social Media", "Conversion Tracking"],
  },
  {
    name: "Growing Businesses",
    description: "Scale your existing digital marketing infrastructure.",
    icon: TrendingUp,
    focus: ["Paid Ads", "SEO Growth", "A/B Testing", "Reporting"],
  },
];
