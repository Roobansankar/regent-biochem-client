export const products = [
  {
  id: "cb-100",
  category: "Industrial Cleaner",
  title: "CB 100",
  subtitle: "Powerful Cold Cleaner Alternative",
  desc: "CB 100 is a powerful cold cleaner alternative designed to remove heavy soiling from industrial surfaces. It is suitable for cleaning stainless steel, steel and non-ferrous metals while supporting safer and more sustainable cleaning.",
  fullDescription: `
    <p class="text-lg text-brand-body leading-relaxed mb-6">
      CB 100 represents a significant shift in industrial maintenance, offering a high-performance alternative to traditional solvent-based cold cleaners. Specifically engineered to address the heavy-duty cleaning requirements of modern manufacturing, it bridges the gap between aggressive chemical action and environmental responsibility.
    </p>

    <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">The Chemistry of Cold Cleaning</h2>
    <p class="text-brand-body leading-relaxed mb-6">
      Unlike standard cleaners that rely on high-VOC solvents, CB 100 utilizes a water-based, surfactant-rich formulation that penetrates the molecular structure of the heaviest industrial soils. It is particularly effective against burnt-on grease, bitumen, and bitumen residues, which are traditionally difficult to remove without harsh chemicals. Its demulsifying properties allow oils and greases to be easily separated from the cleaning fluid, enabling the fluid to be recycled and reused, thus significantly extending its service life and reducing operational waste.
    </p>

    <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Seamless Process Integration</h2>
    <p class="text-brand-body leading-relaxed mb-6">
      One of the core advantages of CB 100 is its compatibility with existing industrial infrastructure. It is designed for use in conventional parts washers and CLEAN BOX systems, allowing facilities to upgrade their safety standards without altering established work processes. Whether applied manually or through automated machine processes, it maintains consistent efficacy across stainless steel, steel, and non-ferrous alloys.
    </p>

    <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Occupational Safety & Compliance</h2>
    <p class="text-brand-body leading-relaxed mb-6">
      By being VOC-free and label-free in accordance with the CLP regulation, CB 100 actively contributes to a safer workplace. It eliminates the inhalation risks associated with solvent vapors and protects operators from skin-sensitizing agents found in traditional cleaners. This focus on "Clean Blue" technology ensures that your growth is built on a foundation of sustainability and worker protection.
    </p>
  `,
  features: [
    "Removes the heaviest soiling such as burnt-on grease, oil, smoke, soot, rubber residues, bitumen and wax residues as well as pastes",
    "Cleans stainless steel, steel and non-ferrous metals",
    "Long service life thanks to recyclable and demulsifying properties",
    "Suitable for conventional parts washers, enabling unaltered work processes",
    "VOC- and label-free in accordance with the CLP regulation; increases occupational safety and protects the environment",
    "Suitable for manual and machine use"
  ],
  technicalSpecs: [
    { label: "Product Type", value: "Cold Cleaner Alternative" },
    { label: "VOC Content", value: "VOC-Free" },
    { label: "Base Materials", value: "Renewable Raw Materials" },
    { label: "Foam Profile", value: "Low-Foaming" },
    { label: "Residue", value: "Residue-Free & Water-Rinsable" },
    { label: "Metal Compatibility", value: "Stainless Steel, Steel, Non-Ferrous" },
    { label: "Use Modes", value: "Manual & Machine Use" },
    { label: "Special Approvals", value: "Suitable for Food Industry Areas" }
  ],
  recommendedWith: "MAX ECO",
  similarProducts: [
    "UNO S",
    "Biochem Power Star L",
    "Biochem Bio Neutral Cleaner",
  ],
  labels: ["VOC Free", "Bio-Based", "Clean Blue"],
  icon: "fa-flask",
  img: "/cb-100.jpg",
  slug: "cb-100",
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
  {
    id: "uno-s",
    category: "Industrial Cleaner",
    title: "UNO S",
    subtitle: "Solvent-Free Industrial Cleaner",
    desc: "Powerful solvent-free cleaner for precision machined components and assembly areas. Effective on ferrous and non-ferrous metals.",
    fullDescription: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        UNO S is a next-generation solvent-free industrial cleaner engineered for demanding manufacturing environments. It delivers superior cleaning performance on precision components while maintaining a safe, VOC-free workspace.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Superior Cleaning Performance</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Advanced surfactant technology penetrates and removes light to medium soiling, oils, and machining residues without harsh solvents.
      </p>
    `,
    features: [
      "Solvent-free formulation",
      "Compatible with stainless steel and aluminum",
      "Efficient on light to medium soiling",
      "Low foam profile",
      "Safe for precision assembly areas",
      "Environmentally responsible formula"
    ],
    technicalSpecs: [
      { label: "Product Type", value: "Solvent-Free Cleaner" },
      { label: "VOC Content", value: "VOC-Free" },
      { label: "Foam Profile", value: "Low-Foaming" },
      { label: "Metal Compatibility", value: "Stainless Steel, Aluminum, Non-Ferrous" },
      { label: "Use Modes", value: "Manual & Machine Use" }
    ],
    similarProducts: ["CB 100", "Biochem Power Star L"],
    labels: ["VOC Free", "Bio-Based"],
    icon: "fa-flask",
    img: "/uno-s.jpg",
    slug: "uno-s",
  },
  {
    id: "biochem-power-star-l",
    category: "Industrial Cleaner",
    title: "Biochem Power Star L",
    subtitle: "High-Performance Alkaline Cleaner",
    desc: "Concentrated alkaline cleaning solution for heavy-duty degreasing of ferrous and non-ferrous metals in industrial applications.",
    fullDescription: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Power Star L is a powerful alkaline cleaner formulated for intensive industrial cleaning operations. Its concentrated formula offers exceptional value and performance in high-volume applications.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Heavy-Duty Degreasing</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Engineered to tackle stubborn grease, oil films, and industrial contaminants on production components and machinery.
      </p>
    `,
    features: [
      "Concentrated alkaline formula",
      "Heavy-duty degreasing power",
      "Economic concentrate format",
      "Effective on ferrous and non-ferrous metals",
      "Suitable for immersion and spray application",
      "Excellent water-rinsability"
    ],
    technicalSpecs: [
      { label: "Product Type", value: "Alkaline Cleaner Concentrate" },
      { label: "pH Level", value: "pH 12-13" },
      { label: "Concentrate Ratio", value: "1:5 to 1:20" },
      { label: "Application", value: "Immersion & Spray" },
      { label: "Use Modes", value: "Machine Use" }
    ],
    similarProducts: ["CB 100", "UNO S"],
    labels: ["Concentrate", "Efficient"],
    icon: "fa-flask",
    img: "/biochem-power-star-l.jpg",
    slug: "biochem-power-star-l",
  },
  {
    id: "biochem-bio-neutral-cleaner",
    category: "Industrial Cleaner",
    title: "Biochem Bio Neutral Cleaner",
    subtitle: "pH-Neutral Universal Cleaner",
    desc: "Versatile pH-neutral cleaner for sensitive surfaces and general maintenance. Safe on all common industrial metals and coatings.",
    fullDescription: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Bio Neutral Cleaner offers a balanced approach to industrial cleaning. Its neutral pH makes it ideal for sensitive surfaces while maintaining strong cleaning action on everyday soils.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Versatile and Safe</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Perfect for facilities handling mixed materials or precision components where aggressive chemistry could cause damage.
      </p>
    `,
    features: [
      "pH-neutral formulation",
      "Safe on painted and coated surfaces",
      "Universal compatibility",
      "Effective on light to medium soils",
      "Suitable for all application methods",
      "Bio-based formula"
    ],
    technicalSpecs: [
      { label: "Product Type", value: "Universal Neutral Cleaner" },
      { label: "pH Level", value: "pH 6.5-7.5" },
      { label: "Base", value: "Bio-Based" },
      { label: "Application", value: "Universal" },
      { label: "Metal Safe", value: "All Common Metals" }
    ],
    similarProducts: ["CB 100", "UNO S"],
    labels: ["Neutral pH", "Bio-Based"],
    icon: "fa-flask",
    img: "/biochem-bio-neutral-cleaner.jpg",
    slug: "biochem-bio-neutral-cleaner",
  },
  {
    id: "biochem-bio-circle-l",
    category: "Industrial Cleaner",
    title: "Biochem Bio Circle L Liquid",
    subtitle: "Circular Economy Cleaning Concentrate",
    desc: "Sustainably-formulated liquid cleaner designed for maximum reusability and minimal waste in industrial cleaning cycles.",
    fullDescription: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Bio Circle L represents our commitment to circular manufacturing principles. This innovative liquid concentrate is engineered to maximize service life and recyclability while delivering consistent cleaning performance.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Sustainable Cleaning Science</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Demulsifying technology enables easy separation of oils from the cleaning medium, extending fluid life and reducing disposal costs significantly.
      </p>
    `,
    features: [
      "Extended service life through demulsification",
      "Recyclable cleaning medium",
      "Reduced waste generation",
      "High cleaning efficiency",
      "Cost-effective concentrate format",
      "Sustainable chemical profile"
    ],
    technicalSpecs: [
      { label: "Product Type", value: "Demulsifying Cleaner Concentrate" },
      { label: "Recyclability", value: "Up to 20+ Cycles" },
      { label: "Base", value: "Renewable Resources" },
      { label: "Waste Reduction", value: "Significantly Reduced" },
      { label: "Application", value: "Immersion Systems" }
    ],
    similarProducts: ["CB 100", "Biochem Power Star L"],
    labels: ["Recyclable", "Sustainable"],
    icon: "fa-flask",
    img: "/biochem-bio-circle-l.jpg",
    slug: "biochem-bio-circle-l",
  },
  {
    id: "biochem-power-cleaner-db",
    category: "Industrial Cleaner",
    title: "Biochem Power Cleaner DB",
    subtitle: "Dual-Action Degreaser & Brightener",
    desc: "Advanced dual-function cleaner that removes heavy soils while brightening and restoring metal finishes in a single step.",
    fullDescription: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Power Cleaner DB combines aggressive degreasing action with metal brightening chemistry. This dual-action formula streamlines manufacturing operations by consolidating two processes into one efficient step.
      </p>
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Two-in-One Efficiency</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Remove stubborn grease and simultaneously restore bright metal finishes, reducing process time and chemical inventory requirements.
      </p>
    `,
    features: [
      "Dual degreasing and brightening action",
      "Removes heavy soiling effectively",
      "Restores metal finish quality",
      "Single-step process efficiency",
      "Compatible with automated systems",
      "Reduced process complexity"
    ],
    technicalSpecs: [
      { label: "Product Type", value: "Dual-Action Cleaner" },
      { label: "Function", value: "Degrease & Brighten" },
      { label: "Efficiency", value: "Two-In-One Process" },
      { label: "Application", value: "Immersion & Spray" },
      { label: "Metal Types", value: "Ferrous & Non-Ferrous" }
    ],
    similarProducts: ["CB 100", "Biochem Power Star L"],
    labels: ["Dual Function", "Efficient"],
    icon: "fa-flask",
    img: "/biochem-power-cleaner-db.jpg",
    slug: "biochem-power-cleaner-db",
  },
];
