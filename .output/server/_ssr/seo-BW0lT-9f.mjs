import { t as site } from "./site-CtMJfd1y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-BW0lT-9f.js
/** Builds the per-route head() object: title, description, OG, Twitter, canonical. */
function pageMeta({ title, description, path, type = "website" }) {
	const fullTitle = `${title} | ${site.name}`;
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: fullTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: type
			},
			{
				property: "og:url",
				content: path
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: fullTitle
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: path
		}]
	};
}
var jsonLd = (data) => ({
	type: "application/ld+json",
	children: JSON.stringify(data)
});
var breadcrumbSchema = (items) => jsonLd({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: items.map((item, i) => ({
		"@type": "ListItem",
		position: i + 1,
		name: item.name,
		item: item.path
	}))
});
//#endregion
export { jsonLd as n, pageMeta as r, breadcrumbSchema as t };
