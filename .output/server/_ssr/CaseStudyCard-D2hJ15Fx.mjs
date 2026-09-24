import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { d as track } from "./SectionHeading-B8UfouY0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CaseStudyCard-D2hJ15Fx.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyCard({ study }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/work/$slug",
		params: { slug: study.slug },
		onClick: () => track("view_case_study", { case_study: study.slug }),
		className: "group border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bg-primary-soft text-accent-foreground rounded-full px-2.5 py-1 text-xs font-semibold",
					children: study.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "text-muted-foreground group-hover:text-primary size-4 transition-colors" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-lg font-semibold",
				children: study.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1 text-xs font-medium",
				children: study.industry
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-3 text-sm leading-relaxed",
				children: study.challenge
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-border mt-6 flex flex-wrap gap-1.5 border-t pt-5",
				children: study.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-border text-muted-foreground rounded-md border px-2.5 py-1 text-xs",
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-5 text-xs",
				children: "Illustrative example — not a client result."
			})
		]
	});
}
//#endregion
export { CaseStudyCard as t };
