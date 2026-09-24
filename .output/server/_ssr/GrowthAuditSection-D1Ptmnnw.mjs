import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as Section, i as Reveal, o as SectionHeading } from "./SectionHeading-B8UfouY0.mjs";
import { t as LeadForm } from "./LeadForm-BxtJwDCk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GrowthAuditSection-D1Ptmnnw.js
var import_jsx_runtime = require_jsx_runtime();
var included = [
	"Website & landing page review",
	"Search visibility and SEO gaps",
	"Paid advertising opportunities",
	"Social media presence check",
	"Conversion and tracking review",
	"A prioritised action plan"
];
function GrowthAuditSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "growth-audit",
		tone: "muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Free Growth Audit",
				title: "Find Out What's Holding Your Digital Growth Back",
				subtitle: "Tell us about your business and we'll review your current digital presence, then send back a clear, prioritised plan — no obligation."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "text-primary mt-0.5 size-4.5 shrink-0",
							"aria-hidden": true
						}), item]
					}, item))
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, { source: "growth_audit" })
			})]
		})
	});
}
//#endregion
export { GrowthAuditSection as t };
