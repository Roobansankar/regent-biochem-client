// "use client";

// import Link from "next/link";
// import { notFound, useParams } from "next/navigation";
// import CTA from "@/components/CTA";

// const caseStudies = [
//   {
//     slug: "solvent-waste-reduction",
//     title: "85% Reduction in Solvent Waste for Automotive Assembly",
//     client: "Tier-1 Automotive Manufacturer",
//     category: "Automotive",
//     product: "Bio-Washer System",
//     problem: "The client was struggling with high hazardous waste disposal costs and operator exposure to toxic VOCs from traditional solvent tanks.",
//     solution: "Implementation of 12 Bio-Washer units utilizing bio-remediation technology to break down oils in-situ.",
//     results: [
//       "85% reduction in annual hazardous waste",
//       "90% decrease in VOC emissions",
//       "Payback period achieved in 14 months"
//     ],
//     image: "https://www.eieprocess.se/media/jdnlnbhi/eie-process_detaljtvattar_bio-circle.jpg?width=1140&height=640&format=webp&quality=80&v=1db72f771808be0",
//     challenge: "The manufacturing facility was processing over 50,000 engine components per month across 12 production lines. Each cleaning cycle required 200 litres of solvent-based cleaner that had to be replaced every 72 hours due to contamination. This generated approximately 800 litres of hazardous waste weekly, with disposal costs exceeding $45,000 annually. Additionally, operator exposure to VOC emissions was approaching regulatory limits, putting the facility at risk of non-compliance with OSHA standards.",
//     approach: "Our team conducted a comprehensive audit of the cleaning workflow and proposed a phased transition to Bio-Washer systems using bio-remediation technology. The implementation included:\n\n• Replacement of 12 solvent cleaning stations with Bio-Washer units\n• Installation of automated dosing systems for bio-active cleaning agents\n• Integration of oil skimming and filtration for continuous fluid reclamation\n• Operator training program across all three shifts\n• 90-day monitoring period with regular chemistry analysis",
//     outcome: "The transition was completed over 8 weeks with zero production downtime. The bio-remediation technology proved highly effective at breaking down hydrocarbon contaminants, extending cleaning fluid life from 3 days to over 6 months. The facility achieved full ROI within 14 months and has since expanded the system to two additional production lines."
//   },
//   {
//     slug: "aerospace-precision-cleaning",
//     title: "Aerospace-Grade Precision Cleaning with Zero Rejects",
//     client: "Precision Aerospace Machining Ltd.",
//     category: "Aerospace",
//     product: "GT Parts Washer",
//     problem: "Stringent NADCAP cleanliness requirements meant even microscopic residue led to rejected high-value engine components.",
//     solution: "Transition to GT Parts Washer with custom spray pressure profiles and specialized aqueous chemistry.",
//     results: [
//       "Reduced reject rate from 4.2% to 0%",
//       "Faster cleaning cycle times (by 30%)",
//       "Full compliance with aerospace standards"
//     ],
//     image: "https://images.kkeu.de/is/image/BEG/Environment/Hazardous_goods_handling/Parts_cleaners_cleaning_tables/GT_Maxi_parts_washer_pdplarge-mrd--688866_AAS_00_00_00_19525793.jpg",
//     challenge: "Precision Aerospace Machining Ltd. manufactures critical turbine components for major aerospace OEMs. Each component undergoes rigorous cleaning to meet NADCAP AC7108 standards. Their existing cleaning process was achieving only a 95.8% pass rate, meaning nearly 4% of high-value components — some worth upwards of $12,000 each — were being rejected. Microscopic particulate residue and hydrocarbon films were the primary causes of failure, and manual re-cleaning added significant labour costs.",
//     approach: "We conducted a detailed analysis of the client's cleaning requirements and part geometries. The solution involved deploying GT Parts Washer units with:\n\n• Custom spray bar configurations tailored to complex turbine geometries\n• Programmable pressure profiles ranging from 2 to 8 bar\n• Specialized low-foaming aqueous chemistry validated for aerospace applications\n• In-line filtration system achieving <5 micron cleanliness\n• Automated cycle logging for full traceability and audit compliance\n• Validation protocol aligned with NADCAP requirements",
//     outcome: "Within 30 days of installation, the reject rate dropped to 0% and has remained at zero for over 18 months. Cycle time was reduced by 30%, increasing throughput by 40%. The client achieved full NADCAP compliance and eliminated solvent-related safety concerns. Annual savings from reduced reject and rework costs exceeded $280,000."
//   },
//   {
//     slug: "fluid-health-automation",
//     title: "Automating Fluid Health in Heavy Metal Forging",
//     client: "Global Forging Group",
//     category: "Heavy Industry",
//     product: "Pro AutoPurge System",
//     problem: "Frequent manual cleaning of large tanks caused 48 hours of production downtime every month.",
//     solution: "Installation of the Pro AutoPurge System to automate the removal of sludge and maintain chemistry balance.",
//     results: [
//       "Eliminated 100% of manual tank clean-outs",
//       "Increased production uptime by 48 hours/month",
//       "Extended chemistry life by 4x"
//     ],
//     image: "https://www.dentsplysirona.com/en-hr/discover/discover-by-brand/intego/_jcr_content/root/container/slider_1227234030/parsys_1/quicknavigationtile_/image.coreimg.70.1100.png/1763479159560/tre-image-teaser-axano-pure-full.png",
//     challenge: "Global Forging Group operates one of the largest hot forging facilities in Europe, processing over 200 tons of steel monthly. Their cleaning and degreasing operation relied on a bank of 50,000-litre tanks filled with aqueous cleaning solution. However, the buildup of forging lubricants, metal fines, and hydraulic oils required complete tank drain and manual clean-out every 30 days — each shutdown costing 48 hours of lost production time. Annual downtime exceeded 500 hours, representing over $1.2M in lost production capacity.",
//     approach: "Our engineering team designed a custom automation solution integrating the Pro AutoPurge System with the existing tank infrastructure:\n\n• Installation of automated sludge removal system with programmable purge cycles\n• Integration of real-time fluid quality sensors monitoring pH, conductivity, and contaminant load\n• Automated chemical dosing system to maintain optimal cleaning chemistry\n• Remote monitoring dashboard for predictive maintenance scheduling\n• Fail-safe bypass system ensuring zero production interruption during maintenance",
//     outcome: "The Pro AutoPurge System eliminated 100% of manual tank clean-outs. Production uptime increased by 48 hours per month, recovering 576 hours of annual production capacity worth approximately $1.4M. Chemistry life was extended from 30 days to over 120 days, reducing chemical consumption by 75% and waste disposal costs by 80%. The system paid for itself within 6 months and has been operating maintenance-free for over 2 years."
//   }
// ];

