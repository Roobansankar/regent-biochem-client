export const products = [
  {
  id: "cb-100",
  category: "Industrial Cleaner",
  title: "CB 100",
  subtitle: "Cold Cleaner Alternative for Heavy Industrial Soiling",
  desc: "CB 100 is a powerful cold cleaner alternative designed to remove heavy soiling from industrial surfaces. Suitable for cleaning stainless steel, steel, and non-ferrous metals while supporting safer and more sustainable cleaning operations.",
  fullDescription: `
    <p class="text-lg text-brand-body leading-relaxed mb-6">
      CB 100 is engineered for the most demanding industrial cleaning challenges. As a next-generation cold cleaner alternative, it removes the heaviest soiling — including burnt-on grease, oil, smoke, soot, rubber residues, bitumen, and wax residues — without relying on hazardous solvent-based chemistry.
    </p>

    <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Is This Product Right for You?</h2>
    <p class="text-brand-body leading-relaxed mb-6">
      CB 100 is the ideal choice if your operations require regular maintenance cleaning, removal of oil and grease, cleaning of heavy contamination, manual cleaning, machine cleaning, or pre-cleaning support. Its versatility across cleaning methods makes it a go-to solution for a wide range of industrial applications.
    </p>

    <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Application</h2>
    <p class="text-brand-body leading-relaxed mb-6">
      CB 100 is suited for manual cleaning, machine cleaning, and pre-cleaning in CLEAN BOX systems, parts washing, degreasing, and removal of burnt-on grease, oil, soot, smoke residues, rubber residues, bitumen, wax residues, and pastes.
    </p>

    <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Sustainable by Design</h2>
    <p class="text-brand-body leading-relaxed mb-6">
      Formulated from renewable raw materials, CB 100 is VOC-free and label-free in accordance with CLP regulations. Its long service life is made possible by recyclable and demulsifying properties, reducing total consumption and waste. It actively increases occupational safety and protects the environment without compromising cleaning performance.
    </p>
  `,
  features: [
    "Removes burnt-on grease, oil, smoke, soot, rubber residues, bitumen & wax residues",
    "Cleans stainless steel, steel, and non-ferrous metals",
    "Long service life via recyclable and demulsifying properties",
    "Compatible with conventional parts washers — no process changes needed",
    "VOC- and label-free per CLP regulation for occupational safety",
    "Suitable for manual and machine use across diverse industrial settings"
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
    "Biochem Bio Circle L liquid",
    "Biochem Power Cleaner DB"
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
];
