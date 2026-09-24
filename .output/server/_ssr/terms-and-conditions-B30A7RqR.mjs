import { t as site } from "./site-CtMJfd1y.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-and-conditions-B30A7RqR.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Using this website",
		body: ["By accessing this website you agree to use it lawfully and not to attempt to disrupt, copy or misuse it or its content."]
	},
	{
		title: "Information on this site",
		body: ["Content here is provided for general information about our services. Examples shown in the work section are illustrative engagement structures, not verified client results.", "We do not guarantee any specific ranking, traffic, lead volume or revenue outcome. Digital results depend on market, budget, competition and factors outside our control."]
	},
	{
		title: "Enquiries and proposals",
		body: ["Submitting a form does not create a contract. Any engagement begins only after a written proposal or agreement is accepted by both sides.", "Scope, timelines, deliverables and fees for a project are governed by that written agreement."]
	},
	{
		title: "Payments",
		body: ["Fees, schedules and payment terms are set out in the applicable proposal or agreement. Third-party costs such as advertising spend, hosting, domains and licences are billed separately unless stated otherwise."]
	},
	{
		title: "Intellectual property",
		body: ["Our branding, website content and design remain our property. Deliverables created for a client transfer as described in that client's agreement, normally on full payment.", "Clients confirm they hold the rights to any material they supply to us for use in their project."]
	},
	{
		title: "Limitation of liability",
		body: ["To the extent permitted by law, our liability arising from any engagement is limited to the fees paid for the specific service in question. We are not liable for indirect or consequential losses."]
	},
	{
		title: "Changes to these terms",
		body: ["We may update these terms. The version published on this page at the time of your visit is the one that applies."]
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Legal",
		title: "Terms & Conditions",
		subtitle: "The basis on which we provide this website and our digital services.",
		crumbs: [{ name: "Terms & Conditions" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 first:mt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: section.title
				}), section.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-3 leading-relaxed",
					children: paragraph
				}, paragraph))]
			}, section.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-3 leading-relaxed",
					children: [
						"Questions about these terms can be sent to ",
						site.email,
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground border-border mt-10 border-t pt-6 text-xs leading-relaxed",
				children: "These terms are a general template and are not legal advice. Have them reviewed before publishing."
			})
		]
	}) })] });
}
//#endregion
export { TermsPage as component };
