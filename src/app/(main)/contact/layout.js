const PAGE_TITLE = "Contact Us | Regent Biochem";
const PAGE_DESCRIPTION = "Get in touch with Regent Bio-Chem India for industrial cleaning and surface technology solutions.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/contact",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
