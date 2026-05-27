export const products = [
  {
    id: "htw-ii-bio",
    category: "Cleaning Systems",
    title: "HTW II Bio Washer",
    subtitle: "High-Performance Bio-Active Cleaning",
    desc: "The HTW II Bio is a high-performance, single-stage spray cleaning system designed for the most demanding industrial environments. Utilizing advanced bio-remediation technology, it effectively removes oils, greases, and heavy industrial contaminants from precision-engineered components.",
    fullDescription: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        The HTW II Bio Washer represents the pinnacle of sustainable industrial cleaning. Developed for high-throughput production lines, this system eliminates the need for hazardous solvent-based cleaning, replacing it with a safe, aqueous-based process enhanced by bio-active microorganisms.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">The Science of Bio-Remediation</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        At the heart of the HTW II Bio is our proprietary bio-remediation process. As the system cleans parts, the resulting oil and grease are washed into the main tank. Here, specialized microorganisms 'eat' these hydrocarbons, breaking them down into harmless water and CO2. This self-cleaning capability allows the cleaning fluid to remain effective for months, significantly reducing waste disposal costs and environmental impact.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Precision Engineering</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Equipped with a heavy-duty rotating basket and a high-pressure pump system, the HTW II Bio delivers consistent, repeatable results. The system is constructed from high-grade stainless steel to ensure longevity in corrosive environments. The intuitive control interface allows operators to precisely manage temperature and wash cycles, ensuring optimal performance for every component type.
      </p>
    `,
    features: [
      "Oxygen membrane compressor for fluid aeration",
      "Bio-active cleaner compatibility for self-cleaning fluid",
      "Continuous duty rated for 24/7 operations",
      "Single-stage precision spray with rotating basket",
      "High-grade stainless steel construction",
      "Integrated filtration for large particulate removal"
    ],
    technicalSpecs: [
      { label: "Basket Diameter", value: "800 mm - 1200 mm" },
      { label: "Load Capacity", value: "Up to 500 kg" },
      { label: "Spray Pressure", value: "4.5 Bar" },
      { label: "Heater Power", value: "9 kW - 18 kW" },
      { label: "Tank Volume", value: "250 Litres" }
    ],
    icon: "fa-spray-can",
    img: "/HTW-1200-Max-Eco-1200x1200.jpg",
    slug: "htw-ii-bio",
  },
  {
    id: "gt-parts-washer",
    category: "Parts Washers",
    title: "GT Parts Washer Pro",
    desc: "Compact yet powerful bench-top aqueous washer designed for precision machined components. Adjustable spray pressure and temperature control.",
    features: ["Adjustable spray pressure", "Stainless steel tank", "Low water consumption", "Ergonomic lid design"],
    icon: "fa-industry",
    img: "/GT Parts Washer.webp",
    slug: "gt-parts-washer",
  },
  {
    id: "safeweld-system",
    category: "Welding",
    title: "SafeWeld Anti-Spatter",
    desc: "Anti-spatter, weld cleaning and passivation system that extends tool life and consistently elevates weld quality across production.",
    features: [
      "Water-based formula",
      "Anti-spatter protection",
      "Passivation capability",
      "Compatible with all MIG/TIG setups",
    ],
    icon: "fa-fire-alt",
    img: "/SafeWeld.jpg",
    slug: "safeweld-system",
  },
  {
    id: "bioclean-concentrate",
    category: "Chemicals",
    title: "BioClean Concentrate",
    desc: "Eco-certified industrial degreaser for ferrous and non-ferrous metals.",
    icon: "fa-flask",
    slug: "bioclean-concentrate",
  },
  {
    id: "autopurge-system",
    category: "Automation",
    title: "AutoPurge System",
    desc: "Automated pipeline purging for zero-residue chemical changeovers.",
    icon: "fa-wind",
    slug: "autopurge-system",
  },
  {
    id: "corroshield-coating",
    category: "Protection",
    title: "CorroShield Coating",
    desc: "Temporary rust-preventive film for storage and inter-process protection.",
    icon: "fa-shield-alt",
    slug: "corroshield-coating",
  },
  {
    id: "cooltech-cutting-fluid",
    category: "Fluids",
    title: "CoolTech Cutting Fluid",
    desc: "Semi-synthetic metalworking fluid for high-speed CNC machining.",
    icon: "fa-tint",
    slug: "cooltech-cutting-fluid",
  },
];
