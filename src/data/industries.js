export const industries = [
  {
    slug: "automotive",
    title: "Automotive Industry",
    subtitle: "Precision Cleaning for the Future of Mobility",
    description: "High-performance cleaning and surface treatment solutions for automotive manufacturing, from engine components to body-in-white preparation.",
    icon: "fa-car",
    heroImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Removal of high-viscosity lubricants and coolants",
      "Stringent particle count requirements for engine parts",
      "Surface preparation for high-quality paint finishes",
      "Need for high-throughput automated cleaning cycles"
    ],
    solutions: [
      "Automated multi-stage spray wash systems",
      "Bio-remediating manual parts washers for MRO",
      "Anti-spatter coatings for chassis welding",
      "Custom chemical formulations for aluminum degreasing"
    ],
    benefits: [
      "Reduced scrap rates in engine assembly",
      "Zero VOC options for environmental compliance",
      "Increased tool life in machining operations",
      "Consistent surface quality for coating adhesion"
    ],
    applicationAreas: [
      { area: "Engine & Powertrain", description: "Precision degreasing of cylinder heads, blocks, and transmission gears." },
      { area: "Chassis & Body", description: "Anti-spatter protection and surface prep for welding and assembly." },
      { area: "Paint Shop", description: "Final stage cleaning and passivation for perfect paint adhesion." },
      { area: "MRO / Tooling", description: "Eco-friendly cleaning of jigs, fixtures, and maintenance equipment." }
    ],
    standards: ["VDA 19 Part 1 & 2", "ISO 16232", "IATF 16949 Compliance", "REACH & RoHS"],
    featuredProducts: [
      { title: "HTW II Bio", desc: "Automated spray washer for engine components.", img: "/HTW-1200-Max-Eco-1200x1200.jpg" },
      { title: "SafeWeld System", desc: "Anti-spatter for robotic welding cells.", img: "/SafeWeld.jpg" }
    ]
  },
  {
    slug: "cnc-machining",
    title: "CNC & Precision Machining",
    subtitle: "Absolute Purity for Precision Engineering",
    description: "Comprehensive cleaning and fluid management for CNC workshops, ensuring part accuracy and machine longevity through advanced chemistry.",
    icon: "fa-microchip",
    heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Management of metal chips and fine swarf",
      "Bacterial growth in coolant sumps",
      "Tacky residue from specialized cutting fluids",
      "Corrosion of sensitive machined surfaces"
    ],
    solutions: [
      "High-pressure parts washers with filtration",
      "Semi-synthetic, bio-stable cutting fluids",
      "Temporary rust preventives for storage",
      "Machine-side oil and swarf separation systems"
    ],
    benefits: [
      "Extended coolant life and reduced waste",
      "Improved dimensional accuracy of parts",
      "Healthier workshop environment (low odor/mist)",
      "Minimized downtime for machine cleaning"
    ],
    applicationAreas: [
      { area: "Milling & Turning", description: "In-process cleaning and cooling for high-speed machining centers." },
      { area: "Inspection Prep", description: "Removing all oily residues for accurate CMM measurement." },
      { area: "Sump Management", description: "Bio-stabilization and filtration of machine tool fluids." },
      { area: "Chip Processing", description: "Cleaning and degreasing of metal swarf for recycling." }
    ],
    standards: ["ISO 9001:2015", "OSHA HCS 2012", "Environmental ISO 14001", "TRGS 611 Compliance"],
    featuredProducts: [
      { title: "GT Parts Washer", desc: "Bench-top cleaning for machined parts.", img: "/GT Parts Washer.webp" },
      { title: "BioClean Concentrate", desc: "High-performance CNC degreaser.", icon: "fa-flask" }
    ]
  },
  {
    slug: "foundry",
    title: "Foundry & Casting",
    subtitle: "Robust Solutions for Extreme Environments",
    description: "Heavy-duty cleaning and surface protection for foundries, designed to handle extreme heat and intense contamination.",
    icon: "fa-fire",
    heroImage: "https://images.unsplash.com/photo-1534073737927-85f1dfbc0a4a?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Heavy accumulation of burnt-on sand and binders",
      "Thermal stress on cleaning equipment",
      "Large-scale parts requiring immersion cleaning",
      "High volume of solid waste generation"
    ],
    solutions: [
      "High-capacity immersion cleaning tanks",
      "Industrial-strength alkaline degreasers",
      "Heat-resistant surface coatings",
      "Water recycling and sludge management"
    ],
    benefits: [
      "Fast removal of stubborn foundry residues",
      "Extended life for casting moulds and patterns",
      "Improved workplace safety and hygiene",
      "Regulatory compliance for waste discharge"
    ],
    applicationAreas: [
      { area: "Mould Cleaning", description: "Removing release agents and resin buildup from complex patterns." },
      { area: "Core Shop", description: "Sanitizing core boxes and preventing material sticking." },
      { area: "Finishing / Fettling", description: "Heavy degreasing of large castings before machining." },
      { area: "Die Casting", description: "Thermal-stable lubricants and cleaning for high-pressure dies." }
    ],
    standards: ["ISO 9001:2015", "Emissions Standard 42. BImSchV", "Hazardous Waste Directive", "OHSAS 18001"],
    featuredProducts: [
      { title: "HTW II Bio", desc: "Heavy-duty immersion & spray cleaning.", img: "/HTW-1200-Max-Eco-1200x1200.jpg" },
      { title: "CorroShield Coating", desc: "Heat-stable surface protection.", icon: "fa-shield-alt" }
    ]
  },
  {
    slug: "forging",
    title: "Forging & Metal Forming",
    subtitle: "Heavy-Duty Cleaning for Forged Power",
    description: "Specialized cleaning systems for forging operations, focused on removing scale, lubricants, and oxides from heavy metal components.",
    icon: "fa-hammer",
    heroImage: "https://images.unsplash.com/photo-1517420812314-8e84b11733ad?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Removal of graphite-based forging lubricants",
      "High-temperature scale removal (descaling)",
      "Cleaning of large, heavy-duty components",
      "Protection against rapid flash rusting"
    ],
    solutions: [
      "Scale-dissolving chemical baths",
      "Heavy-duty spray washing for large parts",
      "Post-forging passivation systems",
      "Automatic lubricant application systems"
    ],
    benefits: [
      "Superior surface finish of forged parts",
      "Reduced labor for manual descaling",
      "Enhanced corrosion protection after forming",
      "Lowered operational costs through chemical efficiency"
    ],
    applicationAreas: [
      { area: "Hot Forging", description: "Removing carbonized lubricants and thermal oxides." },
      { area: "Cold Forming", description: "Removing heavy forming soaps and phosphate coatings." },
      { area: "Die Maintenance", description: "Cleaning of forging dies to maintain dimensional accuracy." },
      { area: "Heat Treatment Prep", description: "Degreasing parts before quenching or tempering." }
    ],
    standards: ["ISO 9001:2015", "Heat Treatment CQI-9", "Surface Quality DIN EN 10228", "REACH Compliance"],
    featuredProducts: [
      { title: "BioClean Concentrate", desc: "Graphite-removal formulation.", icon: "fa-flask" },
      { title: "AutoPurge System", desc: "Automated die cleaning cycles.", icon: "fa-wind" }
    ]
  },
  {
    slug: "mro-maintenance",
    title: "MRO & Maintenance",
    subtitle: "Reliable Cleaning for Operational Integrity",
    description: "Maintenance, Repair, and Overhaul solutions that ensure equipment reliability and safety through thorough cleaning and inspection preparation.",
    icon: "fa-tools",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Wide variety of contaminants (grease, carbon, rust)",
      "Need for on-site, portable cleaning solutions",
      "Safety requirements for multi-material equipment",
      "Environmental impact of traditional solvents"
    ],
    solutions: [
      "Bio-remediating mobile parts washers",
      "Non-toxic, biodegradable aerosol cleaners",
      "Ultrasonic cleaning for intricate components",
      "Corrosion-inhibiting storage sprays"
    ],
    benefits: [
      "Elimination of hazardous solvent waste",
      "Safer working conditions for technicians",
      "Faster turnaround for equipment maintenance",
      "Compliance with internal sustainability goals"
    ],
    applicationAreas: [
      { area: "Facility Maintenance", description: "General cleaning of production floors and stationary assets." },
      { area: "Component Overhaul", description: "Deep cleaning of motors, gearboxes, and pumps for repair." },
      { area: "Inspection / NDT", description: "Surface prep for Non-Destructive Testing and crack detection." },
      { area: "Fleet Maintenance", description: "Cleaning and protecting mobile industrial assets." }
    ],
    standards: ["OSHA 29 CFR", "EPA Safer Choice", "ISO 45001 (Safety)", "VOC Directive 2004/42/EC"],
    featuredProducts: [
      { title: "GT Parts Washer", desc: "Bio-remediating manual unit.", img: "/GT Parts Washer.webp" },
      { title: "SafeWeld System", desc: "Weld repair and passivation.", img: "/SafeWeld.jpg" }
    ]
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas Industry",
    subtitle: "Extreme Protection for Critical Infrastructure",
    description: "Corrosion control and heavy-duty degreasing for the demanding environments of upstream and downstream oil and gas operations.",
    icon: "fa-oil-can",
    heroImage: "https://images.unsplash.com/photo-1516192523154-051838421871?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Severe corrosion in marine and desert environments",
      "Removal of heavy crude and paraffin deposits",
      "Need for explosion-proof cleaning equipment",
      "Strict offshore environmental regulations"
    ],
    solutions: [
      "High-performance offshore corrosion inhibitors",
      "ATEX-certified automated cleaning units",
      "Eco-safe pipeline cleaning chemicals",
      "Heavy-duty degreasers for drilling equipment"
    ],
    benefits: [
      "Prevention of catastrophic equipment failure",
      "Extended life for subsea and surface assets",
      "Zero-spill chemical delivery systems",
      "Reduced maintenance costs in remote locations"
    ],
    applicationAreas: [
      { area: "Drilling Operations", description: "Cleaning of drill strings, bits, and mud handling systems." },
      { area: "Pipeline Maintenance", description: "Internal pigging chemicals and external corrosion wraps." },
      { area: "Refinery Services", description: "Heat exchanger cleaning and storage tank degreasing." },
      { area: "Offshore Platforms", description: "Salt-spray protection and heavy-duty deck cleaning." }
    ],
    standards: ["NACE / AMPP Standards", "API RP Series", "ATEX / IECEx", "OCNS / CEFAS Category E"],
    featuredProducts: [
      { title: "AutoPurge System", desc: "Pipeline residue management.", icon: "fa-wind" },
      { title: "CorroShield Coating", desc: "Marine-grade rust prevention.", icon: "fa-shield-alt" }
    ]
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Hygienic Purity for Consumer Safety",
    description: "Food-grade cleaning and sanitization solutions that ensure the highest levels of hygiene and compliance with global food safety standards.",
    icon: "fa-utensils",
    heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Risk of bacterial contamination and biofilm",
      "Requirement for NSF/FDA approved chemistry",
      "Intense wash-down procedures (CIP/COP)",
      "Management of organic waste and grease"
    ],
    solutions: [
      "NSF certified lubricants and cleaners",
      "Enzymatic biofilm removal systems",
      "Automated Clean-In-Place (CIP) chemicals",
      "High-foaming sanitation agents"
    ],
    benefits: [
      "Guaranteed food safety and compliance",
      "Reduced water and chemical usage in CIP",
      "Extended shelf life for food products",
      "Protection of brand reputation through hygiene"
    ],
    applicationAreas: [
      { area: "Processing Lines", description: "Sanitizing conveyors, mixers, and filling machinery." },
      { area: "Bottling / Canning", description: "Cleaning of sensitive nozzles and capping equipment." },
      { area: "Cold Storage", description: "Cleaning and mold prevention in refrigerated environments." },
      { area: "Wastewater / Grease Traps", description: "Bio-active treatment of high-BOD effluent." }
    ],
    standards: ["NSF H1 & A1", "FDA 21 CFR", "HACCP Principles", "ISO 22000 (FSMS)"],
    featuredProducts: [
      { title: "BioClean Concentrate", desc: "NSF certified degreaser.", icon: "fa-flask" },
      { title: "GT Parts Washer", desc: "Stainless steel food-grade unit.", img: "/GT Parts Washer.webp" }
    ]
  },
  {
    slug: "textile-industry",
    title: "Textile Industry",
    subtitle: "Clean Operations for High-Speed Weaving",
    description: "Efficient cleaning solutions for textile machinery, focusing on removing lint, oils, and waxes while protecting delicate machine components.",
    icon: "fa-shirt",
    heroImage: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1600",
    challenges: [
      "Accumulation of lint and fiber dust",
      "Removal of knitting and weaving oils",
      "Cleaning of sensitive needles and sinkers",
      "Preventing oil stains on finished fabrics"
    ],
    solutions: [
      "High-evaporation cleaning solvents",
      "Ultrasonic baths for textile machine parts",
      "Antistatic lubricants for fiber handling",
      "Fabric-safe machine degreasers"
    ],
    benefits: [
      "Reduced fire hazard from lint buildup",
      "Lowered rate of fabric rejects and staining",
      "Increased lifespan of weaving equipment",
      "Reduced downtime for scheduled maintenance"
    ],
    applicationAreas: [
      { area: "Spinning & Weaving", description: "Removing lint and wax from high-speed spindles and looms." },
      { area: "Dyeing / Finishing", description: "Cleaning of rollers and tanks between color changes." },
      { area: "Knitting Machines", description: "Precision cleaning of fine-gauge needles and cams." },
      { area: "Sewing / Assembly", description: "Dry lubrication and cleaning of industrial sewing heads." }
    ],
    standards: ["OEKO-TEX Standard 100", "ZDHC Compliance", "ISO 9001:2015", "Bluesign Criteria"],
    featuredProducts: [
      { title: "AutoPurge System", desc: "Dye tank residue removal.", icon: "fa-wind" },
      { title: "HTW II Bio", desc: "Automated loom component washer.", img: "/HTW-1200-Max-Eco-1200x1200.jpg" }
    ]
  }
];
