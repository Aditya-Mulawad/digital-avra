import { n as __toESM } from "../_runtime.mjs";
import { t as site } from "./site-CtMJfd1y.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as jsonLd, r as pageMeta, t as breadcrumbSchema } from "./seo-BW0lT-9f.mjs";
import { t as Route$12 } from "./blog._slug-CxLYl5oa.mjs";
import { t as faqs } from "./faqs-De-J4N-a.mjs";
import { t as Route$13 } from "./services._slug-BsPNlZHx.mjs";
import { t as Route$14 } from "./work._slug-CmWeGmYg.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-MX9pfNcu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DH0ncHyT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-CDsIZfBG.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({
		...pageMeta({
			title: site.tagline,
			description: site.description,
			path: "/"
		}),
		scripts: [jsonLd({
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			name: site.name,
			description: site.description,
			slogan: site.tagline,
			areaServed: "IN",
			address: {
				"@type": "PostalAddress",
				addressLocality: site.location
			}
		}), jsonLd({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.answer
				}
			}))
		})]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-CLy6NycV.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => ({
		...pageMeta({
			title: "About Us",
			description: "Digital Avra is a digital solutions and growth agency helping businesses build, market and grow online through one connected digital system.",
			path: "/about"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "About",
			path: "/about"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-BWuNX2hC.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({
		...pageMeta({
			title: "Contact Us",
			description: "Talk to Digital Avra about your website, SEO, advertising, social media or branding. Send a message or reach us on WhatsApp.",
			path: "/contact"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Contact",
			path: "/contact"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./free-growth-audit-BWCvmWMP.mjs");
var Route$7 = createFileRoute("/free-growth-audit")({
	head: () => ({
		...pageMeta({
			title: "Free Growth Audit",
			description: "Request a free digital growth audit. We review your website, search visibility, advertising, social presence and tracking, then send a prioritised action plan.",
			path: "/free-growth-audit"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Free Growth Audit",
			path: "/free-growth-audit"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./industries-9yDYLO8G.mjs");
var Route$6 = createFileRoute("/industries")({
	head: () => ({
		...pageMeta({
			title: "Industries We Serve",
			description: "Digital growth strategies for real estate, local businesses, startups, professional services, retail, e-commerce and growing businesses.",
			path: "/industries"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Industries",
			path: "/industries"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-policy-C3q3ZkiW.mjs");
var Route$5 = createFileRoute("/privacy-policy")({
	head: () => ({
		...pageMeta({
			title: "Privacy Policy",
			description: "How Digital Avra collects, uses and protects the information you share through this website and its enquiry forms.",
			path: "/privacy-policy"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Privacy Policy",
			path: "/privacy-policy"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./solutions-BDnpKaEX.mjs");
var Route$4 = createFileRoute("/solutions")({
	head: () => ({
		...pageMeta({
			title: "Digital Solutions",
			description: "Objective-based digital solutions: launch a new business online, generate more leads, grow search visibility or scale existing digital marketing.",
			path: "/solutions"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Solutions",
			path: "/solutions"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./terms-and-conditions-B30A7RqR.mjs");
var Route$3 = createFileRoute("/terms-and-conditions")({
	head: () => ({
		...pageMeta({
			title: "Terms & Conditions",
			description: "The terms that apply when you use the Digital Avra website, submit an enquiry or engage us for digital services.",
			path: "/terms-and-conditions"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Terms & Conditions",
			path: "/terms-and-conditions"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog.index-DFcG0bLP.mjs");
var Route$2 = createFileRoute("/blog/")({
	head: () => ({
		...pageMeta({
			title: "Insights",
			description: "Practical articles on websites, SEO, paid advertising, social media and digital growth for businesses that want measurable results.",
			path: "/blog"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Insights",
			path: "/blog"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.index-CmjtRsAv.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({
		...pageMeta({
			title: "Digital Services",
			description: "Websites, SEO, Google Ads, Meta Ads, social media, branding, e-commerce and digital infrastructure — delivered by one digital growth partner.",
			path: "/services"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Services",
			path: "/services"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work.index-Dlo4OAJf.mjs");
var Route = createFileRoute("/work/")({
	head: () => ({
		...pageMeta({
			title: "Our Work",
			description: "Example engagement structures showing how Digital Avra approaches websites, SEO, paid advertising, social media and branding projects.",
			path: "/work"
		}),
		scripts: [breadcrumbSchema([{
			name: "Home",
			path: "/"
		}, {
			name: "Work",
			path: "/work"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var FreeGrowthAuditRoute = Route$7.update({
	id: "/free-growth-audit",
	path: "/free-growth-audit",
	getParentRoute: () => Route$11
});
var IndustriesRoute = Route$6.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$11
});
var PrivacyPolicyRoute = Route$5.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$11
});
var SolutionsRoute = Route$4.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$11
});
var TermsAndConditionsRoute = Route$3.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$11
});
var BlogIndexRoute = Route$2.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$11
});
var BlogSlugRoute = Route$12.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$11
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$11
});
var ServicesSlugRoute = Route$13.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$11
});
var WorkIndexRoute = Route.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FreeGrowthAuditRoute,
	IndustriesRoute,
	PrivacyPolicyRoute,
	SolutionsRoute,
	TermsAndConditionsRoute,
	BlogSlugRoute,
	ServicesSlugRoute,
	WorkSlugRoute: Route$14.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$11
	}),
	BlogIndexRoute,
	ServicesIndexRoute,
	WorkIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
