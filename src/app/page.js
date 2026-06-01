import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Offerings from "@/components/Offerings";
import FeaturedProducts from "@/components/FeaturedProducts";
import Philosophy from "@/components/Philosophy";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductGrid from "@/components/ProductGrid";
import Industries from "@/components/Industries";
import WorkflowProcess from "@/components/WorkflowProcess";
import EsteemedCustomers from "@/components/EsteemedCustomers";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Philosophy />
      <Stats />
      <Offerings />
      <FeaturedProducts />
      <WhyChooseUs />
      <ProductGrid />
      <Industries />
      <WorkflowProcess />
      <EsteemedCustomers />
      <CTA />
    </main>
  );
}
