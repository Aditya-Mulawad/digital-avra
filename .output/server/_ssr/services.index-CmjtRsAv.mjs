import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, i as Reveal } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as ProcessSection } from "./ProcessSection-D70JfpGo.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { n as services } from "./services-CY8eLFaW.mjs";
import { t as ServiceCard } from "./ServiceCard-Bb9d2u6f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-CmjtRsAv.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Services",
			title: "Digital Services Built Around Business Growth",
			subtitle: "Choose a single service or build a complete digital growth system. Everything we deliver is designed to produce measurable business outcomes.",
			crumbs: [{ name: "Services" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: Math.min(i, 3) * .06,
				as: "div",
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
			}, service.slug))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ServicesPage as component };
