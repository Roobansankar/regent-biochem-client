const BASE_URL = "https://bio-chem.in";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
