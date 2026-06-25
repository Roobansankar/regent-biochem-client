import Link from "next/link";
import { industries } from "@/data/industries";

const industryList = industries.map((industry) => ({
  title: industry.title,
  slug: industry.slug,
}));

export default function Industries() {
  return (
    <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-sm sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Our Expertise</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">
            Industries We Serve
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {industryList.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <div className="px-6 py-3 rounded-2xl bg-green-light border border-green-mid/50 hover:bg-white hover:border-green/30 transition-all duration-300 group shadow-sm cursor-pointer">
                <span className="text-xs sm:text-sm font-bold text-green group-hover:text-green-dark">{industry.title}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}