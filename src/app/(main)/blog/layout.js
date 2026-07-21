const PAGE_TITLE = "Blog | Regent Biochem";
const PAGE_DESCRIPTION = "Insights, updates, and technical articles on industrial cleaning and surface technology from Regent Bio-Chem India.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/blog",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
