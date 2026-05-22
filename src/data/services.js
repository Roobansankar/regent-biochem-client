export const services = [
  {
    slug: "pipeline-cleaning-solutions",
    title: "Pipeline Cleaning Solutions",
    subtitle: "Advanced Internal Maintenance",
    shortDescription: "Effective cleaning of internal circulation systems like pipelines and heat exchangers without dismantling.",
    description: "The RWR (Reverse Water Recovery) System provides advanced internal cleaning for pipelines and heat exchangers without the need for dismantling. Using heated circulation and controlled fluid dynamics, we effectively remove stubborn scale and deposits to restore thermal efficiency and hydraulic integrity. Our specialized service ensures peak system performance, reduces energy consumption, and extends the operational life of your critical industrial infrastructure.",
    icon: "fa-faucet",
    heroImage: "https://images.squarespace-cdn.com/content/v1/6495ace4409a2a506cc4b8a8/dcc34794-6990-4caf-b018-0a6cd1bdb4d2/pipeline%2Bcleaning%2Bservices.jpg",
    problems: [
      {
        title: "Limescale & Mineral Deposits",
        description: "Hard water minerals like calcium and magnesium create a rock-hard layer inside pipes, acting as an insulator that drastically reduces heat transfer efficiency."
      },
      {
        title: "Internal Corrosion & Rust",
        description: "Oxidation of metal surfaces leads to 'red water', pipe thinning, and eventual leaks, often caused by poor water chemistry or oxygen ingress."
      },
      {
        title: "Thermal Oil Cracking",
        description: "In high-temperature systems, oils can thermally degrade (crack), forming carbonized residues and thick sludge that block narrow cooling channels."
      },
      {
        title: "Reduced Flow & Pressure Drop",
        description: "As deposits narrow the internal diameter of pipelines, pumps must work harder to maintain flow, increasing energy costs and risk of pump failure."
      },
      {
        title: "Bio-Fouling & Slime",
        description: "Microbiological growth can create sticky films that trap other particles, leading to rapid blockages and potential health risks like Legionella."
      },
      {
        title: "Process Contamination",
        description: "Cross-contamination from leaking heat exchangers or process residues can compromise the entire circulation loop, affecting product quality."
      }
    ],
    contaminants: [
      {
        title: "Inorganic Scales",
        description: "Calcium Carbonate, Magnesium Silicate, and Phosphate scales typically found in open and closed cooling loops."
      },
      {
        title: "Metallic Oxides",
        description: "Iron oxide (rust), copper oxides, and magnetite that circulate as abrasive particles or settle as heavy sludge."
      },
      {
        title: "Degraded Oils",
        description: "Carbonized oil residues, 'varnish', and thick grease from thermal fluid systems or mechanical seals."
      },
      {
        title: "Organic Bio-matter",
        description: "Algae, bacteria, and extracellular polymeric substances (EPS) that form resilient biofilms."
      }
    ],
    process: [
      { step: "01", title: "Consultation", description: "Initial discussion to understand the system and issues." },
      { step: "02", title: "System Assessment", description: "Detailed evaluation of pipe size, material, and contamination." },
      { step: "03", title: "Solution Selection", description: "Choosing the right cleaning chemistry based on system material." },
      { step: "04", title: "Execution", description: "Heated circulation cleaning without dismantling." },
      { step: "05", title: "Performance Review", description: "Verifying flow restoration and system cleanliness." },
      { step: "06", title: "Follow-up", description: "Providing ongoing maintenance support and documentation." }
    ],
    infoNeeded: [
      "Type of system to be cleaned", "Pipe/Heat exchanger size", "Material of the system", 
      "Type of contamination", "Current cleaning method", "Photos if available", 
      "Downtime availability", "Required cleaning frequency", "Site location", "Contact details"
    ],
    industries: ["Automotive", "CNC", "Fabrication", "MRO", "Oil and Gas", "Food", "Textile"],
    keyFeatures: [
      {
        title: "No Dismantling Required",
        description: "Our RWR system connects directly to your existing infrastructure, eliminating the need for complex and risky disassembly of pipes or heat exchangers.",
        icon: "fa-tools"
      },
      {
        title: "Advanced Heated Circulation",
        description: "By heating the cleaning medium to optimal temperatures, we significantly accelerate the chemical breakdown of stubborn scale and carbonized deposits.",
        icon: "fa-fire"
      },
      {
        title: "Material-Safe Chemistry",
        description: "We use laboratory-verified cleaning agents specifically matched to your system's metallurgy to ensure zero damage to internal surfaces.",
        icon: "fa-shield-alt"
      },
      {
        title: "Real-time Flow Optimization",
        description: "Continuous monitoring of flow rates and pressure allows us to verify the restoration of system performance as the cleaning progresses.",
        icon: "fa-chart-line"
      }
    ]
  },
  {
    slug: "cooling-tower-cleaning",
    title: "Cooling Tower Cleaning",
    subtitle: "Thermal Efficiency & Safety",
    shortDescription: "Professional maintenance to restore heat transfer and ensure regulatory compliance.",
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
    slug: "mould-injection-cleaning",
    title: "Mould & Injection Cleaning",
    subtitle: "Precision Tooling Maintenance",
    shortDescription: "Non-abrasive cleaning to remove plastic residues and protect high-polish mould finishes.",
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
    slug: "heat-exchanger-cleaning",
    title: "Heat Exchanger Cleaning",
    subtitle: "Restoring Thermal Performance",
    shortDescription: "Chemical descaling and cleaning for all types of heat exchangers to reduce energy costs.",
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
    slug: "operational-impact-assessment",
    title: "Operational Impact Assessment",
    subtitle: "Efficiency & Sustainability Analytics",
    shortDescription: "Data-driven analysis of your cleaning processes to identify cost and energy savings.",
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
