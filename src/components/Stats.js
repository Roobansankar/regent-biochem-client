import CountUp from "./CountUp";

export default function Stats() {
  return (
    <section className="bg-[#f7f7f5] border-b border-[#e1e1e1]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-brand-border rounded-2xl p-8 sm:p-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">  
          <div>
            <span className="block text-3xl sm:text-4xl font-bold text-green tracking-tight leading-none"><CountUp end={20} suffix="+" /></span>
            <span className="block text-sm lg:text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Years of Experience
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-bold text-green tracking-tight leading-none"><CountUp end={400} suffix="+" /></span>
            <span className="block text-sm lg:text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Installations
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-bold text-green tracking-tight leading-none"><CountUp end={20} suffix="+" /></span>
            <span className="block text-sm lg:text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Industries
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-bold text-green tracking-tight leading-none"><CountUp end={300} suffix="+" /></span>
            <span className="block text-sm lg:text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Process Validation Trials
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-bold text-green tracking-tight leading-none"><CountUp end={50} suffix="%" /></span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Reduction in Cleaning Time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
