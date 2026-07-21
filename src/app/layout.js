import { Inter } from "next/font/google";
import FontAwesomeLoader from "@/components/FontAwesomeLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_TITLE = "Bio-Chem Surface Technology";
const SITE_DESCRIPTION = "Advanced Industrial Cleaning & Surface Technology";

export const metadata = {
  metadataBase: new URL("https://bio-chem.in"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "AAb3a1kVx6yC9vdB5MD3D_7Ro0EWmL6BBwFuP72-Ihs",
  },
  openGraph: {
    type: "website",
    siteName: "Regent Bio-Chem India",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/hero.webp",
        width: 1693,
        height: 929,
        alt: "Regent Bio-Chem India — Advanced Industrial Cleaning & Surface Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hero.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/main.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <FontAwesomeLoader />
        {children}
      </body>
    </html>
  );
}
