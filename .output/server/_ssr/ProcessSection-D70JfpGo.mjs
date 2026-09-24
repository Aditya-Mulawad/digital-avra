import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { r as processSteps } from "./growth-B6eMWg_y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProcessSection-D70JfpGo.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "muted",
		id: "process",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Our Process",
			title: "A Clear, Structured Approach",
			subtitle: "No guesswork. Every engagement follows the same five steps so you always know what happens next."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative mt-12 grid gap-5 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-border absolute top-11 right-0 left-0 hidden h-px lg:block",
				"aria-hidden": true
			}), processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: Math.min(i, 4) * .07,
				as: "li",
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border-primary bg-background text-primary relative z-10 flex size-11 items-center justify-center rounded-full border-2 text-sm font-semibold",
						children: step.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg font-semibold",
						children: step.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-sm leading-relaxed",
						children: step.description
					})
				]
			}, step.number))]
		})]
	});
}
//#endregion
export { ProcessSection as t };
