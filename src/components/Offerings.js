import { services } from "@/data/services";
import Link from "next/link";

export default function Offerings() {
  return (
    <section id="offerings" className="bg-brand-bg2 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-green mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black mb-4">
            Precision Offerings
          </h2>
          <p className="text-base text-brand-body max-w-xl mx-auto leading-relaxed">
            Scalable technology modules designed for seamless integration into existing production workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-green-light group-hover:bg-green transition-colors rounded-2xl flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-2xl text-green group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-extrabold text-brand-black mb-3 tracking-tight">{service.title}</h3>
              <p className="text-sm text-brand-body leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="mt-auto text-xs font-bold uppercase tracking-widest text-green group-hover:text-green-dark inline-flex items-center gap-2">
                Learn More <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

