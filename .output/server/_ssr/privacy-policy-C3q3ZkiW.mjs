import { t as site } from "./site-CtMJfd1y.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section } from "./SectionHeading-B8UfouY0.mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-policy-C3q3ZkiW.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "Information we collect",
		body: ["When you submit an enquiry or growth audit request, we collect the details you provide: your name, phone number, email address, business name, website address, service interest, objective, budget range and any message you write.", "We also collect standard technical information such as pages visited, referring source, approximate location, device type and browser, through website analytics."]
	},
	{
		title: "How we use your information",
		body: [
			"To respond to your enquiry, prepare your growth audit and discuss services with you.",
			"To improve the website and understand which pages and campaigns are useful.",
			"To send service-related communication you have asked for. We do not sell your information."
		]
	},
	{
		title: "Analytics and advertising tools",
		body: ["This website is built to support analytics and advertising measurement tools. Where these are active, they may set cookies or similar identifiers to measure traffic and campaign performance.", "You can block or delete cookies through your browser settings. Some site features may work differently if you do."]
	},
	{
		title: "Data sharing",
		body: ["We share information only with service providers that help us operate the website, store enquiries and communicate with you, and only to the extent needed for those purposes.", "We may disclose information where required by applicable law."]
	},
	{
		title: "Data retention and security",
		body: ["Enquiry details are retained for as long as needed to serve you and to meet legal or record-keeping requirements.", "We take reasonable measures to protect the information we hold. No method of transmission or storage online is completely secure."]
	},
	{
		title: "Your choices",
		body: ["You can ask us to access, correct or delete the information you have shared with us, or to stop contacting you, by writing to us at the email address below."]
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Legal",
		title: "Privacy Policy",
		subtitle: "This policy explains what we collect through this website, why we collect it and what you can ask us to do with it.",
		crumbs: [{ name: "Privacy Policy" }]
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
						"Questions about this policy can be sent to ",
						site.email,
						". ",
						site.name,
						" operates from ",
						site.location,
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground border-border mt-10 border-t pt-6 text-xs leading-relaxed",
				children: "This policy is a general template and is not legal advice. Have it reviewed before publishing, and replace the placeholder contact details with your final business information."
			})
		]
	}) })] });
}
//#endregion
export { PrivacyPage as component };
