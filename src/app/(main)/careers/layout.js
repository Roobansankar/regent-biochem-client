const PAGE_TITLE = "Careers | Regent Biochem";
const PAGE_DESCRIPTION = "Explore career opportunities at Regent Bio-Chem India in industrial cleaning and surface technology.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/careers",
    images: ["/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function CareersLayout({ children }) {
  return <>{children}</>;
}
