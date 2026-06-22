import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
}
