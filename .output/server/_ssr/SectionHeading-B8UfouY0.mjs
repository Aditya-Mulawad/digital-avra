import { n as __toESM } from "../_runtime.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as whatsappHref, t as site } from "./site-CtMJfd1y.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as ArrowRight, _ as MapPin, h as Menu, m as MessageCircle, t as X, v as Mail } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-B8UfouY0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var digital_avra_logo_default = "/assets/digital-avra-logo-DOOCkwI7.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		"aria-label": "Digital Avra — home",
		className: cn("inline-flex items-center", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: digital_avra_logo_default,
			alt: "Digital Avra — Your Business, Digitally Done.",
			width: 320,
			height: 104,
			className: "h-9 w-auto sm:h-10",
			loading: "eager",
			decoding: "async"
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
({
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_EMAILJS_PUBLIC_KEY": "mDZYh-1mvAFKRzCzi",
	"VITE_EMAILJS_SERVICE_ID": "service_m4cf17q",
	"VITE_EMAILJS_TEMPLATE_ID": "template_sxvd61i"
})["VITE_GA4_ID"], {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_EMAILJS_PUBLIC_KEY": "mDZYh-1mvAFKRzCzi",
	"VITE_EMAILJS_SERVICE_ID": "service_m4cf17q",
	"VITE_EMAILJS_TEMPLATE_ID": "template_sxvd61i"
}["VITE_META_PIXEL_ID"], {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_EMAILJS_PUBLIC_KEY": "mDZYh-1mvAFKRzCzi",
	"VITE_EMAILJS_SERVICE_ID": "service_m4cf17q",
	"VITE_EMAILJS_TEMPLATE_ID": "template_sxvd61i"
}["VITE_GOOGLE_ADS_ID"];
/** Stable ID shared between browser pixel and future server-side (CAPI) events. */
var createEventId = () => `da_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
function track(event, payload = {}) {
	if (typeof window === "undefined") return;
	const data = {
		event,
		...payload
	};
	window.dataLayer = window.dataLayer ?? [];
	window.dataLayer.push(data);
	window.gtag?.("event", event, payload);
}
/**
* Conversion event. Fire ONLY after a successful form submission —
* never on page load. `eventId` enables pixel/CAPI deduplication later.
*/
function trackLead(source, eventId = createEventId()) {
	track("lead", {
		source,
		event_id: eventId
	});
	window.fbq?.("track", "Lead", {}, { eventID: eventId });
	return eventId;
}
var navLinks = [
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Solutions",
		to: "/solutions"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Work",
		to: "/work"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Insights",
		to: "/blog"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-background/85 border-border border-b shadow-[0_1px_20px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			className: "container-page flex h-16 items-center justify-between gap-6 sm:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 lg:flex",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "text-foreground/75 hover:text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-colors",
						activeProps: { className: "text-primary" },
						children: link.label
					}) }, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "group h-11 rounded-md px-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/free-growth-audit",
							onClick: () => track("click_cta", { location: "navbar" }),
							children: ["Get Free Growth Audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4 transition-transform group-hover:translate-x-1" })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					className: "hover:bg-secondary inline-flex size-11 items-center justify-center rounded-md lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-nav",
			className: "bg-background fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto px-5 pt-6 pb-10 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-border border-b",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							onClick: () => setOpen(false),
							className: "block py-4 text-lg font-medium",
							activeProps: { className: "text-primary" },
							children: link.label
						})
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "mt-8 h-13 w-full text-base",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/free-growth-audit",
						onClick: () => {
							setOpen(false);
							track("click_cta", { location: "mobile_nav" });
						},
						children: ["Get Free Growth Audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					className: "mt-3 h-13 w-full text-base",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						children: "Talk to Digital Avra"
					})
				})
			]
		}) : null]
	});
}
var company = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Work",
		to: "/work"
	},
	{
		label: "Solutions",
		to: "/solutions"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var serviceLinks = [
	{
		label: "Web Development",
		slug: "web-development"
	},
	{
		label: "SEO",
		slug: "seo"
	},
	{
		label: "Meta Ads",
		slug: "meta-ads"
	},
	{
		label: "Google Ads",
		slug: "google-ads"
	},
	{
		label: "Social Media",
		slug: "social-media"
	},
	{
		label: "Branding",
		slug: "branding"
	},
	{
		label: "Hosting",
		slug: "hosting"
	}
];
var socialLinks = Object.entries(site.social).filter(([, url]) => !url.includes("_HERE")).map(([label, href]) => ({
	label: label.charAt(0).toUpperCase() + label.slice(1),
	href
}));
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-background/75",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: digital_avra_logo_default,
								alt: "Digital Avra logo",
								width: 320,
								height: 104,
								loading: "lazy",
								decoding: "async",
								className: "h-11 w-auto rounded-sm bg-white p-1.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-background mt-5 text-base font-medium",
								children: site.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed",
								children: site.description
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Company",
						children: company.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hover:text-background transition-colors",
							children: l.label
						}) }, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Services",
						children: serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: l.slug },
							className: "hover:text-background transition-colors",
							children: l.label
						}) }, l.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
								title: "Resources",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog",
										className: "hover:text-background transition-colors",
										children: "Blog"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/free-growth-audit",
										className: "hover:text-background transition-colors",
										children: "Digital Growth Audit"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										hash: "faq",
										className: "hover:text-background transition-colors",
										children: "FAQs"
									}) })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
								title: "Contact",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
											className: "size-4 shrink-0",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: whatsappHref(),
											onClick: () => track("click_whatsapp", { location: "footer" }),
											className: "hover:text-background transition-colors",
											children: "WhatsApp"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "size-4 shrink-0",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${site.email}`,
											className: "hover:text-background break-all transition-colors",
											children: site.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "size-4 shrink-0",
											"aria-hidden": true
										}), site.location]
									})
								]
							}),
							socialLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
								title: "Social",
								children: socialLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: l.href,
									className: "hover:text-background transition-colors",
									children: l.label
								}) }, l.label))
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-background/15 mt-14 flex flex-col gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Digital Avra. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy-policy",
						className: "hover:text-background transition-colors",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms-and-conditions",
						className: "hover:text-background transition-colors",
						children: "Terms & Conditions"
					})]
				})]
			})]
		})
	});
}
function FooterColumn({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-background/50 text-xs font-semibold tracking-[0.14em] uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-3 text-sm",
		children
	})] });
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappHref(),
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => track("click_whatsapp", { location: "floating_button" }),
		"aria-label": `Chat with ${site.name} on WhatsApp`,
		className: "bg-ink text-background hover:bg-primary fixed right-4 bottom-4 z-40 inline-flex h-13 items-center gap-2 rounded-full px-5 text-sm font-semibold shadow-lg transition-colors sm:right-6 sm:bottom-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-5",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
	});
}
/** Subtle fade + rise on scroll. Honours prefers-reduced-motion. */
function Reveal({ children, delay = 0, className, as = "div" }) {
	const reduced = useReducedMotion();
	const Comp = motion[as];
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className: cn(className),
		initial: {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function SectionHeading({ eyebrow, title, subtitle, align = "left", className, as: Tag = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				className: "text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg",
				children: subtitle
			}) : null
		]
	});
}
function Section({ children, className, id, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-20 sm:py-24 lg:py-28", tone === "muted" && "bg-surface", tone === "ink" && "bg-ink text-background", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children
		})
	});
}
//#endregion
export { Section as a, cn as c, track as d, trackLead as f, Reveal as i, createEventId as l, Footer as n, SectionHeading as o, Navbar as r, WhatsAppFloat as s, Button as t, digital_avra_logo_default as u };
