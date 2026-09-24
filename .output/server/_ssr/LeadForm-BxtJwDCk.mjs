import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as CircleCheck, D as Check, E as ChevronDown, w as ChevronUp, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn, d as track, f as trackLead, l as createEventId, t as Button } from "./SectionHeading-B8UfouY0.mjs";
import { n as services } from "./services-CY8eLFaW.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeadForm-BxtJwDCk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var EMAILJS_SERVICE_ID = {
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
}["VITE_EMAILJS_SERVICE_ID"];
var EMAILJS_TEMPLATE_ID = {
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
}["VITE_EMAILJS_TEMPLATE_ID"];
var EMAILJS_PUBLIC_KEY = {
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
}["VITE_EMAILJS_PUBLIC_KEY"];
async function deliverLead(payload) {
	if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
		const templateParams = {
			name: payload["name"] || "Not provided",
			phone: payload["phone"] || "Not provided",
			email: payload["email"] || "Not provided",
			company: payload["company"] || "Not provided",
			website: payload["website"] || "Not provided",
			service: payload["service"] || "Not specified",
			objective: payload["objective"] || "Not provided",
			budget: payload["budget"] || "Not specified",
			message: payload["message"] || "No additional message",
			source: payload.source === "growth_audit" ? "Free Growth Audit" : "Contact Form"
		};
		await es_default.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, { publicKey: EMAILJS_PUBLIC_KEY });
		return;
	}
	const endpoint = {
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
	}["VITE_LEAD_WEBHOOK_URL"];
	if (!endpoint) {
		await new Promise((r) => setTimeout(r, 700));
		return;
	}
	const res = await fetch(endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	});
	if (!res.ok) throw new Error(`Lead delivery failed (${res.status})`);
}
async function submitLead(payload) {
	const eventId = createEventId();
	try {
		await deliverLead(payload);
		track("form_submit", {
			source: payload.source,
			event_id: eventId
		});
		track(payload.source === "growth_audit" ? "audit_request" : "contact_submit", { event_id: eventId });
		trackLead(payload.source, eventId);
		return {
			ok: true,
			eventId
		};
	} catch (error) {
		return {
			ok: false,
			message: error instanceof Error ? "We couldn't send your details just now. Please try again or reach us on WhatsApp." : "Something went wrong. Please try again."
		};
	}
}
var budgets = [
	"Not sure yet",
	"Under ₹25,000 / month",
	"₹25,000 – ₹50,000 / month",
	"₹50,000 – ₹1,00,000 / month",
	"Above ₹1,00,000 / month"
];
function validate(values, source) {
	const errors = {};
	if (!values["name"]?.trim()) errors["name"] = "Please enter your name.";
	else if (values["name"].trim().length > 100) errors["name"] = "Name is too long.";
	const email = values["email"]?.trim() ?? "";
	if (!email) errors["email"] = "Please enter your email.";
	else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors["email"] = "Please enter a valid email address.";
	const phone = values["phone"]?.trim() ?? "";
	if (!phone) errors["phone"] = "Please enter your phone number.";
	else if (!/^[+\d][\d\s-]{6,19}$/.test(phone)) errors["phone"] = "Please enter a valid phone number.";
	if (source === "growth_audit" && !values["objective"]?.trim()) errors["objective"] = "Tell us your main objective.";
	if (values["message"] && values["message"].length > 1e3) errors["message"] = "Please keep this under 1000 characters.";
	return errors;
}
function Field({ id, label, error, children, optional }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: id,
				className: "text-sm font-medium",
				children: [label, optional && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground font-normal",
					children: " (optional)"
				})]
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-error`,
				role: "alert",
				className: "text-destructive text-xs",
				children: error
			})
		]
	});
}
function LeadForm({ source }) {
	const isAudit = source === "growth_audit";
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const [service, setService] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const values = {
			...Object.fromEntries(new FormData(form)),
			service,
			budget
		};
		const nextErrors = validate(values, source);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			track("form_error", {
				source,
				fields: Object.keys(nextErrors).join(",")
			});
			return;
		}
		setStatus("sending");
		setServerError(null);
		const result = await submitLead({
			...values,
			source
		});
		if (result.ok) {
			setStatus("done");
			form.reset();
			setService("");
			setBudget("");
		} else {
			setStatus("idle");
			setServerError(result.message);
		}
	}
	if (status === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "border-border bg-card shadow-card rounded-xl border p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-primary-soft text-primary mx-auto flex size-12 items-center justify-center rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "size-6",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-xl font-semibold",
				children: "Thank you — we've got your details."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2 text-sm",
				children: "Our team will review your business and get back to you with next steps. For anything urgent, message us on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "mt-6",
				onClick: () => setStatus("idle"),
				children: "Send another request"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		onFocus: () => track("form_start", { source }),
		className: "border-border bg-card shadow-card space-y-5 rounded-xl border p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "name",
					label: "Full name",
					...errors["name"] ? { error: errors["name"] } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						maxLength: 100,
						autoComplete: "name",
						placeholder: "Your name"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "phone",
					label: "Phone",
					...errors["phone"] ? { error: errors["phone"] } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						name: "phone",
						type: "tel",
						autoComplete: "tel",
						placeholder: "+91 00000 00000"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "email",
					label: "Email",
					...errors["email"] ? { error: errors["email"] } : {},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						maxLength: 255,
						autoComplete: "email",
						placeholder: "you@company.com"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "company",
					label: "Business name",
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "company",
						name: "company",
						maxLength: 120,
						placeholder: "Your business"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "website",
					label: "Website",
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "website",
						name: "website",
						maxLength: 200,
						placeholder: "yourwebsite.com"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "service",
					label: "Service of interest",
					optional: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: service,
						onValueChange: setService,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "service",
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a service" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: s.title,
							children: s.title
						}, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Not sure yet",
							children: "Not sure yet"
						})] })]
					})
				})]
			}),
			isAudit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "objective",
				label: "Your main business objective",
				...errors["objective"] ? { error: errors["objective"] } : {},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "objective",
					name: "objective",
					maxLength: 200,
					placeholder: "e.g. More qualified enquiries from Google"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "budget",
				label: "Monthly budget range",
				optional: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: budget,
					onValueChange: setBudget,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "budget",
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a range" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: budgets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: b,
						children: b
					}, b)) })]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "message",
				label: isAudit ? "Anything else we should know?" : "How can we help?",
				optional: isAudit,
				...errors["message"] ? { error: errors["message"] } : {},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					name: "message",
					maxLength: 1e3,
					rows: 4,
					placeholder: "Tell us a little about your business and what you want to achieve."
				})
			}),
			serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-destructive text-sm",
				children: serverError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				size: "lg",
				className: "h-12 w-full text-base",
				disabled: status === "sending",
				children: [status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), isAudit ? "Request My Free Growth Audit" : "Send Message"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-xs",
				children: "We use your details only to respond to your enquiry. No spam, ever."
			})
		]
	});
}
//#endregion
export { LeadForm as t };
