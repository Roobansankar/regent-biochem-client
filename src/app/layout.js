import { Inter } from "next/font/google";
import Script from "next/script";
import FontAwesomeLoader from "@/components/FontAwesomeLoader";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <FontAwesomeLoader />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7SG1PS6DJL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7SG1PS6DJL');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
