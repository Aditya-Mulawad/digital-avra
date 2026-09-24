import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, c as cn, i as Reveal } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { n as caseStudyCategories, t as caseStudies } from "./caseStudies-BUaTRrNx.mjs";
import { t as CaseStudyCard } from "./CaseStudyCard-D2hJ15Fx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-Dlo4OAJf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Our Work",
			title: "How We Build Digital Growth",
			subtitle: "These are illustrative engagement structures, not client results. Verified case studies will be published here once clients approve them.",
			crumbs: [{ name: "Work" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Filter work by category",
				children: caseStudyCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": filter === category,
					onClick: () => setFilter(category),
					className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", filter === category ? "border-ink bg-ink text-background" : "border-border hover:border-primary/50 text-muted-foreground"),
					children: category
				}, category))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((study, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "div",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyCard, { study })
				}, study.slug))
			}),
			list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-10 text-sm",
				children: "No examples in this category yet."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { WorkPage as component };
