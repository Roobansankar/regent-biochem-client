import pipelineImg from "@/assets/services/pipeline.webp";
import coolingImg from "@/assets/services/cooling.webp";
import injectionImg from "@/assets/services/injection.png";
import heatImg from "@/assets/services/heat.webp";
import operationalImg from "@/assets/services/operational.webp";

export const services = [
  {
    slug: "pipeline",
    title: "Pipeline Cleaning Solutions",
    subtitle: "Advanced Internal Maintenance",
    shortDescription: "Internal pipe & heat exchanger cleaning without dismantling.",
    description: "Over time, internal piping networks build up stubborn restrictions that choke flow rates. Using our advanced RWR mobile flushing systems, we circulate eco-friendly, high-performance cleaning fluids through your system in a closed loop. This completely restores original flow dynamics and pressure equilibrium without you having to tear down or cut into your piping infrastructure.",
    icon: "fa-faucet",
    recommendedCleaners: ["Power Cleaner DB", "SRR"],
   commonProblems: [
  {
    title: "Drops in System Pressure",
    description:
      "Mineral deposits restrict flow, causing pressure loss.",
    icon: "fa-tachometer-alt",
  },
  {
    title: "Reduced Fluid Flow Rates",
    description:
      "Scale buildup narrows pipe diameter, reducing efficiency.",
    icon: "fa-water",
  },
  {
    title: "Premature Pump Wear",
    description:
      "Restricted flow forces pumps to work harder, increasing wear.",
    icon: "fa-gear",
  },
],
   contaminantsRemoved: [
  "Rust",
  "Oxidation",
  "Corrosion Breakdown",
  "Biofilms",
  "Organic Sludge",
],
    infoNeeded: [
      "Total length and diameter of the piping network",
      "Current flow rates vs. original design specs",
      "Material composition of the pipes (e.g., steel, copper, PVC)",
      "Type of fluid normally carried"
    ],
    heroImage: pipelineImg,
    
    process: [
      { step: "01", title: "Consultation", description: "Initial discussion to understand the system and issues." },
      { step: "02", title: "System Assessment", description: "Detailed evaluation of pipe size, material, and contamination." },
      { step: "03", title: "Solution Selection", description: "Choosing the right cleaning chemistry based on system material." },
      { step: "04", title: "Execution", description: "Heated circulation cleaning without dismantling." },
      { step: "05", title: "Performance Review", description: "Verifying flow restoration and system cleanliness." },
      { step: "06", title: "Follow-up", description: "Providing ongoing maintenance support and documentation." }
    ],
    industries: [
      "Chemical Processing",
      "HVAC & Facility Management",
      "Food & Beverage (Utilities)",
      "Manufacturing Plants"
    ],
  
  },
  {
    slug: "cooling-tower",
    title: "Cooling Tower Cleaning",
    subtitle: "Thermal Efficiency & Safety",
    shortDescription: "Restore heat transfer & ensure compliance.",
    description: "Cooling towers are highly prone to scaling and biological fouling, which destroys heat transfer efficiency and spikes energy bills. Our RWR system hooks directly into the tower's circulation loop, flushing out hidden buildup within the internal matrices and internal plumbing. It improves thermal efficiency instantly while helping you maintain strict hygiene standards.",
    icon: "fa-wind",
    heroImage: coolingImg,
    commonProblems: [
  {
    title: "Spiking Energy Consumption",
    description:
      "Scale and fouling force the system to work harder, dramatically increasing power consumption.",
    icon: "fa-bolt",
  },
  {
    title: "Poor Thermal Performance",
    description:
      "Buildup insulates heat transfer surfaces, causing elevated return water temperatures and system strain.",
    icon: "fa-temperature-high",
  },
  {
    title: "Reduced Equipment Lifecycle",
    description:
      "Ongoing fouling accelerates corrosion and wear, shortening the lifespan of tower components.",
    icon: "fa-clock",
  },
],
    problems: [
      "Biofilm accumulation", "Legionella risks", "Fill media clogging", 
      "Reduced cooling capacity", "Regulatory non-compliance", "Sludge buildup"
    ],
    contaminantsRemoved: [
  "Calcium carbonate and hard water scale",
  "Loose rust and sediment deposits",
],
    process: [
      { step: "01", title: "Inspection", description: "Visual and thermal audit of tower performance." },
      { step: "02", title: "Water Treatment", description: "Pre-cleaning biocide treatment for safety." },
      { step: "03", title: "Mechanical Cleaning", description: "Pressure washing of fill and basin sanitation." },
      { step: "04", title: "Certification", description: "Providing hygiene and performance reports." }
    ],
    infoNeeded: [
      "Tower model/capacity", "Fill type", "Last cleaning date", "Water quality reports", "Site access requirements"
    ],
    industries: ["Power Generation", "Data Centers", "Commercial HVAC", "Heavy Manufacturing"]
  },
  {
    slug: "mould-injection",
    title: "Injection Mould Cleaning",
    subtitle: "Precision Tooling Maintenance",
    shortDescription: "Non-abrasive removal of plastic residues.",
    description: "Narrow cooling channels in plastic injection moulds are notorious for trapping deposits, leading to uneven cooling, warped parts, and long cycle times. Optimized for the RWR KST system, this service uses automated pulse-flushing, flow-reversal, and compressed-air line clearing. We completely purge the intricate channels of your expensive tooling, ensuring uniform heat dissipation and protecting moulds from structural corrosion.",
    icon: "fa-industry",
    heroImage: injectionImg,
    commonProblems: [
  {
    title: "Uneven Part Cooling and Warping",
    description:
      "Deposits in cooling channels cause hot spots, resulting in inconsistent cooling and part deformation.",
    icon: "fa-temperature-high",
  },
  {
    title: "Extended Cycle Times",
    description:
      "Reduced cooling efficiency forces longer cycle times, directly impacting production throughput.",
    icon: "fa-clock",
  },
  {
    title: "High Scrap/Rejection Rates",
    description:
      "Blocked channels and uneven cooling lead to dimensional defects and increased rejection rates.",
    icon: "fa-times-circle",
  },
  {
    title: "Blocked Micro-Sized Cooling Channels",
    description:
      "Mineral scale and debris accumulate in narrow channels, restricting coolant flow and causing blockages.",
    icon: "fa-microchip",
  },
],
    contaminantsRemoved: [
  "Calcification (hard water scale)",
  "Rust formations inside cooling channels",
  "Degraded thermal fluids and oily residues",
],
    process: [
      { step: "01", title: "Residue Analysis", description: "Identifying the specific polymer and additive buildup." },
      { step: "02", title: "Cleaning Selection", description: "Choosing between ultrasonic or chemical immersion." },
      { step: "03", title: "Precision Wash", description: "Targeted removal of residues from cavities and vents." },
      { step: "04", title: "Protection", description: "Applying rust preventive for storage or immediate use." }
    ],
    infoNeeded: [
      "Mould material", "Type of polymer used", "Mould dimensions", "Cavity complexity", "Available downtime"
    ],
    industries: ["Plastics & Polymer Injection Moulding", "Automotive Component Manufacturing", "Medical Device Packaging", "Consumer Goods Packaging"]
  },
  {
    slug: "heat-exchanger",
    title: "Heat Exchanger Cleaning",
    subtitle: "Restoring Thermal Performance",
    shortDescription: "Descaling & cleaning for all heat exchanger types.",
    description: "Even a millimeter of scale inside a heat exchanger acts as an insulator, forcing your system to work twice as hard to achieve the same results. Our RWR service provides a fast, non-destructive flush that clears out plate or shell-and-tube exchangers. By completely restoring optimal thermal conductivity, we lower your energy overheads and prolong the operational life of your assets.",
    icon: "fa-temperature-high",
    heroImage: heatImg,
    commonProblems: [
  {
    title: "Drastic Drops in Heat Transfer Efficiency",
    description:
      "Scale buildup insulates heat transfer surfaces, severely reducing thermal conductivity.",
    icon: "fa-temperature-low",
  },
  {
    title: "High Pressure Drops Across the Exchanger",
    description:
      "Mineral deposits narrow flow paths, causing increased resistance and pressure loss.",
    icon: "fa-tachometer-alt",
  },
  {
    title: "Increased System Backpressure",
    description:
      "Restricted flow forces upstream equipment to operate under elevated backpressure.",
    icon: "fa-exclamation-triangle",
  },
  {
    title: "Risk of Thermal-Stress Cracking",
    description:
      "Uneven heat distribution creates thermal stress points, leading to material fatigue and cracking.",
    icon: "fa-exclamation-triangle",
  },
],
    contaminantsRemoved: [
  "Calcium and magnesium scale",
  "Corrosion products and oxides",
  "Silts, mud, and chemical residues",
],
    process: [
      { step: "01", title: "Efficiency Audit", description: "Measuring current vs. design heat transfer rates." },
      { step: "02", title: "Isolation", description: "Safe bypass and connection of circulation equipment." },
      { step: "03", title: "Chemical Loop", description: "Circulating specialized descalers with pH monitoring." },
      { step: "04", title: "Verification", description: "Post-cleaning pressure and temperature testing." }
    ],
    infoNeeded: [
      "Heat exchanger type", "Exchanger size/capacity", "Material of construction", "Fouling type", "Flow rate data"
    ],
    industries: ["Oil & Gas", "Food & Beverages", "Rubber & Plastics", "Engineering & Fabrication", "Automotive", "Shipbuilding & Shipyards"]
  },
  {
    slug: "impact-assessment",
    title: "Operational Impact Assessment",
    subtitle: "Efficiency & Sustainability Analytics",
    shortDescription: "Data-driven analysis for cost & energy savings.",
    description: "Don't wait for a system failure to take action. Before we clean, our team uses the diagnostic capabilities of the RWR system to run a data-driven health check on your loops. After cleaning, we run a comparative assessment to quantify your exact improvements in flow rate, thermal efficiency, and pressure stability, giving you a transparent view of your return on investment (ROI).",
    icon: "fa-chart-pie",
    heroImage: operationalImg,
    commonProblems: [
  {
    title: "Unexplained Efficiency Drops",
    description:
      "Gradual performance decline often goes unnoticed until it significantly impacts production output.",
    icon: "fa-chart-line",
  },
  {
    title: "Lack of Visibility on Internal System Health",
    description:
      "Without diagnostic data, hidden fouling and blockages remain undetected until failure occurs.",
    icon: "fa-eye-slash",
  },
  {
    title: "Difficulty Justifying Maintenance Budgets",
    description:
      "Lack of quantified performance data makes it hard to secure funding for preventive maintenance.",
    icon: "fa-file-invoice-dollar",
  },
  {
    title: "High Energy Costs with Unknown Root Causes",
    description:
      "Rising utility bills without clear drivers make it difficult to target meaningful efficiency improvements.",
    icon: "fa-bolt",
  },
],
    process: [
      { step: "01", title: "Data Gathering", description: "Reviewing utility bills, chemical orders, and waste logs." },
      { step: "02", title: "Benchmarking", description: "Comparing current performance against industry best practices." },
      { step: "03", title: "Gap Analysis", description: "Identifying specific areas for efficiency improvement." },
      { step: "04", title: "Strategic Roadmap", description: "Presenting a phased ROI-based improvement plan." }
    ],
    infoNeeded: [
      "Current chemical usage data", "Waste disposal costs", "Energy logs", "Labor allocation", "Production goals"
    ],
    industries: ["All industrial manufacturing sectors utilizing thermal loops, chillers, or extensive piping systems."]
  }
];
