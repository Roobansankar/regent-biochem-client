const PAGE_TITLE = "FAQ | Regent Biochem";
const PAGE_DESCRIPTION = "Frequently asked questions about Regent Bio-Chem India's industrial cleaning products and services.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/faq",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function FaqLayout({ children }) {
  return <>{children}</>;
}
