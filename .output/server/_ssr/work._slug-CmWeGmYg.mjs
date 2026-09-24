import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as pageMeta, t as breadcrumbSchema } from "./seo-BW0lT-9f.mjs";
import { r as getCaseStudy } from "./caseStudies-BUaTRrNx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CmWeGmYg.js
var $$splitComponentImporter = () => import("./work._slug-DLeuktsu.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const study = getCaseStudy(params.slug);
		if (!study) throw notFound();
		return {
			title: study.title,
			challenge: study.challenge
		};
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		return {
			...pageMeta({
				title: loaderData.title,
				description: loaderData.challenge,
				path: `/work/${params.slug}`,
				type: "article"
			}),
			scripts: [breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Work",
					path: "/work"
				},
				{
					name: loaderData.title,
					path: `/work/${params.slug}`
				}
			])]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
