import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as PageShell, t as PageHeader } from "./PageShell-cmP2ioo1.mjs";
import { t as ProcessSection } from "./ProcessSection-D70JfpGo.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { t as IndustriesSection } from "./IndustriesSection-CZ8_82YB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-9yDYLO8G.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Industries",
			title: "Strategies Shaped Around Your Industry",
			subtitle: "How customers search, compare and decide changes from one industry to the next. Our approach changes with it.",
			crumbs: [{ name: "Industries" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesSection, { heading: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { IndustriesPage as component };
