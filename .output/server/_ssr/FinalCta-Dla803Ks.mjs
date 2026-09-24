import { n as whatsappHref } from "./site-CtMJfd1y.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as ArrowRight, m as MessageCircle } from "../_libs/lucide-react.mjs";
import { d as track, i as Reveal, t as Button } from "./SectionHeading-B8UfouY0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCta-Dla803Ks.js
var import_jsx_runtime = require_jsx_runtime();
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-ink relative overflow-hidden py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-faint pointer-events-none absolute inset-0 opacity-[0.35]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary/15 pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-xs font-semibold tracking-[0.18em] uppercase",
							children: "Ready when you are"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-background mt-4 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl",
							children: "Let's Build Your Digital Growth System."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-background/70 mt-5 text-base leading-relaxed",
							children: "Whether you're starting from scratch or scaling what you already have, we'll map the fastest path to more visibility, more enquiries and more customers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "group h-13 px-6 text-base",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/free-growth-audit",
									onClick: () => track("click_cta", { location: "final_cta_primary" }),
									children: ["Get Your Free Growth Audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4 transition-transform group-hover:translate-x-1" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-background/25 text-background hover:bg-background hover:text-ink h-13 bg-transparent px-6 text-base",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappHref(),
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => track("click_whatsapp", { location: "final_cta" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-1 size-4" }), "Chat on WhatsApp"]
								})
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { FinalCta as t };
