import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
}
