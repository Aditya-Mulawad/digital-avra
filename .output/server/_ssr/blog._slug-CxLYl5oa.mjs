import { t as site } from "./site-CtMJfd1y.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getBlogPost } from "./blogPosts-CWHN7DfV.mjs";
import { n as jsonLd, r as pageMeta, t as breadcrumbSchema } from "./seo-BW0lT-9f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CxLYl5oa.js
var $$splitComponentImporter = () => import("./blog._slug-CQSdZHUj.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getBlogPost(params.slug);
		if (!post) throw notFound();
		return {
			title: post.title,
			excerpt: post.excerpt,
			date: post.date
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
				description: loaderData.excerpt,
				path: `/blog/${params.slug}`,
				type: "article"
			}),
			scripts: [jsonLd({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: loaderData.title,
				description: loaderData.excerpt,
				datePublished: loaderData.date,
				author: {
					"@type": "Organization",
					name: site.name
				},
				publisher: {
					"@type": "Organization",
					name: site.name
				}
			}), breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Insights",
					path: "/blog"
				},
				{
					name: loaderData.title,
					path: `/blog/${params.slug}`
				}
			])]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
