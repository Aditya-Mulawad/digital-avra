import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { n as blogPosts, r as getBlogPost } from "./blogPosts-CWHN7DfV.mjs";
import { t as Route } from "./blog._slug-CxLYl5oa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CQSdZHUj.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { slug } = Route.useParams();
	const post = getBlogPost(slug);
	const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: `${post.category} • ${post.date} • ${post.readingTime}`,
			title: post.title,
			subtitle: post.excerpt,
			crumbs: [{
				name: "Insights",
				to: "/blog"
			}, { name: post.title }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "mx-auto max-w-2xl",
			children: post.body.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: Math.min(i, 3) * .04,
				children: paragraph.startsWith("## ") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 text-2xl font-semibold first:mt-0",
					children: paragraph.replace("## ", "")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-5 leading-relaxed",
					children: paragraph
				})
			}, i))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Keep Reading",
				title: "More insights"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "div",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "border-border bg-card hover:border-primary/40 flex h-full flex-col rounded-xl border p-6 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-base leading-snug font-semibold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm",
								children: p.excerpt
							})
						]
					})
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { BlogPostPage as component };
