/**
 * Blog content source. Structured so posts can later be loaded from a CMS
 * or database without changing the components that render them.
 */
export type BlogCategory =
  | "Digital Marketing"
  | "SEO"
  | "Web Development"
  | "Paid Advertising"
  | "Social Media"
  | "Business Growth"
  | "Branding";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readingTime: string;
  body: string[];
};

export const blogCategories: BlogCategory[] = [
  "Digital Marketing",
  "SEO",
  "Web Development",
  "Paid Advertising",
  "Social Media",
  "Business Growth",
  "Branding",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-website-isnt-generating-enquiries",
    title: "Why Your Website Isn't Generating Enquiries",
    excerpt:
      "Most business websites are structured like brochures. Here is how to restructure yours around the decision a buyer actually makes.",
    category: "Web Development",
    date: "2026-08-18",
    readingTime: "6 min read",
    body: [
      "A website that describes your company is not the same as a website that generates enquiries. The first explains who you are. The second moves someone from interest to action.",
      "Start with the path. A buyer arrives with a problem, looks for evidence you have solved it before, checks whether you work with businesses like theirs, and then decides whether contacting you is worth the effort. Every page should serve one of those steps.",
      "Next, reduce friction on the enquiry itself. Long forms, vague calls to action and contact pages buried in the navigation all cost you conversations. Ask for the minimum information you need to have a useful first call.",
      "Finally, measure it. If you cannot see how many people started a form and how many finished it, you are guessing. Conversion tracking turns website changes into decisions instead of opinions.",
    ],
  },
  {
    slug: "seo-foundations-before-content",
    title: "SEO Foundations to Fix Before You Write More Content",
    excerpt:
      "Publishing more articles rarely fixes a technical problem. Work through these foundations first.",
    category: "SEO",
    date: "2026-08-04",
    readingTime: "7 min read",
    body: [
      "Content is the visible part of SEO, which is why it gets most of the attention. But content published on a site search engines struggle to crawl or understand rarely performs.",
      "Check indexing first. Search Console will tell you which pages are indexed and which are excluded, and why. Pages that are not indexed cannot rank, no matter how good the writing is.",
      "Then look at structure. Clear page hierarchy, descriptive titles, sensible internal links and one page per topic prevent your own pages from competing with each other.",
      "Speed and mobile experience matter too, especially for local searches carried out on phones. Once the foundation is stable, content compounds instead of leaking value.",
    ],
  },
  {
    slug: "meta-ads-creative-testing-framework",
    title: "A Simple Creative Testing Framework for Meta Ads",
    excerpt:
      "Creative is the biggest lever in Meta advertising. Testing it needs structure, not guesswork.",
    category: "Paid Advertising",
    date: "2026-07-21",
    readingTime: "5 min read",
    body: [
      "When a Meta campaign underperforms, the instinct is to adjust budgets and audiences. In practice, creative usually explains the larger share of the difference.",
      "Test one variable at a time: the hook, the format, or the angle. Changing all three at once tells you which ad won but never why.",
      "Give each round enough spend and time to produce a readable result, and set rules in advance for what gets scaled and what gets retired.",
      "Feed the results back into the next round. Over time you build a library of angles that work for your offer rather than restarting every month.",
    ],
  },
  {
    slug: "tracking-setup-every-business-needs",
    title: "The Tracking Setup Every Business Needs Before Spending on Ads",
    excerpt:
      "Advertising without conversion tracking is spending without feedback. Here is the minimum setup.",
    category: "Digital Marketing",
    date: "2026-07-07",
    readingTime: "6 min read",
    body: [
      "Before the first rupee of ad spend, agree on what a conversion is. For most businesses it is a qualified enquiry — a form submission, a call or a WhatsApp message from someone in your market.",
      "Implement analytics and conversion events for those actions, and validate them by submitting a real test enquiry end to end.",
      "Where platform pixels and server-side events both fire, plan deduplication with a shared event ID so a single lead is not counted twice.",
      "With this in place, reporting reflects business outcomes rather than clicks, and optimisation decisions become straightforward.",
    ],
  },
  {
    slug: "local-seo-checklist-for-service-businesses",
    title: "A Local SEO Checklist for Service Businesses",
    excerpt:
      "For local businesses, search visibility often comes down to a handful of unglamorous fundamentals.",
    category: "SEO",
    date: "2026-06-23",
    readingTime: "5 min read",
    body: [
      "Claim and complete your Google Business Profile. Categories, services, hours, photos and a clear description do more for local visibility than most people expect.",
      "Keep name, address and phone number consistent everywhere they appear online. Inconsistency creates doubt for both search engines and customers.",
      "Build location-relevant pages on your website that describe the service and the area in genuinely useful terms rather than repeating a city name.",
      "Ask for reviews as part of your normal delivery process, and respond to them. It is the most reliable trust signal a local business has.",
    ],
  },
  {
    slug: "brand-consistency-and-conversion",
    title: "What Brand Consistency Actually Does for Conversion",
    excerpt:
      "Branding is often treated as decoration. It is closer to a shortcut for trust.",
    category: "Branding",
    date: "2026-06-09",
    readingTime: "4 min read",
    body: [
      "A visitor makes a judgement about credibility long before they read your service list. Consistent identity across the website, ads and social profiles is part of that judgement.",
      "Consistency also compounds attention. When your creative looks recognisably yours, repeated exposure builds familiarity instead of starting from zero each time.",
      "The practical output is a system: logo usage, palette, typography and layout rules that anyone producing content can apply.",
      "That system is what keeps a growing marketing operation from looking like six different companies.",
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
