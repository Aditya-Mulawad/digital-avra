import { t as site } from "./site-CtMJfd1y.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as WhyDigitalAvra } from "./WhyDigitalAvra-Hw1QAZRk.mjs";
import { t as ProcessSection } from "./ProcessSection-D70JfpGo.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CLy6NycV.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	{
		title: "Clarity over jargon",
		body: "You should always understand what we're doing, why we're doing it and what it's meant to achieve."
	},
	{
		title: "Outcomes over activity",
		body: "Posts, clicks and impressions are inputs. Enquiries, calls and customers are the point."
	},
	{
		title: "Systems over one-offs",
		body: "A single campaign fades. A connected digital system compounds."
	},
	{
		title: "Honesty about results",
		body: "We publish figures only when they're verified. No inflated claims, no borrowed case studies."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About",
			title: "One Digital Partner. Everything Your Business Needs Online.",
			subtitle: site.description,
			crumbs: [{ name: "About" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Who We Are",
				title: "Built for businesses that want growth, not just presence"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .05,
				className: "text-muted-foreground mt-6 space-y-4 leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Digital Avra is a digital solutions and growth agency. We work with businesses that are tired of juggling separate vendors for their website, their ads, their SEO and their social media — and getting no clear picture of what any of it is producing." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Instead of selling isolated services, we build a connected digital growth system: the foundation that makes you credible, the channels that bring in the right people, the pages that convert them, and the measurement that tells you what to do next." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground font-medium",
						children: site.tagline
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "grid gap-4 sm:grid-cols-2",
				children: values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-border bg-card rounded-xl border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold",
						children: value.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-sm leading-relaxed",
						children: value.body
					})]
				}, value.title))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyDigitalAvra, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { AboutPage as component };
