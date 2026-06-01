export default function WhyChooseUs() {
  const advantages = [
    {
      icon: "fa-award",
      title: "ISO Certified Quality",
      desc: "All our products meet ISO 9001:2015 standards. Our manufacturing facility undergoes regular third-party audits to ensure consistent product excellence.",
    },
    {
      icon: "fa-leaf",
      title: "Eco-Friendly Formulations",
      desc: "Our cleaning solutions are formulated to minimize environmental impact without compromising on industrial-grade cleaning power.",
    },
    {
      icon: "fa-cogs",
      title: "Custom Formulations",
      desc: "We develop bespoke chemical solutions tailored to your specific industrial requirements, ensuring optimal performance for your processes.",
    },
    {
      icon: "fa-shipping-fast",
      title: "Reliable Supply Chain",
      desc: "With robust logistics and ample stock, we guarantee timely delivery across pan-India and international markets without disruption.",
    },
    {
      icon: "fa-headset",
      title: "Expert Technical Support",
      desc: "Our team of chemical engineers provides round-the-clock technical guidance on product usage, safety, and application optimization.",
    },
    {
      icon: "fa-flask",
      title: "Advanced R&D Lab",
      desc: "Continuous innovation through our state-of-the-art R&D facility ensures your operations benefit from the latest chemical technology advancements.",
    },
  ];

  return (
    <section className="bg-brand-bg2 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black mb-4">
            The Regent Biochem <span className="text-green">Advantage</span>
          </h2>
          <p className="text-base text-brand-body max-w-xl mx-auto leading-relaxed">
            We combine decades of chemical expertise with rigorous quality control to deliver products that perform
            where it matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="why-card group relative bg-white border border-brand-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-green-mid overflow-hidden"
            >
              <div className="w-14 h-14 bg-green-light rounded-xl flex items-center justify-center text-green text-xl mb-6 transition-all duration-300 group-hover:bg-green">
                <i className={`fas ${adv.icon} group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-3">{adv.title}</h3>
              <p className="text-sm text-brand-body leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
