import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/PageShell";
import { Section, SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { site } from "@/data/site";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt, date: post.date };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    return {
      ...pageMeta({
        title: loaderData.title,
        description: loaderData.excerpt,
        path: `/blog/${params.slug}`,
        type: "article",
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: loaderData.title,
          description: loaderData.excerpt,
          datePublished: loaderData.date,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
          { name: loaderData.title, path: `/blog/${params.slug}` },
        ]),
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug)!;
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        eyebrow={`${post.category} • ${post.date} • ${post.readingTime}`}
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[{ name: "Insights", to: "/blog" }, { name: post.title }]}
      />

      <Section>
        <article className="mx-auto max-w-2xl">
          {post.body.map((paragraph, i) => (
            <Reveal key={i} delay={Math.min(i, 3) * 0.04}>
              {paragraph.startsWith("## ") ? (
                <h2 className="mt-10 text-2xl font-semibold first:mt-0">
                  {paragraph.replace("## ", "")}
                </h2>
              ) : (
                <p className="text-muted-foreground mt-5 leading-relaxed">{paragraph}</p>
              )}
            </Reveal>
          ))}
        </article>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Keep Reading" title="More insights" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 3) * 0.06} as="div" className="h-full">
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="border-border bg-card hover:border-primary/40 flex h-full flex-col rounded-xl border p-6 transition-colors"
              >
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-3 text-base leading-snug font-semibold">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta />
    </PageShell>
  );
}
