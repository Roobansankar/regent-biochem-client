export default function WorkflowProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Diagnosis",
      desc: "We begin by understanding your operations, inspecting your current cleaning processes, and identifying pain points through detailed site assessment and contamination analysis.",
      icon: "fa-search",
    },
    {
      num: "02",
      title: "Solution & Proposal",
      desc: "Based on the diagnosis, our engineers design a tailored cleaning solution — selecting the right equipment, chemistry, and service model — and present a comprehensive proposal.",
      icon: "fa-file-alt",
    },
    {
      num: "03",
      title: "Order Execution & Delivery",
      desc: "Once approved, we execute the order with precision — coordinating manufacturing, procurement, and logistics to ensure timely delivery to your facility.",
      icon: "fa-truck",
    },
    {
      num: "04",
      title: "Installation & Commissioning",
      desc: "Our technical team handles on-site installation, system integration, and commissioning — ensuring your solution is operational and optimized from day one.",
      icon: "fa-cogs",
    },
    {
      num: "05",
      title: "Product Lifecycle Support",
      desc: "We stay with you beyond deployment — offering preventive maintenance, fluid management, technical support, and continuous improvement to maximize long-term value.",
      icon: "fa-headset",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green mb-3">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black">
            Our Workflow <span className="text-green">Process</span>
          </h2>
          <p className="text-base text-brand-body max-w-xl mx-auto leading-relaxed mt-4">
            A structured, end-to-end approach that ensures every solution is precisely matched to your operational needs.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-green/20 group-hover:bg-green/40 transition-colors -z-0"></div>
              )}
              <div className="bg-brand-bg2 border border-brand-border rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-green rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green/20">
                  <i className={`fas ${step.icon} text-white text-xl`}></i>
                </div>
                <div className="text-xs font-black text-green/40 mb-2">{step.num}</div>
                <h3 className="text-base font-black text-brand-black mb-3 leading-snug tracking-tight">{step.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed flex-grow">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
