import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { M as Boxes, b as Layers, i as Target, k as ChartColumn, r as TrendingUp } from "../_libs/lucide-react.mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { i as whyDigitalAvra } from "./growth-B6eMWg_y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhyDigitalAvra-Hw1QAZRk.js
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	Boxes,
	Target,
	TrendingUp,
	ChartColumn,
	Layers
];
function WhyDigitalAvra() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Why Digital Avra",
			title: "Why Businesses Choose Digital Avra"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: whyDigitalAvra.map((item, i) => {
				const Icon = icons[i] ?? Boxes;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "article",
					className: "border-border bg-card hover:border-primary/40 rounded-xl border p-6 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary bg-primary-soft flex size-10 items-center justify-center rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground text-xs font-semibold tracking-[0.14em]",
								children: item.number
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-2 text-sm leading-relaxed",
							children: item.description
						})
					]
				}, item.number);
			})
		})]
	});
}
//#endregion
export { WhyDigitalAvra as t };
