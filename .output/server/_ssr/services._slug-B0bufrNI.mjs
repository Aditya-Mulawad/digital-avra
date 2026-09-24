import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Check, P as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Section, i as Reveal, o as SectionHeading, t as Button } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { n as services, t as getService } from "./services-CY8eLFaW.mjs";
import { t as GrowthAuditSection } from "./GrowthAuditSection-D1Ptmnnw.mjs";
import { t as Route } from "./services._slug-BsPNlZHx.mjs";
import { t as ServiceCard } from "./ServiceCard-Bb9d2u6f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-B0bufrNI.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { slug } = Route.useParams();
	const service = getService(slug);
	const related = services.filter((s) => s.slug !== slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: service.name,
			title: service.title,
			subtitle: service.description,
			crumbs: [{
				name: "Services",
				to: "/services"
			}, { name: service.name }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Approach",
				title: `How we deliver ${service.name}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-6",
				children: service.approach.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: Math.min(i, 3) * .06,
					className: "border-border border-l-2 pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: step.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-sm leading-relaxed",
						children: step.body
					})]
				}, step.heading))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "border-border bg-card shadow-card rounded-xl border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What's included"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2.5",
						children: service.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "text-primary mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}), item]
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .06,
					className: "border-border bg-surface rounded-xl border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "What you get"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5",
							children: service.outcomes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-muted-foreground flex gap-2.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-primary mt-2 size-1 shrink-0 rounded-full",
									"aria-hidden": true
								}), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/free-growth-audit",
								children: [service.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4" })]
							})
						})
					]
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "More Services",
				title: "Pair this with"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: related.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "div",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service: s })
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthAuditSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ServiceDetail as component };
