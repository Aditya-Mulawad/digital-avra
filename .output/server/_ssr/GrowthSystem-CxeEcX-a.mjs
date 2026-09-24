import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Section, c as cn, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { t as growthStages } from "./growth-B6eMWg_y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GrowthSystem-CxeEcX-a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GrowthSystem() {
	const [active, setActive] = (0, import_react.useState)(0);
	const stage = growthStages[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Our Framework",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-background",
				children: ["The Digital Avra Growth System", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
					className: "text-sm align-super",
					children: "™"
				})]
			}),
			subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-background/70",
				children: "Four connected stages that take a business from digital foundation to measurable, compounding growth."
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			delay: .05,
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: growthStages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onMouseEnter: () => setActive(i),
					onFocus: () => setActive(i),
					onClick: () => setActive(i),
					"aria-pressed": active === i,
					className: cn("group relative rounded-lg border p-5 text-left transition-colors", active === i ? "border-primary bg-background/8" : "border-background/15 hover:border-background/35"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-xs font-semibold tracking-[0.14em]", active === i ? "text-primary" : "text-background/45"),
							children: s.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-background mt-2 block text-lg font-semibold",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-background/60 mt-1 block text-sm",
							children: s.summary
						}),
						active === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "growth-stage-underline",
							className: "bg-primary absolute inset-x-5 bottom-0 h-0.5 rounded-full"
						})
					]
				}, s.number))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-background/15 mt-6 rounded-lg border p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-background/50 text-xs font-semibold tracking-[0.14em] uppercase",
						children: [
							stage.number,
							" — ",
							stage.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-background mt-2 text-xl font-semibold",
						children: stage.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: stage.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-background/20 text-background/85 rounded-md border px-3 py-1.5 text-sm",
							children: item
						}, item))
					})
				]
			})]
		})]
	});
}
//#endregion
export { GrowthSystem as t };
