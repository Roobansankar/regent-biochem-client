const PAGE_TITLE = "Industrial Products Catalog | Regent Biochem";
const PAGE_DESCRIPTION = "Browse our full range of eco-friendly industrial cleaning systems, chemicals, and automation solutions.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/products",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function ProductsLayout({ children }) {
  return <>{children}</>;
}
