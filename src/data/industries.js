export const industries = [
  {
    slug: "automotive",
    title: "Automotive Industry",
    description: "The automotive industry in India is one of the country’s major manufacturing sectors, covering two-wheelers, passenger vehicles, commercial vehicles, electric vehicles, and a large network of auto component manufacturers. Automotive manufacturing and maintenance involve parts, tools, engines, fixtures, moulds, and components that often get contaminated with oil, grease, coolant residues, dust, fingerprints, grinding dust, release agents, and welding residues. We support automotive industries with cleaning, degreasing, rust removal, surface preparation, corrosion protection, and maintenance solutions that help keep components cleaner, improve production quality, reduce manual cleaning effort, and support smoother operations.",
    icon: "fa-car",
    heroImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1600",
    handles: [
      "Vehicle parts", "Automotive components", "Engines & Motor parts", "Cylinder heads", 
      "Spindles", "Tools & Moulds", "Fixtures", "Trays & Carrier racks", "Welding fixtures"
    ],
    commonChallenges: [
      {
        category: "Cleaning",
        icon: "fa-broom",
        challenges: [
          "Oil and grease contamination", "Lubricant residues", "Dust & Fingerprints", 
          "Abrasion & Grinding dust", "Release agents", "Hardened deposits", "Machining residues"
        ]
      },
      {
        category: "Welding",
        icon: "fa-bolt",
        challenges: [
          "Welding release agent residues", "Burnt marks", "Heat marks", "Welding-related deposits"
        ]
      }
    ],
    applications: [
      "Cleaning of tools and components", "Maintenance cleaning", "Pre-cleaning before quality inspection", 
      "Degreasing before painting/coating/bonding", "Cleaning of engine and motor parts", 
      "Cleaning of cylinder heads", "Cleaning of spindles", "Cleaning of trays & carrier racks"
    ],
    howWeWork: [
      "Consultation", "Assessment", "Solution Planning", "Trial & Evaluation", "Performance Review", "Follow-up Support"
    ],
    caseStudies: [
      { title: "85% Reduction in Solvent Waste for Automotive Assembly", link: "/case-studies" }
    ],
    standards: ["VDA 19 Part 1 & 2", "ISO 16232", "IATF 16949 Compliance", "REACH & RoHS"]
  },
  {
    slug: "cnc-machining",
    title: "CNC & Precision Machining",
    description: "The CNC machining sector demands absolute purity to maintain tolerances and surface finishes. We provide comprehensive cleaning and fluid management for CNC workshops, ensuring part accuracy and machine longevity through advanced chemistry and specialized filtration systems.",
    icon: "fa-microchip",
    heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600",
    handles: [
      "Machined components", "Precision gears", "Valves & Manifolds", "Hydraulic parts", 
      "Threaded fasteners", "Bearing housings", "Aerospace components", "Electronic housings"
    ],
    commonChallenges: [
      {
        category: "Technical",
        icon: "fa-cogs",
        challenges: [
          "Management of metal chips and fine swarf", "Bacterial growth in coolant sumps", 
          "Tacky residue from specialized cutting fluids", "Corrosion of sensitive surfaces"
        ]
      },
      {
        category: "Quality",
        icon: "fa-check-double",
        challenges: [
          "Strict particle count requirements", "Surface stain prevention", "Oxidation during storage"
        ]
      }
    ],
    applications: [
      "In-process cleaning and cooling", "Removing oily residues for CMM inspection", 
      "Bio-stabilization of machine tool fluids", "Cleaning metal swarf for recycling", 
      "Temporary rust prevention for shipping"
    ],
    howWeWork: [
      "Consultation", "Assessment", "Solution Planning", "Trial & Evaluation", "Performance Review", "Follow-up Support"
    ],
    caseStudies: [
      { title: "Aerospace-Grade Precision Cleaning with Zero Rejects", link: "/case-studies" }
    ],
    standards: ["ISO 9001:2015", "OSHA HCS 2012", "Environmental ISO 14001", "TRGS 611 Compliance"]
  },
  {
    slug: "foundry",
    title: "Foundry & Casting",
    description: "Foundry operations face extreme environments with intense heat and heavy contamination. Our heavy-duty cleaning and surface protection solutions are designed to handle burnt-on sand, binders, and release agents, ensuring the longevity of patterns and moulds.",
    icon: "fa-fire",
    heroImage: "https://images.unsplash.com/photo-1534073737927-85f1dfbc0a4a?auto=format&fit=crop&q=80&w=1600",
    handles: [
      "Casting moulds", "Sand cores", "Patterns", "Large industrial castings", 
      "Die casting dies", "Pouring ladles", "Shot blast equipment", "Conveyor systems"
    ],
    commonChallenges: [
      {
        category: "Contamination",
        icon: "fa-vial",
        challenges: [
          "Heavy accumulation of burnt-on sand", "Carbonized resin binders", "Stubborn release agents"
        ]
      },
      {
        category: "Operational",
        icon: "fa-industry",
        challenges: [
          "Thermal stress on equipment", "Large-scale parts handling", "High volume of solid waste"
        ]
      }
    ],
    applications: [
      "Mould and pattern cleaning", "Sanitizing core boxes", "Heavy degreasing of large castings", 
      "Thermal-stable die lubrication", "Sludge management in wash tanks"
    ],
    howWeWork: [
      "Consultation", "Assessment", "Solution Planning", "Trial & Evaluation", "Performance Review", "Follow-up Support"
    ],
    caseStudies: [
      { title: "Automating Fluid Health in Heavy Metal Forging", link: "/case-studies" }
    ],
    standards: ["ISO 9001:2015", "Emissions Standard 42. BImSchV", "Hazardous Waste Directive", "OHSAS 18001"]
  },
  {
    slug: "mro-maintenance",
    title: "MRO & Maintenance",
    description: "Maintenance, Repair, and Overhaul (MRO) services are critical for operational integrity. We provide non-toxic, biodegradable cleaning systems that replace hazardous solvents, making workshops safer and more efficient for technicians across all industrial sectors.",
    icon: "fa-tools",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600",
    handles: [
      "Motors & Gearboxes", "Pumps & Valves", "Jigs & Fixtures", "Maintenance tools", 
      "Mobile industrial assets", "Shop floor equipment", "Safety gear", "Forklift components"
    ],
    commonChallenges: [
      {
        category: "Diversity",
        icon: "fa-layer-group",
        challenges: [
          "Wide variety of contaminants (grease, carbon, rust)", "Multiple base materials (metals, polymers)"
        ]
      },
      {
        category: "Environment",
        icon: "fa-leaf",
        challenges: [
          "Need for portable cleaning solutions", "Strict safety requirements for technicians", "Waste disposal costs"
        ]
      }
    ],
    applications: [
      "General facility maintenance", "Deep cleaning for repair and overhaul", 
      "Surface prep for Non-Destructive Testing (NDT)", "Corrosion protection for stored spares"
    ],
    howWeWork: [
      "Consultation", "Assessment", "Solution Planning", "Trial & Evaluation", "Performance Review", "Follow-up Support"
    ],
    caseStudies: [
      { title: "85% Reduction in Solvent Waste for Automotive Assembly", link: "/case-studies" }
    ],
    standards: ["OSHA 29 CFR", "EPA Safer Choice", "ISO 45001 (Safety)", "VOC Directive 2004/42/EC"]
  }
];
