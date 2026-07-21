const PAGE_TITLE = "Case Studies | Regent Biochem";
const PAGE_DESCRIPTION = "Real-world results from Regent Bio-Chem India's industrial cleaning and surface technology solutions.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/case-studies",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function CaseStudiesLayout({ children }) {
  return <>{children}</>;
}
