import { services } from "@/data/services";
import Link from "next/link";

export default function Offerings() {
  return (
    <section id="offerings" className="bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">GREEN WAY TO GROWTH</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-black mb-3">
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
              className="group bg-white rounded-xl border border-brand-border/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/3] bg-brand-bg3 flex items-center justify-center">
                <i className={`fas ${service.icon} text-3xl sm:text-4xl text-green/40`}></i>
              </div>
              <div className="flex flex-col items-start text-left px-4 pt-4 pb-5 flex-1">
                <h3 className="text-sm font-bold text-brand-black leading-snug mb-2">{service.title}</h3>
                <p className="text-xs text-brand-body leading-relaxed mb-4 flex-1 line-clamp-2">{service.shortDescription}</p>
                <Link
                  href={`/services/freeflow/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-green px-5 py-2.5 rounded-lg hover:bg-green-dark transition-all hover:-translate-y-0.5"
                >
                  View Detail
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

