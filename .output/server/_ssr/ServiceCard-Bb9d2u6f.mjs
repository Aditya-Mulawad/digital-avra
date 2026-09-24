import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as track } from "./SectionHeading-B8UfouY0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceCard-Bb9d2u6f.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	const Icon = service.icon;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-11 items-center justify-center rounded-lg transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					"aria-hidden": true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-xs font-semibold tracking-[0.14em]",
				children: service.number
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-5 text-xl font-semibold",
			children: service.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-primary mt-1 text-sm font-medium",
			children: service.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-3 text-sm leading-relaxed",
			children: service.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 flex flex-wrap gap-1.5",
			children: service.includes.slice(0, 6).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-border text-muted-foreground rounded-md border px-2.5 py-1 text-xs",
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-primary mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
			children: [service.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
		})
	] });
	const className = "group border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1";
	if (!service.hasPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/services/$slug",
		params: { slug: service.slug },
		onClick: () => track("view_service", { service: service.slug }),
		className,
		children: inner
	});
}
//#endregion
export { ServiceCard as t };