// export default function CaseStudyDetail() {
//   const { slug } = useParams();
//   const study = caseStudies.find((s) => s.slug === slug);

//   if (!study) {
//     notFound();
//   }

//   return (
//     <main className="flex flex-col min-h-screen bg-white">
//       {/* Hero */}
//       <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-green overflow-hidden">
//         <div className="absolute inset-0 hero-pattern opacity-10"></div>
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <Link
//             href="/case-studies"
//             className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
//           >
//             <i className="fas fa-arrow-left text-xs"></i> Back to Case Studies
//           </Link>
//           <div className="max-w-4xl">
//             <span className="px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg inline-block mb-4">
//               {study.category}
//             </span>
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
//               {study.title}
//             </h1>
//             <p className="text-white/80 text-sm sm:text-base">{study.client}</p>
//           </div>
//         </div>
//       </section>

//       {/* Main image */}
//       <section className="py-8 sm:py-12">
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
//             <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-8 sm:py-12">
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
//             {/* Main content */}
//             <div className="lg:col-span-2 space-y-10">
//               <div>
//                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-green mb-4">The Challenge</h2>
//                 <p className="text-sm sm:text-base text-brand-body leading-relaxed">{study.challenge}</p>
//               </div>

//               <div>
//                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-green mb-4">Our Approach</h2>
//                 <p className="text-sm sm:text-base text-brand-body leading-relaxed whitespace-pre-line">{study.approach}</p>
//               </div>

//               <div>
//                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-green mb-4">The Outcome</h2>
//                 <p className="text-sm sm:text-base text-brand-body leading-relaxed">{study.outcome}</p>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="bg-brand-bg2 rounded-2xl border border-brand-border p-6 space-y-6 sticky top-24">
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green mb-2">Client</p>
//                   <p className="text-sm font-bold text-brand-black">{study.client}</p>
//                 </div>
//                 <div className="h-px bg-brand-border"></div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green mb-2">Category</p>
//                   <p className="text-sm font-bold text-brand-black">{study.category}</p>
//                 </div>
//                 <div className="h-px bg-brand-border"></div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green mb-2">Product Used</p>
//                   <p className="text-sm font-bold text-brand-black">{study.product}</p>
//                 </div>
//                 <div className="h-px bg-brand-border"></div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green mb-3">Key Results</p>
//                   <ul className="space-y-2">
//                     {study.results.map((r, i) => (
//                       <li key={i} className="flex items-start gap-2 text-sm text-brand-body">
//                         <i className="fas fa-circle-check text-green text-xs mt-0.5"></i>
//                         {r}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <Link
//                   href="/contact"
//                   className="block w-full text-center px-5 py-3 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all shadow-lg shadow-green/20 text-sm"
//                 >
//                   Discuss Similar Project
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <CTA />
//     </main>
//   );
// }



