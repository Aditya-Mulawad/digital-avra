import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as ArrowDown, P as ArrowRight, f as MousePointerClick, k as ChartColumn, n as Users } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Section, d as track, i as Reveal, n as Footer, o as SectionHeading, r as Navbar, s as WhatsAppFloat, t as Button, u as digital_avra_logo_default } from "./SectionHeading-B8UfouY0.mjs";
import { n as metrics } from "./growth-B6eMWg_y.mjs";
import { t as WhyDigitalAvra } from "./WhyDigitalAvra-Hw1QAZRk.mjs";
import { t as ProcessSection } from "./ProcessSection-D70JfpGo.mjs";
import { t as FinalCta } from "./FinalCta-Dla803Ks.mjs";
import { n as services } from "./services-CY8eLFaW.mjs";
import { t as FaqSection } from "./FaqSection-CcUTcPmA.mjs";
import { t as GrowthAuditSection } from "./GrowthAuditSection-D1Ptmnnw.mjs";
import { t as IndustriesSection } from "./IndustriesSection-CZ8_82YB.mjs";
import { t as caseStudies } from "./caseStudies-BUaTRrNx.mjs";
import { t as GrowthSystem } from "./GrowthSystem-CxeEcX-a.mjs";
import { t as ServiceCard } from "./ServiceCard-Bb9d2u6f.mjs";
import { t as CaseStudyCard } from "./CaseStudyCard-D2hJ15Fx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDsIZfBG.js
var import_jsx_runtime = require_jsx_runtime();
var nodes = [
	{
		label: "Website",
		detail: "Foundation",
		icon: MousePointerClick
	},
	{
		label: "Traffic",
		detail: "SEO • Ads • Social",
		icon: Users
	},
	{
		label: "Leads",
		detail: "Forms • Calls • Chats",
		icon: ChartColumn
	}
];
/**
* Abstract system diagram used in the hero: Website → Traffic → Leads → Growth.
* Pure CSS/SVG, no imagery — keeps the hero fast and on-brand.
*/
function GrowthVisual() {
	const reduced = useReducedMotion();
	const float = reduced ? {} : {
		animate: { y: [
			0,
			-8,
			0
		] },
		transition: {
			duration: 7,
			repeat: Infinity,
			ease: "easeInOut"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		...float,
		className: "border-border bg-card shadow-card relative rounded-xl border p-5 sm:p-6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Digital Growth System"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bg-primary-soft text-accent-foreground rounded-full px-2.5 py-1 text-[11px] font-semibold",
					children: "Live"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-2.5",
				children: [nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						x: -12
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						delay: .4 + i * .15,
						duration: .5
					},
					className: "border-border bg-background flex items-center gap-3 rounded-lg border px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-primary-soft text-primary flex size-9 items-center justify-center rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(node.icon, { className: "size-4.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold",
								children: node.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground block text-xs",
								children: node.detail
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-border h-1.5 w-16 overflow-hidden rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "bg-primary block h-full",
								initial: { width: reduced ? "70%" : 0 },
								animate: { width: `${55 + i * 15}%` },
								transition: {
									delay: .8 + i * .15,
									duration: 1
								}
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground flex justify-center py-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })
				})] }, node.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 1,
						duration: .5
					},
					className: "bg-ink text-background rounded-lg px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-background/60 text-xs font-semibold tracking-[0.14em] uppercase",
							children: "Growth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-semibold",
							children: "Measurable business outcomes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-1 pt-1",
							children: [
								38,
								52,
								44,
								66,
								58,
								78,
								92
							].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "bg-primary/80 w-full rounded-sm",
								style: { height: 44 },
								initial: {
									scaleY: reduced ? h / 100 : .15,
									originY: 1
								},
								animate: { scaleY: h / 100 },
								transition: {
									delay: 1.1 + i * .07,
									duration: .6
								}
							}, i))
						})
					]
				})]
			}),
			!reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				animate: { y: [
					0,
					10,
					0
				] },
				transition: {
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "border-border bg-card shadow-card absolute -top-6 -right-4 hidden rounded-lg border px-4 py-3 sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-[11px] font-semibold tracking-wide uppercase",
					children: "Conversion Rate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary mt-0.5 text-lg font-semibold",
					children: "Tracked"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				animate: { y: [
					0,
					-10,
					0
				] },
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "border-border bg-card shadow-card absolute -bottom-6 -left-5 hidden rounded-lg border px-4 py-3 sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-[11px] font-semibold tracking-wide uppercase",
					children: "Cost Per Lead"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary mt-0.5 text-lg font-semibold",
					children: "Optimised"
				})]
			})] })
		]
	});
}
var capabilities = [
	"Websites",
	"SEO",
	"Meta Ads",
	"Google Ads",
	"Social Media",
	"Branding"
];
function Hero() {
	const reduced = useReducedMotion();
	const rise = (delay) => reduced ? {} : {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-faint pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "from-primary/8 pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-b to-transparent blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						...rise(0),
						className: "border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-primary size-1.5 rounded-full",
							"aria-hidden": true
						}), "Digital Solutions & Growth Agency"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						...rise(.08),
						className: "mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl",
						children: [
							"Turn Your Online Presence Into a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Growth Engine."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...rise(.16),
						className: "mt-6 max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hairline mb-6 block w-24",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base leading-relaxed sm:text-lg",
							children: "Digital Avra helps businesses build a stronger digital presence and generate more customers through high-performance websites, SEO, paid advertising, social media and digital growth strategies."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...rise(.24),
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "group h-13 px-6 text-base",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/free-growth-audit",
								onClick: () => track("click_cta", { location: "hero_primary" }),
								children: ["Get Your Free Growth Audit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4 transition-transform group-hover:translate-x-1" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "h-13 px-6 text-base",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								onClick: () => track("click_cta", { location: "hero_secondary" }),
								children: "Explore Our Services"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
						...rise(.32),
						className: "text-muted-foreground mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm",
						children: capabilities.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-border size-1 rounded-full",
								"aria-hidden": true
							}), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...rise(.4),
						className: "text-foreground mt-5 text-sm font-medium",
						children: "One partner. Everything digital."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						scale: .97
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .8,
						delay: .2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "lg:pl-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthVisual, {})
				})]
			})
		]
	});
}
var categories = [
	"Web",
	"SEO",
	"Paid Ads",
	"Social",
	"Branding",
	"Analytics"
];
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-border bg-surface border-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-10 sm:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground max-w-md text-sm font-medium sm:text-base",
					children: "Everything your business needs to build, market and grow online."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-6 lg:gap-x-10",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase",
						children: c
					}, c))
				})]
			})
		})
	});
}
var scattered = [
	"Website",
	"Social Media",
	"Ads",
	"SEO",
	"Branding",
	"Analytics"
];
var connected = [
	{
		title: "One strategy",
		body: "Every channel points at the same business objective."
	},
	{
		title: "One team",
		body: "Build, marketing and infrastructure managed together."
	},
	{
		title: "One report",
		body: "Enquiries, cost per lead and channel performance in one view."
	}
];
function ProblemSolution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "The Problem",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Your Business Doesn't Need More Digital Tools. It Needs a",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "Digital System."
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			delay: .05,
			className: "text-muted-foreground mt-6 space-y-4 text-base leading-relaxed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A website that doesn't generate enquiries is just a brochure." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Social media without strategy becomes noise." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ads without tracking waste money." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SEO without the right foundation takes longer to deliver results." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground font-medium",
					children: "Digital Avra brings everything together into one connected digital growth system."
				})
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border bg-card shadow-card rounded-xl border p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Scattered digital activities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: scattered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-border bg-surface text-muted-foreground rounded-md border border-dashed px-3 py-2 text-sm",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground my-6 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-primary/25 bg-primary-soft/60 flex items-center justify-center rounded-lg border p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: digital_avra_logo_default,
							alt: "Digital Avra",
							width: 320,
							height: 104,
							loading: "lazy",
							decoding: "async",
							className: "h-10 w-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground my-6 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
							className: "size-5",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Connected digital growth system"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: connected.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-border bg-background rounded-lg border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-1 text-sm",
								children: item.body
							})]
						}, item.title))
					})
				]
			})
		})]
	}) });
}
function ServicesSection({ limit }) {
	const list = limit ? services.slice(0, limit) : services;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Services",
			title: "Everything Your Business Needs to Grow Online",
			subtitle: "From your first website to full-scale performance marketing, Digital Avra brings your digital ecosystem together under one partner."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: list.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: Math.min(i, 3) * .06,
				as: "div",
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
			}, service.slug))
		})]
	});
}
function WorkSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "muted",
		id: "work",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Work",
				title: "How We Build Digital Growth",
				subtitle: "Example engagement structures showing how we approach different business objectives. Verified client case studies will be published here as they are approved."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: caseStudies.slice(0, 3).map((study, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 3) * .06,
					as: "div",
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudyCard, { study })
				}, study.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "mt-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						children: "View All Work"
					})
				})
			})
		]
	});
}
/**
* Metric values are intentionally null until verified figures exist.
* Never hardcode performance claims here.
*/
function MetricsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Measurable Results",
			title: "Digital Growth You Can Measure",
			subtitle: "We report on what actually matters to your business. Figures are published here only once they are verified for your account."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: metrics.map((metric, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: Math.min(i, 3) * .06,
				as: "div",
				className: "border-border bg-card rounded-xl border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-3xl font-semibold",
						children: metric.value === null ? "—" : `${metric.value}${metric.suffix ?? ""}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-semibold",
						children: metric.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 text-xs",
						children: metric.note
					})
				]
			}, metric.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-8 text-center text-sm",
				children: "Every engagement includes conversion tracking, analytics and transparent performance reporting."
			})
		})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSolution, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthSystem, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, { limit: 6 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyDigitalAvra, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthAuditSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
	] });
}
//#endregion
export { Home as component };
