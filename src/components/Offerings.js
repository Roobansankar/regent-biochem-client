import { services } from "@/data/services";
import Link from "next/link";

export default function Offerings() {
  return (
    <section id="offerings" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">GREEN WAY TO GROWTH</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black mb-4">
            Precision Offerings
          </h2>
          <p className="text-base text-brand-body max-w-xl mx-auto leading-relaxed">
            Scalable technology modules designed for seamless integration into existing production workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#f7f7f5] rounded-xl border border-brand-border/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center px-4 pt-6 pb-5"
            >
              <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green/15 transition-colors">
                <i className={`fas ${service.icon} text-xl text-green`}></i>
              </div>
              <h3 className="text-sm font-semibold text-brand-black leading-snug mb-5 flex-1">{service.title}</h3>
              <Link
                href={`/services/freeflow/${service.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-green px-5 py-2.5 rounded-lg hover:bg-green-dark transition-all hover:-translate-y-0.5"
              >
                View Detail
                <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

