import {
  BarChart3,
  Globe,
  Megaphone,
  MonitorSmartphone,
  PenTool,
  Search,
  Server,
  Target,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  number: string;
  name: string;
  title: string;
  description: string;
  icon: LucideIcon;
  includes: string[];
  ctaLabel: string;
  hasPage: boolean;
  outcomes: string[];
  approach: { heading: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    name: "Web Development",
    title: "Websites Built to Convert.",
    description:
      "Fast, responsive and strategically designed websites that turn visitors into enquiries.",
    icon: MonitorSmartphone,
    includes: [
      "Business Websites",
      "Landing Pages",
      "WordPress",
      "E-commerce",
      "Custom Web Development",
      "Website Redesign",
      "Speed Optimization",
      "Conversion Optimization",
    ],
    ctaLabel: "Explore Web Solutions",
    hasPage: true,
    outcomes: [
      "A site structured around the enquiry, not the homepage slideshow",
      "Fast loading on mobile networks",
      "Tracking wired in from day one",
    ],
    approach: [
      {
        heading: "Structure before styling",
        body: "We map the pages a buyer actually moves through — problem, proof, offer, enquiry — and design the layout around that path.",
      },
      {
        heading: "Built for speed",
        body: "Lean pages, right-sized images and clean code so the site stays fast on real mobile connections.",
      },
      {
        heading: "Measurable from launch",
        body: "Analytics, conversion events and lead tracking are configured before the site goes live, not months later.",
      },
    ],
  },
  {
    slug: "seo",
    number: "02",
    name: "SEO",
    title: "Get Found. Get Chosen.",
    description:
      "Build sustainable search visibility and reach customers when they are actively looking for your business.",
    icon: Search,
    includes: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Keyword Strategy",
      "Content SEO",
      "Google Business Profile",
      "Link Building",
      "Search Console & Analytics",
    ],
    ctaLabel: "Explore SEO",
    hasPage: true,
    outcomes: [
      "A technically clean, crawlable website",
      "Coverage of the searches your buyers actually use",
      "Local visibility where it matters",
    ],
    approach: [
      {
        heading: "Fix the foundation",
        body: "Indexing, site structure, speed and internal linking come first — rankings follow a healthy site, not the other way round.",
      },
      {
        heading: "Target intent, not volume",
        body: "We prioritise the searches with buying intent for your business rather than chasing broad vanity keywords.",
      },
      {
        heading: "Compound the gains",
        body: "Content, on-page work and authority building run continuously, reviewed against Search Console data.",
      },
    ],
  },
  {
    slug: "meta-ads",
    number: "03",
    name: "Meta Ads",
    title: "Turn Attention Into Leads.",
    description:
      "Strategic Facebook and Instagram advertising built around targeting, creative testing and measurable conversions.",
    icon: Megaphone,
    includes: [
      "Lead Generation",
      "Audience Targeting",
      "Creative Strategy",
      "Retargeting",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
    ctaLabel: "Explore Meta Ads",
    hasPage: true,
    outcomes: [
      "Campaigns pointed at a page designed to convert",
      "Creative tested in structured rounds",
      "Lead quality reviewed, not just lead count",
    ],
    approach: [
      {
        heading: "Offer first",
        body: "We define the offer and the audience before touching Ads Manager — most underperforming accounts have a messaging problem, not a bidding problem.",
      },
      {
        heading: "Creative as the variable",
        body: "Structured creative testing across hooks, formats and angles, with clear rules on what gets scaled or retired.",
      },
      {
        heading: "Tracked end to end",
        body: "Pixel and conversion events configured so reporting reflects real enquiries, not platform-side vanity metrics.",
      },
    ],
  },
  {
    slug: "google-ads",
    number: "04",
    name: "Google Ads",
    title: "Be There When Customers Search.",
    description:
      "Reach high-intent customers through strategic Google Search and performance campaigns.",
    icon: Target,
    includes: [
      "Search Ads",
      "Keyword Strategy",
      "Landing Pages",
      "Conversion Tracking",
      "Remarketing",
      "Campaign Optimization",
    ],
    ctaLabel: "Explore Google Ads",
    hasPage: true,
    outcomes: [
      "Spend concentrated on high-intent searches",
      "Landing pages matched to the search term",
      "Conversion data you can act on",
    ],
    approach: [
      {
        heading: "Intent mapping",
        body: "Keywords grouped by what the searcher wants, so ad copy and landing page match the moment.",
      },
      {
        heading: "Waste control",
        body: "Negative keywords, match-type discipline and budget pacing keep spend on searches that can convert.",
      },
      {
        heading: "Continuous optimisation",
        body: "Bids, copy and pages adjusted against conversion data on a regular review cycle.",
      },
    ],
  },
  {
    slug: "social-media",
    number: "05",
    name: "Social Media",
    title: "Build a Presence People Remember.",
    description:
      "Strategic content and social media management designed to build visibility, trust and engagement.",
    icon: Globe,
    includes: [
      "Instagram",
      "Facebook",
      "Content Strategy",
      "Reels",
      "Creative Design",
      "Copywriting",
      "Content Calendars",
      "Performance Reporting",
    ],
    ctaLabel: "Explore Social Media",
    hasPage: true,
    outcomes: [
      "A consistent publishing rhythm",
      "Content tied to business themes, not trends alone",
      "Monthly performance reporting",
    ],
    approach: [
      {
        heading: "Content pillars",
        body: "We define a small set of themes your audience cares about and plan every post against them.",
      },
      {
        heading: "Production that ships",
        body: "Design, copy and calendars handled end to end so publishing does not depend on someone finding spare time.",
      },
      {
        heading: "Review and refine",
        body: "Formats that earn attention get more budget and frequency; the rest are dropped.",
      },
    ],
  },
  {
    slug: "branding",
    number: "06",
    name: "Branding & Creative",
    title: "Create a Brand People Remember.",
    description:
      "Identity and creative systems that make your business look as credible as it is.",
    icon: PenTool,
    includes: [
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives",
      "Ad Creatives",
      "Marketing Collateral",
      "Creative Strategy",
      "Video & Reel Creatives",
    ],
    ctaLabel: "Explore Branding",
    hasPage: true,
    outcomes: [
      "One consistent identity across every touchpoint",
      "Templates your team can reuse",
      "Creative built for performance, not just looks",
    ],
    approach: [
      {
        heading: "Positioning first",
        body: "What you stand for and who you serve shapes the identity — colour and type come after that decision.",
      },
      {
        heading: "A usable system",
        body: "Logo, palette, type and layout rules delivered as a system your team and ours can apply consistently.",
      },
      {
        heading: "Creative that performs",
        body: "Ad and social creative designed against the metrics they will be judged on.",
      },
    ],
  },
  {
    slug: "hosting",
    number: "07",
    name: "Hosting & Infrastructure",
    title: "Keep Your Digital Presence Running.",
    description:
      "Domains, hosting, email and maintenance handled so your digital presence stays online and secure.",
    icon: Server,
    includes: [
      "Domain Setup",
      "Web Hosting",
      "SSL",
      "Business Email",
      "Website Maintenance",
      "Backups",
      "Security",
      "Technical Support",
    ],
    ctaLabel: "Explore Hosting",
    hasPage: true,
    outcomes: [
      "One place to manage domain, hosting and email",
      "Backups and updates handled on schedule",
      "A support contact when something breaks",
    ],
    approach: [
      {
        heading: "Clean setup",
        body: "Domain, DNS, SSL and business email configured properly the first time.",
      },
      {
        heading: "Maintained, not forgotten",
        body: "Updates, backups and security checks run on a schedule instead of after an incident.",
      },
      {
        heading: "Support that answers",
        body: "A direct line for technical issues, with clear response expectations.",
      },
    ],
  },
  {
    slug: "analytics",
    number: "08",
    name: "Analytics & Tracking",
    title: "Know What Is Actually Working.",
    description:
      "Tracking and reporting that connect marketing activity to enquiries, calls and sales.",
    icon: BarChart3,
    includes: [
      "Google Analytics",
      "Search Console",
      "Meta Pixel",
      "Conversion Tracking",
      "Lead Tracking",
      "Performance Dashboards",
      "Campaign Analytics",
      "Optimization",
    ],
    ctaLabel: "Explore Analytics",
    hasPage: false,
    outcomes: [
      "Every enquiry attributed to a source",
      "Dashboards you can read in a minute",
      "Decisions based on data, not opinion",
    ],
    approach: [
      {
        heading: "Define the conversion",
        body: "We agree what counts as a lead before we measure anything.",
      },
      {
        heading: "Instrument correctly",
        body: "Analytics, pixels and conversion events implemented and validated, including deduplication where needed.",
      },
      {
        heading: "Report what matters",
        body: "A short dashboard focused on enquiries, cost per lead and the channels driving them.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
