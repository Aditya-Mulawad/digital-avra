import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { T as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as Reveal, n as Footer, r as Navbar, s as WhatsAppFloat } from "./SectionHeading-B8UfouY0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-cmP2ioo1.js
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "hover:text-foreground transition-colors",
				children: "Home"
			}) }), items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-3.5",
					"aria-hidden": true
				}), item.to && i < items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					...item.params ? { params: item.params } : {},
					className: "hover:text-foreground transition-colors",
					children: item.name
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground font-medium",
					"aria-current": "page",
					children: item.name
				})]
			}, item.name))]
		})
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
	] });
}
function PageHeader({ eyebrow, title, subtitle, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-border bg-surface relative overflow-hidden border-b pt-28 pb-16 sm:pt-36 sm:pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid-faint pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: crumbs }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-6",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-5xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
					children: subtitle
				})
			] })
		})]
	});
}
//#endregion
export { PageShell as n, PageHeader as t };
