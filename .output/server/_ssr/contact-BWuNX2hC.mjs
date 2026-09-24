import { n as whatsappHref, t as site } from "./site-CtMJfd1y.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as MapPin, m as MessageCircle, v as Mail } from "../_libs/lucide-react.mjs";
import { a as Section, d as track, i as Reveal } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as LeadForm } from "./LeadForm-BxtJwDCk.mjs";
import { t as FaqSection } from "./FaqSection-CcUTcPmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BWuNX2hC.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: "Let's Talk About Your Digital Growth",
			subtitle: "Tell us where your business is today and what you want it to look like online. We'll reply with a clear, practical next step.",
			crumbs: [{ name: "Contact" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappHref(),
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => track("click_whatsapp", { location: "contact_page" }),
						className: "border-border bg-card hover:border-primary/40 flex items-start gap-4 rounded-xl border p-5 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-5",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground mt-1 block text-sm",
							children: site.whatsappNumber
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border bg-card flex items-start gap-4 rounded-xl border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-5",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground mt-1 block text-sm",
							children: site.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border bg-card flex items-start gap-4 rounded-xl border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-primary-soft text-primary flex size-10 shrink-0 items-center justify-center rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-5",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold",
							children: "Based in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground mt-1 block text-sm",
							children: site.location
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs leading-relaxed",
						children: "Prefer email? Write to us anytime — we usually reply within one business day."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, { source: "contact" })
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
	] });
}
//#endregion
export { ContactPage as component };
