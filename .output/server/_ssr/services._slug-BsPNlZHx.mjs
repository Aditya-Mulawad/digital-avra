import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as pageMeta, t as breadcrumbSchema } from "./seo-BW0lT-9f.mjs";
import { t as getService } from "./services-CY8eLFaW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BsPNlZHx.js
var $$splitComponentImporter = () => import("./services._slug-B0bufrNI.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service || !service.hasPage) throw notFound();
		return {
			name: service.name,
			description: service.description
		};
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		return {
			...pageMeta({
				title: loaderData.name,
				description: loaderData.description,
				path: `/services/${params.slug}`
			}),
			scripts: [breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Services",
					path: "/services"
				},
				{
					name: loaderData.name,
					path: `/services/${params.slug}`
				}
			])]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
