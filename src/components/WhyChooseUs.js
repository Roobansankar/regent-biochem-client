export default function WhyChooseUs() {
  const advantages = [
    {
      icon: "fa-leaf",
      title: "Sustainability",
      desc: "We promote environmentally responsible technologies and chemistry that reduce waste, emissions, and ecological impact.",
    },
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      desc: "We continuously develop advanced cleaning solutions that improve efficiency, safety, and performance for modern industries.",
    },
    {
      icon: "fa-award",
      title: "Quality & Reliability",
      desc: "We are committed to delivering dependable machines and specialty chemicals that meet the highest performance standards.",
    },
    {
      icon: "fa-handshake",
      title: "Customer Partnership",
      desc: "We work closely with customers to understand their processes and provide solutions that improve productivity and value.",
    },
    {
      icon: "fa-shield-alt",
      title: "Integrity",
      desc: "We conduct our business with transparency, ethics, and accountability in every interaction.",
    },
    {
      icon: "fa-sync",
      title: "Continuous Improvement",
      desc: "We constantly refine our products, processes, and services to deliver better results and sustainable progress.",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Why Choose Us</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-black mb-3">
            The Regent Biochem <span className="text-green">Advantage</span>
          </h2>
          <p className="text-base lg:text-sm text-brand-body sm:whitespace-nowrap text-center">
            We combine decades of chemical expertise with rigorous quality control to deliver products that perform
            where it matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="why-card group relative bg-[#f7f7f5] border border-brand-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-green-mid overflow-hidden"
            >
              <div className="w-14 h-14 bg-white rounded-xl  flex items-center justify-center text-green text-xl mb-6 transition-all duration-300 group-hover:bg-green">
                <i className={`fas ${adv.icon} group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl lg:text-lg font-bold text-brand-black mb-3">{adv.title}</h3>
              <p className="text-base lg:text-sm text-brand-body leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
