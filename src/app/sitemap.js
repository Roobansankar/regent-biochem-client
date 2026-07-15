import { API } from "@/lib/api";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { products as localProducts } from "@/data/products";

const BASE_URL = "https://bio-chem.in";

async function safeFetchJson(url) {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/services",
    "/industries",
    "/case-studies",
    "/blog",
    "/careers",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productsData = await safeFetchJson(`${API}/products/all`);
  const products = productsData?.products?.length ? productsData.products : localProducts;
  const productRoutes = products
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${BASE_URL}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const blogData = await safeFetchJson(`${API}/blogs?limit=1000`);
  const blogRoutes = (blogData?.blogs || [])
    .filter((b) => b.slug)
    .map((b) => ({
      url: `${BASE_URL}/blog/${b.slug}`,
      lastModified: b.created_at ? new Date(b.created_at) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const caseStudyData = await safeFetchJson(`${API}/case-studies?limit=1000`);
  const caseStudyRoutes = (caseStudyData?.caseStudies || [])
    .filter((c) => c.slug)
    .map((c) => ({
      url: `${BASE_URL}/case-studies/${c.slug}`,
      lastModified: c.created_at ? new Date(c.created_at) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...productRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];
}
