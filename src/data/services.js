export const services = [
  {
    slug: "pipeline",
    title: "Pipeline Cleaning Solutions",
    subtitle: "Advanced Internal Maintenance",
    shortDescription: "Internal pipe & heat exchanger cleaning without dismantling.",
    description: "Over time, internal piping networks build up stubborn restrictions that choke flow rates. Using our advanced RWR mobile flushing systems, we circulate eco-friendly, high-performance cleaning fluids through your system in a closed loop. This completely restores original flow dynamics and pressure equilibrium without you having to tear down or cut into your piping infrastructure.",
    icon: "fa-faucet",
    commonProblems: [
      "Drops in system pressure",
      "Reduced fluid flow rates",
      "Premature pump wear and tear",
      "System blockages causing unexpected downtime"
    ],
    contaminantsRemoved: [
      "Rust, oxidation, and corrosion breakdown",
      "Biofilms and organic sludge"
    ],
    infoNeeded: [
      "Total length and diameter of the piping network",
      "Current flow rates vs. original design specs",
      "Material composition of the pipes (e.g., steel, copper, PVC)",
      "Type of fluid normally carried"
    ],
    heroImage: "https://images.squarespace-cdn.com/content/v1/6495ace4409a2a506cc4b8a8/dcc34794-6990-4caf-b018-0a6cd1bdb4d2/pipeline%2Bcleaning%2Bservices.jpg",
    
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
    description: "Comprehensive cleaning and disinfection services for cooling towers. We remove biological growth, scale, and debris from fill media and basins to restore thermal performance and mitigate Legionella risks.",
    icon: "fa-wind",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    problems: [
      "Biofilm accumulation", "Legionella risks", "Fill media clogging", 
      "Reduced cooling capacity", "Regulatory non-compliance", "Sludge buildup"
    ],
    contaminants: [
      "Algae & Biofilm", "Scale deposits", "Sediment & Sludge", "Airborne debris", "Corrosion byproducts"
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
    industries: ["HVAC", "Power Generation", "Data Centers", "Manufacturing", "Hospitals"]
  },
  {
    slug: "mould-injection",
    title: "Mould & Injection Cleaning",
    subtitle: "Precision Tooling Maintenance",
    shortDescription: "Non-abrasive removal of plastic residues.",
    description: "Specialized cleaning for injection moulds and hot runner systems. Our solutions remove burnt-on polymers and release agents without damaging delicate surfaces or complex geometries.",
    icon: "fa-industry",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600",
    problems: [
      "Polymer degradation", "Clogged vent lines", "High scrap rates", 
      "Surface finish issues", "Frequent downtime", "Expensive tooling damage"
    ],
    contaminants: [
      "Burnt plastics", "Release agents", "Rust in cooling channels", "Carbonized additives", "Grease"
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
    industries: ["Plastic Injection", "Packaging", "Automotive", "Medical Device Mfg", "Electronics"]
  },
  {
    slug: "heat-exchanger",
    title: "Heat Exchanger Cleaning",
    subtitle: "Restoring Thermal Performance",
    shortDescription: "Descaling & cleaning for all heat exchanger types.",
    description: "Advanced descaling and cleaning for shell-and-tube or plate heat exchangers. We restore optimal Delta-T and flow rates by removing calcium, silica, and organic fouling.",
    icon: "fa-temperature-high",
    heroImage: "https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?auto=format&fit=crop&q=80&w=1600",
    problems: [
      "Thermal efficiency loss", "High pressure drop", "Calcium scaling", 
      "Silica buildup", "Increased energy consumption", "Flow restrictions"
    ],
    contaminants: [
      "Calcium scale", "Silica", "Biofouling", "Corrosion products", "Oil films", "Process residues"
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
    industries: ["Refineries", "Chemical Plants", "HVAC", "Food Processing", "Marine"]
  },
  {
    slug: "impact-assessment",
    title: "Operational Impact Assessment",
    subtitle: "Efficiency & Sustainability Analytics",
    shortDescription: "Data-driven analysis for cost & energy savings.",
    description: "Comprehensive evaluation of your current industrial cleaning operations. we analyze chemical usage, waste generation, energy consumption, and labor to provide a roadmap for optimization and cost reduction.",
    icon: "fa-chart-pie",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    problems: [
      "High operational costs", "Excessive chemical waste", "Energy inefficiency", 
      "Poor ESG reporting", "Process bottlenecks", "Regulatory compliance risk"
    ],
    contaminants: [
      "Chemical waste", "Wasted energy", "Inefficient labor hours", "Excessive water usage"
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
    industries: ["Corporate", "Manufacturing Facilities", "Plant Management", "Sustainability Teams"]
  }
];
