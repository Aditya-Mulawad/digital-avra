import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as Section, c as cn, i as Reveal } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { n as blogPosts, t as blogCategories } from "./blogPosts-CWHN7DfV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-DFcG0bLP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const posts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Insights",
			title: "Digital Growth, Explained Plainly",
			subtitle: "What actually moves the needle for businesses online — without the jargon.",
			crumbs: [{ name: "Insights" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ["All", ...blogCategories].map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": filter === category,
					onClick: () => setFilter(category),
					className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", filter === category ? "border-ink bg-ink text-background" : "border-border hover:border-primary/50 text-muted-foreground"),
					children: category
				}, category))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: posts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "div",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "group border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-primary-soft text-accent-foreground rounded-full px-2.5 py-1 text-xs font-semibold",
									children: post.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "text-muted-foreground group-hover:text-primary size-4 transition-colors" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-lg leading-snug font-semibold",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2 text-sm leading-relaxed",
								children: post.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground border-border mt-auto border-t pt-4 text-xs",
								children: [
									post.date,
									" • ",
									post.readingTime
								]
							})
						]
					})
				}, post.slug))
			}),
			posts.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-10 text-sm",
				children: "No articles in this category yet."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { BlogIndex as component };