"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import CTA from "@/components/CTA";

const caseStudies = [
  {
    slug: "solvent-waste-reduction",
    ref: "W/001",
    title: "85% Reduction in Solvent Waste for Automotive Assembly",
    client: "Tier-1 Automotive Manufacturer",
    category: "Automotive",
    industry: "Automotive manufacturing",
    application: "Aqueous parts cleaning — engine components",
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
    client: "Precision Aerospace Machining Ltd.",
    category: "Aerospace",
    industry: "Aerospace precision machining",
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
    client: "Global Forging Group",
    category: "Heavy Industry",
    industry: "Heavy engineering — hot forging",
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
      <section className="relative bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors mb-6"
          >
            <i className="fas fa-arrow-left text-[10px]" /> Back to Case Studies
          </Link>

          {/* Eyebrow badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider rounded">
              {study.ref}
            </span>
            <span className="px-2.5 py-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold uppercase tracking-wider rounded">
              {study.product}
            </span>
            <span className="px-2.5 py-1 bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider rounded">
              bio-chem Surface Technology
            </span>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 max-w-4xl leading-snug">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-white/70 text-xs">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-industry text-[10px]" />
              {study.industry}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-wrench text-[10px]" />
              {study.application}
            </span>
          </div>
        </div>
      </section>

      {/* ── Main image ── */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/7] rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">

            {/* ── Left — main content ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Customer background */}
              <div>
                <SectionLabel>Customer background</SectionLabel>
                <p className="text-sm text-brand-body leading-relaxed mb-3">{study.customerBackground}</p>
                <ul className="space-y-1.5">
                  {study.businessChallenges.slice(0, 3).map((item, i) => (
                    <ChallengeItem key={i}>{item}</ChallengeItem>
                  ))}
                </ul>
              </div>

              <Divider />

              {/* Business challenges */}
              <div>
                <SectionLabel>Business challenges</SectionLabel>
                <p className="text-sm text-brand-body leading-relaxed mb-3">
                  Recurring operational issues were impacting production quality and cost:
                </p>
                <ul className="space-y-1.5">
                  {study.businessChallenges.map((item, i) => (
                    <ChallengeItem key={i}>{item}</ChallengeItem>
                  ))}
                </ul>

                {/* Pull quote */}
                <blockquote className="mt-5 pl-4 border-l-[3px] border-green bg-gray-50 rounded-r-lg py-3 pr-4">
                  <p className="text-sm text-brand-body italic leading-relaxed">{study.problem}</p>
                </blockquote>
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

              {/* Our approach */}
              <div>
                <SectionLabel>Our approach</SectionLabel>
                <div className="space-y-3 mt-3">
                  {study.approachSteps.map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-green/10 border border-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-green text-[9px]" />
                      </div>
                      <p className="text-sm text-brand-body leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Divider />

              {/* Outcome */}
              <div>
                <SectionLabel>The outcome</SectionLabel>
                <p className="text-sm text-brand-body leading-relaxed">{study.outcome}</p>
              </div>
            </div>

            {/* ── Right — sidebar ── */}
            <div className="lg:col-span-1 sticky top-24 space-y-4">

              {/* Meta card */}
              <div className="bg-brand-bg2 rounded-2xl border border-brand-border p-5 space-y-3">
                <MetaRow label="Client" value={study.client} />
                <Divider tight />
                <MetaRow label="Industry" value={study.industry} />
                <Divider tight />
                <MetaRow label="Product" value={study.product} />
                <Divider tight />
                <MetaRow label="Ref" value={study.ref} />
              </div>

              {/* Key takeaways */}
              <div className="bg-green/5 rounded-2xl border border-green/20 p-5">
                <SectionLabel>Key takeaways</SectionLabel>
                <ul className="space-y-2 mt-2">
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
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3.5 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all shadow-lg shadow-green/20 text-sm"
              >
                Discuss a similar project
              </Link>

              <p className="text-center text-xs text-brand-body/60">
                +91 98434 06642 · info@bio-chem.in
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

/* ── Small reusable pieces ── */

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green mb-2">
      {children}
    </p>
  );
}

function Divider({ tight = false }) {
  return <hr className={`border-brand-border ${tight ? "my-0" : ""}`} />;
}

function ChallengeItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-brand-body list-none">
      <span className="text-green text-[10px] mt-1 flex-shrink-0">▸</span>
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

function MetaRow({ label, value }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-green w-16 flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-sm font-bold text-brand-black">{value}</span>
    </div>
  );
}