import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { blogCategories, blogPosts, type BlogCategory } from "@/data/blogPosts";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageMeta({
      title: "Insights",
      description:
        "Practical articles on websites, SEO, paid advertising, social media and digital growth for businesses that want measurable results.",
      path: "/blog",
    }),
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Insights", path: "/blog" },
      ]),
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [filter, setFilter] = useState<BlogCategory | "All">("All");
  const posts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Insights"
        title="Digital Growth, Explained Plainly"
        subtitle="What actually moves the needle for businesses online — without the jargon."
        crumbs={[{ name: "Insights" }]}
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {(["All", ...blogCategories] as const).map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === category
                  ? "border-ink bg-ink text-background"
                  : "border-border hover:border-primary/50 text-muted-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="bg-primary-soft text-accent-foreground rounded-full px-2.5 py-1 text-xs font-semibold">
                    {post.category}
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 transition-colors" />
                </div>
                <h2 className="mt-5 text-lg leading-snug font-semibold">{post.title}</h2>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-muted-foreground border-border mt-auto border-t pt-4 text-xs">
                  {post.date} • {post.readingTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-muted-foreground mt-10 text-sm">
            No articles in this category yet.
          </p>
        )}
      </Section>

      <FinalCta />
    </PageShell>
  );
}
