import { site } from "@/data/site";

type MetaArgs = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/** Builds the per-route head() object: title, description, OG, Twitter, canonical. */
export function pageMeta({ title, description, path, type = "website" }: MetaArgs) {
  const fullTitle = `${title} | ${site.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) =>
  jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path,
    })),
  });
