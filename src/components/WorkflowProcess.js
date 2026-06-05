export default function WorkflowProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Diagnosis",
      desc: "On-site assessment to understand your operations and identify pain points.",
      icon: "fa-search",
    },
    {
      num: "02",
      title: "Solution & Proposal",
      desc: "Engineers design a tailored solution with the right equipment, chemistry, and service model.",
      icon: "fa-file-alt",
    },
    {
      num: "03",
      title: "Order Execution & Delivery",
      desc: "Precision execution with coordinated manufacturing, procurement, and logistics.",
      icon: "fa-truck",
    },
    {
      num: "04",
      title: "Installation & Commissioning",
      desc: "On-site installation, system integration, and commissioning for day-one productivity.",
      icon: "fa-cogs",
    },
    {
      num: "05",
      title: "Product Lifecycle Support",
      desc: "Preventive maintenance, fluid management, and ongoing technical support for long-term value.",
      icon: "fa-headset",
    },
  ];

  return (
    <section className="bg-[#f7f7f5] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">How We Work</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
            Our Workflow <span className="text-green">Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-green/20 group-hover:bg-green/40 transition-colors -z-0"></div>
              )}
              <div className="bg-white border border-brand-border rounded-lg p-5 text-center hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative z-10 h-full flex flex-col">
                <div className="w-10 h-10 bg-green rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-green/20">
                  <i className={`fas ${step.icon} text-white text-sm`}></i>
                </div>
                <div className="text-xs sm:text-sm font-black text-green/40 mb-1">{step.num}</div>
                <h3 className="text-sm font-normal text-brand-black leading-snug tracking-tight">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
