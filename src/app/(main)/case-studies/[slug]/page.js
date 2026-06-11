


"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import CTA from "@/components/CTA";
import { industries } from "@/data/industries";

const caseStudies = [
  {
    slug: "e-weld-shield",
    ref: "W/002",
    title: "Reducing Slag Adhesion and Maintenance Downtime in Laser & Plasma Cutting Operation",
     industry: "Industrial Fabrication Co.",
    category: "Fabrication",
    subindustry: "Railway Equipment Manufacturing",
    application: "Protective coating for laser / plasma / oxy-fuel cutting beds",
    product: "E-WELD SHIELD",
    problem: "Excessive slag adhesion on cutting beds caused frequent maintenance downtime and reduced cutting precision in laser and plasma operations.",
    solution: "Application of E-WELD SHIELD anti-spatter coating to protect cutting beds and minimize slag buildup, extending service life and improving cut quality.",
    results: [
      "Reduced slag adhesion by 80%",
      "Decreased maintenance downtime by 60%",
      "Extended cutting bed service life"
    ],
    image: "/e-weld.webp",
    challenge: "The fabrication facility was experiencing excessive slag buildup on cutting beds, requiring frequent manual chiseling and grinding to remove accumulated deposits. This caused up to 6 hours of downtime per shift, reduced cutting precision due to uneven bed surfaces, and increased operational costs from premature bed replacement.",
    customerBackground: "A leading manufacturer of railway infrastructure and track maintenance equipment. The facility supports fabrication and assembly operations for heavy engineering equipment used in rail infrastructure projects.",
    businessChallengesDescription: "Frequent slag accumulation and slat wear resulted in:",
    businessChallenges: [
      "Slag buildup on cutting slats causing uneven part seating",
      "Frequent slat replacements in continuous-running machines",
      "Increased manual chipping and scraping of cutting tables",
      "Higher downtime due to cleaning and slat changeovers",
      "Impact on cut accuracy and downstream fabrication and welding quality"
    ],
    businessChallengesQuote: "Excessive slag accumulation on cutting bed required frequent manual cleaning of slats, reducing operational efficiency.",
    operationalSnapshot: [
      { value: "50%", description: "reduction in cutting bed cleaning cycles, decreasing from 52 to 26 cleanings per year" },
      { value: "75%", description: "reduction in bed replacement frequency, lowering replacements from 4 to 1 cycle annually" },
      { value: "41%", description: "reduction in total downtime, reducing downtime from 291 hrs to 170 hrs per year" },
    ],
    costSnapshot: [
      { value: "12%", description: "reduction in total annual operational cost, generating ~₹1.37 lakh net annual savings" },
      { value: "₹10/kg", description: "production cost per unit reduced (₹360/kg to ₹350/kg)" },
      { value: "₹2.84L", description: "annual savings from reduced bed replacement costs" },
    ],
    approachSteps: [
      "Conducted detailed assessment of current slag buildup patterns and maintenance schedules.",
      "Applied E-WELD SHIELD protective coating to all active cutting beds.",
      "Monitored slag adhesion reduction over a 30-day production cycle.",
      "Adjusted coating application frequency based on real-world wear patterns.",
      "Trained operators on proper bed maintenance and coating reapplication."
    ],
    takeawaysDescription: "<b>E-Weld Shield</b> shifts laser bed maintenance from reactive slag removal to preventive surface protection, delivering:",
    takeaways: [
      "Reduced slag buildup and adhesion",
      "Faster maintenance and reduced downtime",
      "Extended slat and cutting bed lifespan",
      "Predictable and lower maintenance costs"
    ],
    idealUseCases: [
      "High-volume laser/plasma/Oxy-fuel cutting beds",
      "Precision engineering facilities",
      "Heavy metal fabrication shops",
      "Plants seeking productivity + EHS improvements"
    ],
    outcome: "The implementation of E-WELD SHIELD transformed the facility's cutting operations. Slag adhesion was reduced by 80%, cutting maintenance downtime from 6 hours to just over 2 hours per shift. Cutting precision improved significantly due to consistently flat bed surfaces. The initial investment was recovered within 4 months through reduced labor costs and extended bed life."
  },
  {
    slug: "solvent-waste-reduction",
    ref: "W/001",
    title: "85% Reduction in Solvent Waste for Automotive Assembly",
    industry: "Tier-1 Automotive Manufacturer",
    category: "Automotive",
    industry: "Automotive manufacturing",
    subindustry: "Automotive Assembly",
    application: "Protective coating for laser / plasma / oxy-fuel cutting beds",
    product: "Bio-Washer System",
    problem:
      "The client was struggling with high hazardous waste disposal costs and operator exposure to toxic VOCs from traditional solvent tanks.",
    solution:
      "Implementation of 12 Bio-Washer units utilising bio-remediation technology to break down oils in-situ.",
    results: [
      "85% reduction in annual hazardous waste",
      "90% decrease in VOC emissions",
      "Payback period achieved in 14 months",
    ],
    image:
      "https://www.eieprocess.se/media/jdnlnbhi/eie-process_detaljtvattar_bio-circle.jpg?width=1140&height=640&format=webp&quality=80&v=1db72f771808be0",
    challenge:
      "The manufacturing facility was processing over 50,000 engine components per month across 12 production lines. Each cleaning cycle required 200 litres of solvent-based cleaner that had to be replaced every 72 hours due to contamination. This generated approximately 800 litres of hazardous waste weekly, with disposal costs exceeding $45,000 annually. Additionally, operator exposure to VOC emissions was approaching regulatory limits, putting the facility at risk of non-compliance with OSHA standards.",
    customerBackground:
      "A tier-1 supplier to major global OEMs, this facility manufactures and cleans over 50,000 engine components per month across 12 continuous production lines.",
    businessChallenges: [
      "High-volume solvent use requiring replacement every 72 hours",
      "800 litres of hazardous waste generated weekly",
      "VOC emissions approaching OSHA non-compliance thresholds",
      "Annual waste disposal costs exceeding $45,000",
      "Operator health and safety exposure risks",
    ],
    operationalSnapshot: [
      { value: "85%", description: "reduction in annual hazardous waste generated on-site" },
      { value: "90%", description: "decrease in VOC emissions across all 12 production lines" },
      { value: "8 wks", description: "full transition completed with zero production downtime" },
    ],
    costSnapshot: [
      { value: "14 mo", description: "payback period from implementation to full ROI" },
      { value: "6 mo+", description: "cleaning fluid life extended from 3 days to over 6 months" },
      { value: "2 lines", description: "additional lines added post-success, expanding coverage" },
    ],
    approachSteps: [
      "Conducted full workflow audit across all 12 solvent cleaning stations.",
      "Proposed phased transition to Bio-Washer units with bio-active chemistry dosing.",
      "Integrated oil skimming and filtration for continuous fluid reclamation.",
      "Delivered operator training across all three shifts.",
      "Ran 90-day monitoring period with regular chemistry analysis.",
    ],
    takeaways: [
      "Eliminated hazardous solvent dependency",
      "Extended fluid life from days to months",
      "Full OSHA VOC compliance restored",
      "Sustainable, reduced waste footprint",
    ],
    idealUseCases: [
      "High-volume engine and powertrain component lines",
      "Facilities approaching VOC compliance limits",
      "Plants targeting ESG and waste reduction goals",
      "Operations replacing legacy solvent tank systems",
    ],
    outcome:
      "The transition was completed over 8 weeks with zero production downtime. The bio-remediation technology proved highly effective at breaking down hydrocarbon contaminants, extending cleaning fluid life from 3 days to over 6 months. The facility achieved full ROI within 14 months and has since expanded the system to two additional production lines.",
  },
  {
    slug: "aerospace-precision-cleaning",
    ref: "W/002",
    title: "Aerospace-Grade Precision Cleaning with Zero Rejects",
    industry: "Precision Aerospace Machining Ltd.",
    category: "Aerospace",
    subindustry: "Aerospace precision machining",
    application: "Aqueous parts washing — turbine components",
    product: "GT Parts Washer",
    problem:
      "Stringent NADCAP cleanliness requirements meant even microscopic residue led to rejected high-value engine components.",
    solution:
      "Transition to GT Parts Washer with custom spray pressure profiles and specialised aqueous chemistry.",
    results: [
      "Reduced reject rate from 4.2% to 0%",
      "Faster cleaning cycle times (by 30%)",
      "Full compliance with aerospace standards",
    ],
    image:
      "https://images.kkeu.de/is/image/BEG/Environment/Hazardous_goods_handling/Parts_cleaners_cleaning_tables/GT_Maxi_parts_washer_pdplarge-mrd--688866_AAS_00_00_00_19525793.jpg",
    challenge:
      "Precision Aerospace Machining Ltd. manufactures critical turbine components for major aerospace OEMs. Each component undergoes rigorous cleaning to meet NADCAP AC7108 standards. Their existing cleaning process was achieving only a 95.8% pass rate, meaning nearly 4% of high-value components — some worth upwards of $12,000 each — were being rejected.",
    customerBackground:
      "Manufacturer of critical turbine and engine components for major aerospace OEMs, requiring full NADCAP AC7108 cleaning compliance on every production run.",
    businessChallenges: [
      "Reject rate of 4.2% on high-value components worth up to $12,000 each",
      "Microscopic particulate and hydrocarbon film causing NADCAP failures",
      "Manual re-cleaning adding significant labour overhead",
      "Risk of losing OEM supplier certification",
      "Inability to trace and log cleaning cycle compliance",
    ],
    operationalSnapshot: [
      { value: "0%", description: "reject rate sustained for over 18 months post-installation" },
      { value: "30%", description: "reduction in cleaning cycle time per component batch" },
      { value: "40%", description: "increase in throughput from faster, more reliable cycles" },
    ],
    costSnapshot: [
      { value: "$280K", description: "annual savings from eliminated reject and rework costs" },
      { value: "<5 µm", description: "in-line filtration cleanliness level achieved per NADCAP spec" },
      { value: "18 mo+", description: "zero rejects maintained continuously since installation" },
    ],
    approachSteps: [
      "Analysed part geometries and NADCAP AC7108 cleanliness requirements.",
      "Configured GT Parts Washer with custom spray bars and pressure profiles (2–8 bar).",
      "Validated low-foaming aqueous chemistry for aerospace applications.",
      "Installed in-line <5 micron filtration and automated cycle logging.",
      "Ran validation protocol aligned with NADCAP audit requirements.",
    ],
    takeaways: [
      "Zero rejects sustained for 18+ months",
      "Full NADCAP AC7108 compliance achieved",
      "Automated traceability for audit readiness",
      "Eliminated solvent-related safety concerns",
    ],
    idealUseCases: [
      "NADCAP-certified aerospace component manufacturers",
      "Facilities cleaning high-value precision parts",
      "Operations requiring traceable cleaning compliance",
      "Plants switching from solvent to aqueous cleaning",
    ],
    outcome:
      "Within 30 days of installation, the reject rate dropped to 0% and has remained at zero for over 18 months. Cycle time was reduced by 30%, increasing throughput by 40%. The client achieved full NADCAP compliance and eliminated solvent-related safety concerns. Annual savings from reduced reject and rework costs exceeded $280,000.",
  },
  {
    slug: "fluid-health-automation",
    ref: "W/003",
    title: "Automating Fluid Health in Heavy Metal Forging",
    industry: "Global Forging Group",
    category: "Heavy Industry",
    industry: "Heavy engineering — hot forging",
    subindustry: "Heavy engineering — hot forging",
    application: "Automated tank fluid management — aqueous degreasing",
    product: "Pro AutoPurge System",
    problem:
      "Frequent manual cleaning of large tanks caused 48 hours of production downtime every month.",
    solution:
      "Installation of the Pro AutoPurge System to automate the removal of sludge and maintain chemistry balance.",
    results: [
      "Eliminated 100% of manual tank clean-outs",
      "Increased production uptime by 48 hours/month",
      "Extended chemistry life by 4x",
    ],
    image:
      "https://www.dentsplysirona.com/en-hr/discover/discover-by-brand/intego/_jcr_content/root/container/slider_1227234030/parsys_1/quicknavigationtile_/image.coreimg.70.1100.png/1763479159560/tre-image-teaser-axano-pure-full.png",
    challenge:
      "Global Forging Group operates one of the largest hot forging facilities in Europe, processing over 200 tons of steel monthly. Their cleaning operation relied on 50,000-litre tanks requiring complete drain and manual clean-out every 30 days — each shutdown costing 48 hours of lost production. Annual downtime exceeded 500 hours.",
    customerBackground:
      "One of Europe's largest hot forging facilities, processing over 200 tons of steel monthly with continuous aqueous degreasing across a bank of 50,000-litre tanks.",
    businessChallenges: [
      "Full tank drain and manual clean-out required every 30 days",
      "Each shutdown costing 48 hours of lost production time",
      "Annual downtime exceeding 500 hours — over $1.2M in lost capacity",
      "Forging lubricants and metal fines degrading fluid chemistry rapidly",
      "No real-time monitoring of fluid condition or contamination levels",
    ],
    operationalSnapshot: [
      { value: "100%", description: "of manual tank clean-outs eliminated after system installation" },
      { value: "576 hrs", description: "of annual production capacity recovered (48 hrs/month × 12)" },
      { value: "4×", description: "extension in chemistry life — from 30 days to over 120 days" },
    ],
    costSnapshot: [
      { value: "$1.4M", description: "annual production capacity value recovered from uptime gains" },
      { value: "75%", description: "reduction in chemical consumption from extended fluid life" },
      { value: "6 mo", description: "full payback period achieved; system running maintenance-free 2+ years" },
    ],
    approachSteps: [
      "Assessed tank infrastructure and documented current clean-out cycles and costs.",
      "Designed custom AutoPurge integration with programmable sludge removal cycles.",
      "Installed real-time fluid quality sensors (pH, conductivity, contaminant load).",
      "Connected automated dosing system to maintain optimal cleaning chemistry.",
      "Deployed remote monitoring dashboard and fail-safe bypass for zero-interruption maintenance.",
    ],
    takeaways: [
      "Zero manual tank clean-outs required",
      "Predictive maintenance via real-time monitoring",
      "75% lower chemical consumption",
      "Sustained 2+ years maintenance-free operation",
    ],
    idealUseCases: [
      "Large-volume hot forging and stamping operations",
      "Facilities with recurring scheduled tank shutdowns",
      "Plants targeting predictive maintenance programmes",
      "Operations with high chemical usage and disposal costs",
    ],
    outcome:
      "The Pro AutoPurge System eliminated 100% of manual tank clean-outs. Production uptime increased by 48 hours per month, recovering 576 hours of annual production capacity worth approximately $1.4M. Chemistry life was extended from 30 days to over 120 days, reducing chemical consumption by 75% and waste disposal costs by 80%. The system paid for itself within 6 months.",
  },
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ── */}
   
     {/* <section className="relative overflow-hidden flex bg-[linear-gradient(90deg,#166534_0%,#16a34a_45%,#7ec99a_65%,#ffffff_100%)]">
  <div className="absolute inset-0 hero-pattern opacity-10" />

  
  <div className="flex-1 px-8 py-10 flex flex-col justify-center relative z-10">
    <Link
      href="/case-studies"
      className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors mb-6"
    >
      <i className="fas fa-arrow-left text-[10px]" /> Back to Case Studies
    </Link>

    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug">
      {study.title}
    </h1>
  </div>

  <div className="w-64 lg:w-80 flex-shrink-0 flex items-center justify-center p-6 relative z-10">
    <img
      src={study.image}
      alt={study.title}
      className="w-full h-52 lg:h-64 object-cover rounded-2xl shadow-md"
    />
  </div>
</section> */}

