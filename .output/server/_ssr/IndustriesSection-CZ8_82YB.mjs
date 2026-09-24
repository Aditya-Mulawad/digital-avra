import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Building2, a as Store, j as Briefcase, r as TrendingUp, s as ShoppingBag, u as Rocket } from "../_libs/lucide-react.mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IndustriesSection-CZ8_82YB.js
var import_jsx_runtime = require_jsx_runtime();
var industries = [
	{
		name: "Real Estate",
		description: "Generate qualified property enquiries and build a stronger digital presence.",
		icon: Building2,
		focus: [
			"Landing Pages",
			"Meta Ads",
			"Lead Tracking",
			"Remarketing"
		]
	},
	{
		name: "Local Businesses",
		description: "Get discovered, build trust and turn searches into customers.",
		icon: Store,
		focus: [
			"Local SEO",
			"Google Business Profile",
			"Website",
			"Reviews"
		]
	},
	{
		name: "Startups",
		description: "Build your digital foundation from day one.",
		icon: Rocket,
		focus: [
			"Branding",
			"Website",
			"Analytics",
			"Launch Campaigns"
		]
	},
	{
		name: "Professional Services",
		description: "Turn expertise into a consistent and credible digital presence.",
		icon: Briefcase,
		focus: [
			"Website",
			"SEO",
			"Content",
			"Lead Forms"
		]
	},
	{
		name: "Retail & E-commerce",
		description: "Build visibility and turn digital traffic into sales.",
		icon: ShoppingBag,
		focus: [
			"E-commerce",
			"Google Ads",
			"Social Media",
			"Conversion Tracking"
		]
	},
	{
		name: "Growing Businesses",
		description: "Scale your existing digital marketing infrastructure.",
		icon: TrendingUp,
		focus: [
			"Paid Ads",
			"SEO Growth",
			"A/B Testing",
			"Reporting"
		]
	}
];
function IndustriesSection({ heading = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "industries",
		children: [heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Industries",
			title: "Industries We Work With",
			subtitle: "Digital strategies adapted to how each industry actually wins customers."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: industries.map((industry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: Math.min(i, 3) * .06,
				as: "article",
				className: "group border-border bg-card hover:border-primary/40 hover:shadow-lift rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bg-primary-soft text-primary flex size-11 items-center justify-center rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(industry.icon, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg font-semibold",
						children: industry.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-sm leading-relaxed",
						children: industry.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-1.5",
						children: industry.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-muted-foreground flex gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-primary mt-2 size-1 shrink-0 rounded-full",
								"aria-hidden": true
							}), f]
						}, f))
					})
				]
			}, industry.name))
		})]
	});
}
//#endregion
export { IndustriesSection as t };
