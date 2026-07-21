import { Inter } from "next/font/google";
import FontAwesomeLoader from "@/components/FontAwesomeLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://bio-chem.in"),
  title: "Bio-Chem Surface Technology",
  description: "Advanced Industrial Cleaning & Surface Technology",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "AAb3a1kVx6yC9vdB5MD3D_7Ro0EWmL6BBwFuP72-Ihs",
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
