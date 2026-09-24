import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { r as getCaseStudy, t as caseStudies } from "./caseStudies-BUaTRrNx.mjs";
import { t as Route } from "./work._slug-CmWeGmYg.mjs";
import { t as CaseStudyCard } from "./CaseStudyCard-D2hJ15Fx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DLeuktsu.js
var import_jsx_runtime = require_jsx_runtime();
function WorkDetail() {
	const { slug } = Route.useParams();
	const study = getCaseStudy(slug);
	const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: `${study.category} • ${study.industry}`,
			title: study.title,
			subtitle: "Illustrative engagement example. No client names or performance figures are shown because none have been verified for publication.",
			crumbs: [{
				name: "Work",
				to: "/work"
			}, { name: study.title }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "The challenge"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 leading-relaxed",
						children: study.challenge
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .05,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold",
							children: "Our approach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-3 leading-relaxed",
							children: study.solution
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .1,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold",
							children: "What we measure"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2.5 sm:grid-cols-2",
							children: study.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-border bg-surface rounded-lg border px-4 py-3 text-sm font-medium",
								children: f
							}, f))
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .08,
				className: "border-border bg-card shadow-card h-fit rounded-xl border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Services applied"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: study.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-border text-muted-foreground rounded-md border px-3 py-1.5 text-sm",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground border-border mt-6 border-t pt-5 text-xs leading-relaxed",
						children: "This page describes how we structure an engagement of this type. It does not represent a specific client or reported outcome."
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "More Work",
				title: "Other engagement examples"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: related.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "div",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyCard, { study: c })
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { WorkDetail as component };
