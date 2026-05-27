import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Offerings from "@/components/Offerings";
import FeaturedProducts from "@/components/FeaturedProducts";
import Philosophy from "@/components/Philosophy";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductGrid from "@/components/ProductGrid";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Offerings />
      <FeaturedProducts />
      <Philosophy />
      <WhyChooseUs />
      <ProductGrid />
      <CTA />
    </main>
  );
}
