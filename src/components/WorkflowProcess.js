

export default function WorkflowProcess({ bg }) {
  const sectionBg = bg || "bg-[#f7f7f5]";
  const steps = [
    {
      num: "01",
      title: "Discovery &<br/>Diagnosis",
      desc: "Assess customer applications, operational challenges, and performance requirements",
      icon: "fa-search",
    },
    {
      num: "02",
      title: "Solution &<br/>Proposal",
      desc: "Evaluate value proposition and recommend suitable solution for the usecase",
      icon: "fa-file-alt",
    },
    {
      num: "03",
      title: "Order Execution & <br/>Delivery",
      desc: "Execute orders efficiently and ensure on-time delivery of the quality products",
      icon: "fa-truck",
    },
    {
      num: "04",
      title: "Installation & <br/>Commissioning",
      desc: "Install, test, and validate system performance against expected outcomes",
      icon: "fa-cogs",
    },
    {
      num: "05",
      title: "Product Lifecycle <br/>Support",
      desc: "Provide continuous technical and service support to ensure long-term reliability",
      icon: "fa-headset",
    },
  ];

  return (
    <section className={`${sectionBg} py-12 sm:py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">
            How We Add Value
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
            From Insight to <span className="text-green">Impact</span>
          </h2>
        </div>

        {/* Steps */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-green/20 group-hover:bg-green/40 transition-colors -z-0" />
              )}

              <div className="bg-white border border-brand-border rounded-lg p-4 xl:p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className="w-9 h-9 xl:w-10 xl:h-10 bg-green rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-green/20 shrink-0">
                  <i className={`fas ${step.icon} text-white text-xs xl:text-sm`}></i>
                </div>

                {/* Step number */}
                <div className="text-[13px] font-black text-green/40 mb-1 leading-none">{step.num}</div>

                {/* Title — fixed height so all cards align */}
                {/* <h3 className="text-[13px] xl:text-[14px] font-bold text-brand-black leading-snug tracking-tight mb-2 min-h-[2.5rem] flex items-center justify-center px-2 text-center" style={{ textWrap: "balance", maxWidth: "180px", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: step.title }}></h3>
            
                <p className="text-[12px] xl:text-[14px] text-brand-body leading-relaxed flex-1">
                  {step.desc}
                </p> */}
                <h3
  className="text-[13px] xl:text-[14px] font-bold text-brand-black leading-snug tracking-tight mb-3 h-[56px] flex items-center justify-center"
  dangerouslySetInnerHTML={{ __html: step.title }}
></h3>

<p className="text-[12px] xl:text-[14px] text-brand-body leading-relaxed flex-1">
  {step.desc}
</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}