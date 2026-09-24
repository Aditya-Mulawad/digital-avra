globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-ggOW0Idi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95d-sMElzEumbah/BFBzgWNHIGZmYQ4\"",
		"mtime": "2026-09-24T10:37:44.556Z",
		"size": 2397,
		"path": "../public/assets/about-ggOW0Idi.js"
	},
	"/assets/arrow-up-right-DxlHHfHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-X6lr69AOi5n8KEg94GQtwq+4ASY\"",
		"mtime": "2026-09-24T10:37:44.557Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-DxlHHfHh.js"
	},
	"/assets/blog.index-OM3V_EQp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d9-f3ybSd+t4L0LWdz08tLAzNsdhoo\"",
		"mtime": "2026-09-24T10:37:44.561Z",
		"size": 2265,
		"path": "../public/assets/blog.index-OM3V_EQp.js"
	},
	"/assets/blog._slug-DHT4Sv-M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"669-8S8Ci/TaVdRHsi544oEm3EY5dCY\"",
		"mtime": "2026-09-24T10:37:44.559Z",
		"size": 1641,
		"path": "../public/assets/blog._slug-DHT4Sv-M.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-19T07:19:11.185Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/CaseStudyCard-e7Hur1sH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a1-qVst0aDMSkXwkf+OZVJue0r2hC8\"",
		"mtime": "2026-09-24T10:37:44.539Z",
		"size": 1441,
		"path": "../public/assets/CaseStudyCard-e7Hur1sH.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"f34-2mUoiuarqG9BzE/SUrCPT0d7Rjk\"",
		"mtime": "2026-09-19T07:19:11.060Z",
		"size": 3892,
		"path": "../public/favicon.png"
	},
	"/assets/check-DDSscaUH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-+eLjzZyEOWhqR4AzoFyAiTeO+qI\"",
		"mtime": "2026-09-24T10:37:44.562Z",
		"size": 124,
		"path": "../public/assets/check-DDSscaUH.js"
	},
	"/assets/contact-DGmhUFUZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a67-FKKfZK9alGuwSyc9tJ+VuyyiIfE\"",
		"mtime": "2026-09-24T10:37:44.563Z",
		"size": 2663,
		"path": "../public/assets/contact-DGmhUFUZ.js"
	},
	"/assets/createLucideIcon-CcpOQAeb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"933d-B/UvcdPeAGprSp/0Z68OGhcYZJk\"",
		"mtime": "2026-09-24T10:37:44.565Z",
		"size": 37693,
		"path": "../public/assets/createLucideIcon-CcpOQAeb.js"
	},
	"/assets/FaqSection-A7O89mO5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e76-w8rIWyygzJt9OoI0/8lU+i9N2sY\"",
		"mtime": "2026-09-24T10:37:44.541Z",
		"size": 7798,
		"path": "../public/assets/FaqSection-A7O89mO5.js"
	},
	"/assets/FinalCta-QQ6QfkIB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ca-rCVxvvdnrisyheYINJ9eFvYcnDY\"",
		"mtime": "2026-09-24T10:37:44.542Z",
		"size": 1994,
		"path": "../public/assets/FinalCta-QQ6QfkIB.js"
	},
	"/assets/free-growth-audit-ByhtIOWv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"285-iHIK3HEUXON4PmHyoiWEJulguQI\"",
		"mtime": "2026-09-24T10:37:44.565Z",
		"size": 645,
		"path": "../public/assets/free-growth-audit-ByhtIOWv.js"
	},
	"/assets/growth-CyhYAkql.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f7-mAzMGekzE93EIHpQ8sTpVlpmNPM\"",
		"mtime": "2026-09-24T10:37:44.567Z",
		"size": 2295,
		"path": "../public/assets/growth-CyhYAkql.js"
	},
	"/assets/GrowthAuditSection-BgPn7B1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"493-vXmb5sI5Fvr8q0sP8FEffSUv0qw\"",
		"mtime": "2026-09-24T10:37:44.543Z",
		"size": 1171,
		"path": "../public/assets/GrowthAuditSection-BgPn7B1Z.js"
	},
	"/assets/GrowthSystem-qfJ1ieFz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"840-eSZ++Rc2/Ks7FI+1R5hI/8qLg7c\"",
		"mtime": "2026-09-24T10:37:44.545Z",
		"size": 2112,
		"path": "../public/assets/GrowthSystem-qfJ1ieFz.js"
	},
	"/assets/industries-j1rVFzls.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25e-zyT/JOsKu3txpDnGNFX/CcixFBc\"",
		"mtime": "2026-09-24T10:37:44.568Z",
		"size": 606,
		"path": "../public/assets/industries-j1rVFzls.js"
	},
	"/assets/IndustriesSection-x3qRyTvC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df4-B8agjpoE57W7PZ5lBsnYRiuOyvE\"",
		"mtime": "2026-09-24T10:37:44.547Z",
		"size": 3572,
		"path": "../public/assets/IndustriesSection-x3qRyTvC.js"
	},
	"/assets/index-IHysMLVG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a982-tUOYBnqzoaVGgjXtcpXc+c8eRVo\"",
		"mtime": "2026-09-24T10:37:44.538Z",
		"size": 371074,
		"path": "../public/assets/index-IHysMLVG.js"
	},
	"/assets/LeadForm-B9iXtnVy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18336-4Wobraqftd0hYRnOU+KYIv/wHFE\"",
		"mtime": "2026-09-24T10:37:44.548Z",
		"size": 99126,
		"path": "../public/assets/LeadForm-B9iXtnVy.js"
	},
	"/assets/PageShell-DyprMlOP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"711-LbhcljbZtzjYeJy2cNBoiK6tKDg\"",
		"mtime": "2026-09-24T10:37:44.550Z",
		"size": 1809,
		"path": "../public/assets/PageShell-DyprMlOP.js"
	},
	"/assets/privacy-policy-tV7VjUmV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca4-na8r1OFwtO/neYjyXX9K8JuE354\"",
		"mtime": "2026-09-24T10:37:44.572Z",
		"size": 3236,
		"path": "../public/assets/privacy-policy-tV7VjUmV.js"
	},
	"/assets/ProcessSection-D1perlpL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44a-6Zug9n7p2i7E1kURzLM9MnIEckE\"",
		"mtime": "2026-09-24T10:37:44.551Z",
		"size": 1098,
		"path": "../public/assets/ProcessSection-D1perlpL.js"
	},
	"/assets/rocket-B2Yhzmo_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c4-25NUSfcaxem7WFDjpNXrXYEoTwE\"",
		"mtime": "2026-09-24T10:37:44.573Z",
		"size": 452,
		"path": "../public/assets/rocket-B2Yhzmo_.js"
	},
	"/assets/digital-avra-logo-DOOCkwI7.png": {
		"type": "image/png",
		"etag": "\"ff118-j8Tbyg3G70jjrg2I+2LyAlgw8kc\"",
		"mtime": "2026-09-24T10:37:44.596Z",
		"size": 1044760,
		"path": "../public/assets/digital-avra-logo-DOOCkwI7.png"
	},
	"/assets/routes-CuuGs78x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35b9-G6VC05Gl/6cYLM2DTzBIDFmHddI\"",
		"mtime": "2026-09-24T10:37:44.576Z",
		"size": 13753,
		"path": "../public/assets/routes-CuuGs78x.js"
	},
	"/assets/SectionHeading-LrqGyG88.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c10-YG58eacp4cAbN6ei93qnBXP+yh4\"",
		"mtime": "2026-09-24T10:37:44.552Z",
		"size": 166928,
		"path": "../public/assets/SectionHeading-LrqGyG88.js"
	},
	"/assets/ServiceCard-1MVR1Jm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a1-Xlj0koZM/AColDpLxgkZjyiESN0\"",
		"mtime": "2026-09-24T10:37:44.553Z",
		"size": 1697,
		"path": "../public/assets/ServiceCard-1MVR1Jm2.js"
	},
	"/assets/services.index-B2rz0N6d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ae-zEl2c2I3JW59y4/JOKdFnOEiHuI\"",
		"mtime": "2026-09-24T10:37:44.579Z",
		"size": 942,
		"path": "../public/assets/services.index-B2rz0N6d.js"
	},
	"/assets/services._slug-CdobwOSR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a41-Xhle+6Md3UA+ZhDZhy6v3FQx2NA\"",
		"mtime": "2026-09-24T10:37:44.577Z",
		"size": 2625,
		"path": "../public/assets/services._slug-CdobwOSR.js"
	},
	"/assets/solutions-CU11rdTx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fea-dKawl6mr/RlNa7daKYtwFTbH0jI\"",
		"mtime": "2026-09-24T10:37:44.587Z",
		"size": 4074,
		"path": "../public/assets/solutions-CU11rdTx.js"
	},
	"/assets/target-H5pDeCwX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a8-OOqxZfkaPoNBXdeLhE5UVJOeJ4M\"",
		"mtime": "2026-09-24T10:37:44.588Z",
		"size": 424,
		"path": "../public/assets/target-H5pDeCwX.js"
	},
	"/assets/terms-and-conditions-hajgMSBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb4-cAXG63WKUhletGWLqYpIFCtmMWw\"",
		"mtime": "2026-09-24T10:37:44.591Z",
		"size": 2996,
		"path": "../public/assets/terms-and-conditions-hajgMSBT.js"
	},
	"/assets/trending-up-CuWmEHTN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-Gf+ixtRaOf+gxJr1bxrHhx+qIPA\"",
		"mtime": "2026-09-24T10:37:44.591Z",
		"size": 175,
		"path": "../public/assets/trending-up-CuWmEHTN.js"
	},
	"/assets/styles-DH0ncHyT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"156f0-dIY006p5jqCZZLmdBXj1O9YYSi4\"",
		"mtime": "2026-09-24T10:37:44.597Z",
		"size": 87792,
		"path": "../public/assets/styles-DH0ncHyT.css"
	},
	"/assets/WhyDigitalAvra-EfT1iW6J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"964-s2WP8rKYjAjsoOpd74Mod/8TDQ4\"",
		"mtime": "2026-09-24T10:37:44.554Z",
		"size": 2404,
		"path": "../public/assets/WhyDigitalAvra-EfT1iW6J.js"
	},
	"/assets/work.index-BHg66_U7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e1-JDhhjmA5x3yjscBP/tC/Svmo9Nc\"",
		"mtime": "2026-09-24T10:37:44.593Z",
		"size": 1505,
		"path": "../public/assets/work.index-BHg66_U7.js"
	},
	"/assets/work._slug-C8RaFCeO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a09-Y46ALWJm3Idr/ujAwa283c/pJKM\"",
		"mtime": "2026-09-24T10:37:44.592Z",
		"size": 2569,
		"path": "../public/assets/work._slug-C8RaFCeO.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_QPIK73 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_QPIK73
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