{/* <section className="relative overflow-hidden flex bg-[linear-gradient(90deg,#166534_0%,#16a34a_40%,#a8d8b0_62%,#ffffff_80%,#ffffff_100%)]">

  <div className="flex-1 px-8 py-8 flex flex-col justify-center gap-3 relative z-10">

    
    <div>
      <span className="text-2xl font-bold text-white tracking-tight">
        bio-chem <sup className="text-xs">®</sup>
      </span>
      <p className="text-[10px] uppercase tracking-widest text-white/80 mt-0.5">
        Surface Technology
      </p>
    </div>

   
    <div className="inline-block bg-white text-[#166534] text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full w-fit">
      E-WELD SHIELD
    </div>

    
    <h1 className="text-sm md:text-base font-bold text-white leading-relaxed max-w-xs">
      Reducing Slag Adhesion<br />
      and Maintenance Downtime<br />
      in Laser &amp; Plasma Cutting Operations
    </h1>
  </div>


  <div className="w-64 lg:w-80 flex-shrink-0 overflow-hidden">
    <img
      src={study.image}
      alt={study.title}
      className="w-full h-full object-cover"
    />
  </div>

</section> */}


<section className="relative overflow-hidden">
  <div className="flex items-center min-h-[280px] bg-white">

    {/* Left Content */}
    <div className="flex-1 px-8 lg:px-12 py-8 relative z-10">

      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-sm text-green/60 hover:text-green transition-colors mb-4"
      >
        <i className="fas fa-arrow-left text-xs" />
        Back to Case Studies
      </Link>

      <h1 className="text-3xl lg:text-4xl font-bold text-green leading-tight max-w-3xl">
        {study.title}
      </h1>

    </div>

    {/* Right Image */}
    <div className="w-[250px] lg:w-[320px] flex justify-center items-center pr-6">
      <img
        src={study.image}
        alt={study.title}
        className="w-full h-auto object-contain"
      />
    </div>

  </div>
