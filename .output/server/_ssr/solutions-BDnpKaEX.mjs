import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Check, O as ChartLine, P as ArrowRight, S as Compass, o as Sparkles, u as Rocket } from "../_libs/lucide-react.mjs";
import { a as Section, i as Reveal, t as Button } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { t as GrowthSystem } from "./GrowthSystem-CxeEcX-a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-BDnpKaEX.js
var import_jsx_runtime = require_jsx_runtime();
var solutions = [
	{
		slug: "build-your-digital-presence",
		title: "Build Your Digital Presence",
		audience: "For businesses starting from scratch.",
		description: "Everything required to exist credibly online — a website that works, an identity that holds together, and the infrastructure behind both.",
		includes: [
			"Website",
			"Branding",
			"Hosting",
			"Analytics",
			"Google Business Profile"
		],
		icon: Compass
	},
	{
		slug: "generate-more-leads",
		title: "Generate More Leads",
		audience: "For businesses focused on enquiries.",
		description: "A conversion path from ad to landing page to enquiry, with tracking that shows exactly where leads come from.",
		includes: [
			"Landing Pages",
			"Meta Ads",
			"Google Ads",
			"Conversion Tracking",
			"Remarketing"
		],
		icon: Rocket
	},
	{
		slug: "grow-organic-visibility",
		title: "Grow Organic Visibility",
		audience: "For businesses building long-term search demand.",
		description: "Sustainable visibility in search, built on a technically sound site and content aimed at real buying intent.",
		includes: [
			"SEO",
			"Content",
			"Local SEO",
			"Google Business Profile",
			"Analytics"
		],
		icon: Sparkles
	},
	{
		slug: "scale-your-digital-marketing",
		title: "Scale Your Digital Marketing",
		audience: "For businesses with traction that want more of it.",
		description: "Expand what is already working across channels, with continuous testing and reporting driving the decisions.",
		includes: [
			"Paid Ads",
			"SEO",
			"Social Media",
			"Creative",
			"Analytics",
			"Conversion Optimization"
		],
		icon: ChartLine
	}
];
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Solutions",
			title: "Start With Your Objective, Not a Service List",
			subtitle: "Every business is at a different stage. Pick the outcome you're after and we'll assemble the right combination of services around it.",
			crumbs: [{ name: "Solutions" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 lg:grid-cols-2",
			children: solutions.map((solution, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: Math.min(i, 3) * .06,
				as: "article",
				className: "border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-7 transition-all duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-primary-soft text-primary flex size-11 items-center justify-center rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(solution.icon, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-xl font-semibold",
						children: solution.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-sm leading-relaxed",
						children: solution.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-6",
						children: "Typically includes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 sm:grid-cols-2",
						children: solution.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "text-primary mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-auto pt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/free-growth-audit",
								children: ["Discuss this solution", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4" })]
							})
						})
					})
				]
			}, solution.slug))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthSystem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { SolutionsPage as component };
