import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as ProcessSection } from "./ProcessSection-D70JfpGo.mjs";
import { t as FaqSection } from "./FaqSection-CcUTcPmA.mjs";
import { t as GrowthAuditSection } from "./GrowthAuditSection-D1Ptmnnw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/free-growth-audit-BWCvmWMP.js
var import_jsx_runtime = require_jsx_runtime();
function AuditPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Free Growth Audit",
			title: "See Exactly Where Your Digital Growth Is Leaking",
			subtitle: "A practical review of your current digital presence and a prioritised plan for what to fix first. No cost, no obligation.",
			crumbs: [{ name: "Free Growth Audit" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthAuditSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
	] });
}
//#endregion
export { AuditPage as component };