</section>


      {/* Meta Details */}
      <section className="py-8 bg-brand-bg2 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-xs mb-2">
                <i className="fas fa-building"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Industry</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.industry}</div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-xs mb-2">
                <i className="fas fa-industry"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Sub Industry</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.subindustry}</div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-xs mb-2">
                <i className="fas fa-wrench"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Application</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.application}</div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-xs mb-2">
                <i className="fas fa-tag"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Product</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.product}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pt-10 sm:pt-14 pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

            {/* ── Left — main content ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Customer background */}
              <div>
                <SectionLabel>Customer background</SectionLabel>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">{study.customerBackground}</p>
                {study.businessChallengesDescription && (
                  <div className="mt-8">
                    <SectionLabel>Business Challenges</SectionLabel>
                    <p className="text-sm sm:text-base text-brand-black leading-relaxed mb-3 font-semibold">{study.businessChallengesDescription}</p>
                  </div>
                )}
                <ul className="space-y-3">
                  {study.businessChallenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                      <i className="fas fa-circle text-green/40 text-[7px] mt-1.5 flex-shrink-0"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                {study.businessChallengesQuote && (
                  <p className="text-sm sm:text-base text-brand-black italic font-medium leading-relaxed mt-4 border-l-2 border-green/30 pl-4">&ldquo;{study.businessChallengesQuote}&rdquo;</p>
                )}
              </div>

              <Divider />

              {/* Before / After snapshot */}
              <div>
                <SectionLabel>Before vs after snapshot</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <SnapshotCard title="Operational impact" stats={study.operationalSnapshot} />
                  <SnapshotCard title="Cost savings" stats={study.costSnapshot} />
                </div>
              </div>

              <Divider />

              {/* Product */}
              <div>
                <SectionLabel>Product</SectionLabel>
                <div className="bg-brand-bg2 rounded-2xl border border-brand-border overflow-hidden mt-3">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-56 h-48 sm:h-auto flex-shrink-0">
                      <img src={study.image} alt={study.product} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <h3 className="text-xl font-bold text-brand-black mb-2">{study.product}</h3>
                      <p className="text-sm text-brand-body leading-relaxed mb-4">{study.solution}</p>
                      <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-green hover:text-green-dark transition-colors">
                        View More <i className="fas fa-arrow-right text-xs"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right — sidebar ── */}
            <div className="lg:col-span-1 sticky top-24 space-y-4">



              {/* Key takeaways */}
              <div className="bg-green/5 rounded-2xl border border-green/20 p-5">
                <SectionLabel>Key takeaways</SectionLabel>
                {study.takeawaysDescription && (
                  <p className="text-sm text-green-900 leading-relaxed mt-2 mb-3" dangerouslySetInnerHTML={{ __html: study.takeawaysDescription }}></p>
                )}
                <ul className="space-y-2">
                  {study.takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                      <i className="fas fa-circle-check text-green text-xs mt-0.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal use cases */}
              <div className="bg-brand-bg2 rounded-2xl border border-brand-border p-5">
                <SectionLabel>Ideal use cases</SectionLabel>
                <ul className="space-y-2 mt-2">
                  {study.idealUseCases.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-body">
                      <i className="fas fa-circle text-green/40 text-[7px] mt-1.5 flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-green rounded-[2rem] p-8 text-white">
                <i className="fas fa-headset text-3xl mb-6"></i>
                <h3 className="text-xl font-bold mb-4">Discuss a similar project</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">Speak with our engineers about your specific application requirements.</p>
                <Link href="/contact" className="inline-block bg-white text-green font-bold px-6 py-3 rounded-xl hover:-translate-y-1 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

/* ── Small reusable pieces ── */

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
      <span className="w-5 h-0.5 bg-green-500 rounded-sm"></span> {children}
    </div>
  );
}

function Divider({ tight = false }) {
  return <hr className={`border-brand-border ${tight ? "my-0" : ""}`} />;
}

function ChallengeItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm sm:text-base text-gray-500 list-none">
      <span className="text-green text-[10px] mt-1.5 flex-shrink-0">▸</span>
      {children}
    </li>
  );
}

function SnapshotCard({ title, stats }) {
  return (
    <div className="bg-brand-bg2 rounded-xl border border-brand-border p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-body/60 mb-3">
        {title}
      </p>
      <div className="space-y-3">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-2xl font-bold text-green leading-none">{s.value}</p>
            <p className="text-xs text-brand-body mt-0.5 leading-snug">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetaRow({ icon, label, value }) {
  return (
    <div className="flex gap-3 items-start">
      {icon && <i className={`fas ${icon} text-green text-xs mt-0.5 w-4 flex-shrink-0`}></i>}
      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-green w-24 flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-sm font-bold text-brand-black">{value}</span>
    </div>
  );
}