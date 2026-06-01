export const products = [
  {
    id: "htw-ii-bio",
    category: "Cleaning Systems",
    title: "HTW II - BIO",
    subtitle: "High-Performance Bio-Active Cleaning",
    desc: "The HTW-II Bio stands out from all hot-water parts washers because it is a real all-round talent. It is operated with the Biocircle Liquid L cleaner, which is perfectly matched to the HTW-II Bio. This means not only safe working and a long service life, but also the cleaning of medium to heavy soiling from materials such as steel, stainless steel, plastic, aluminium, zinc-coated surfaces, and non-ferrous metals.",
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
      "HTW-II Bio 800, 1000, 1200, 1500",
      "Degradation of grease and oil by microorganisms",
      "Long cleaner service life due to recirculation",
      "Less cleaner storage capacity required",
      "Less waste disposal",
      "Insulation of the entire housing",
      "HTW-II Bio 800: 2.5 bar operating pressure",
      "HTW-II Bio 1000, 1200, 1500: 5 bar operating pressure"
    ],
    technicalSpecs: [
      { label: "Basket Diameter", value: "800 mm - 1500 mm" },
      { label: "Load Capacity", value: "Up to 500 kg" },
      { label: "Spray Pressure", value: "2.5 - 5 Bar" },
      { label: "Heater Power", value: "9 kW - 18 kW" },
      { label: "Tank Volume", value: "250 Litres" }
    ],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        The HTW-II Bio is engineered for long-term industrial use with a robust stainless steel construction and integrated bio-remediation technology. Each unit is delivered fully assembled, pre-tested, and ready for immediate integration into your production line.
      </p>
      <p class="text-brand-body leading-relaxed mb-6">
        The system is designed for minimal maintenance and includes the patented Biocircle Liquid L recirculation system, ensuring consistent cleaning performance across all operating conditions. Custom configuration and installation support are available upon request.
      </p>
    `,
    recommendedCleaner: { name: "Bio-Circle L Liquid", slug: "biochem-bio-circle-l", desc: "A low-foaming, microorganism-based cleaner for manual and automatic parts cleaning." },
    similarProducts: ["gt-parts-washer", "cb-100", "autopurge-system"],
    icon: "fa-spray-can",
    img: "/htw-ii-bio.jpg",
    slug: "htw-ii-bio",
  },
  {
    id: "htw-ii-max-eco",
    category: "Cleaning Systems",
    title: "HTW - II - Max ECO",
    desc: "Powerful and easy to operate, these hot-water parts washers are designed for efficient single-stage cleaning and degreasing. A rotating basket and high spray pressure ensure optimal cleaning performance with Bio-Chem cleaners. Field of Use: Ideal for maintaining components, workpieces, and motors across automotive and metalworking/CNC industries, suitable for both production and maintenance setups.",
    icon: "fa-leaf",
    img: "/htw-ii-max-eco.jpg",
    slug: "htw-ii-max-eco",
  },
  {
    id: "hp-vingo",
    category: "Cleaning Systems",
    title: "HP VINGO",
    desc: "High-pressure precision cleaning system for complex industrial parts and specialized manufacturing components.",
    icon: "fa-faucet",
    img: "/hp-vingo.jpg",
    slug: "hp-vingo",
  },
  {
    id: "gt-compact",
    category: "Cleaning Systems",
    title: "GT COMPACT",
    desc: "Space-saving parts washer offering industrial-grade cleaning performance in a compact footprint.",
    icon: "fa-compress-arrows-alt",
    slug: "gt-compact",
  },
  {
    id: "gt-max",
    category: "Cleaning Systems",
    title: "GT MAX",
    desc: "Maximum capacity parts washer designed for large-scale industrial components and high-throughput production environments.",
    icon: "fa-expand-arrows-alt",
    slug: "gt-max",
  },
  {
    id: "prolaq-compact",
    category: "Paint Removal Systems",
    title: "PROLAQ COMPACT",
    desc: "Efficient paint removal system for small to medium-sized components, designed for precision and ease of use.",
    icon: "fa-paint-roller",
    slug: "prolaq-compact",
  },
  {
    id: "prolaq-auto",
    category: "Paint Removal Systems",
    title: "PROLAQ AUTO",
    desc: "Automated paint removal system for high-volume production, ensuring consistent results and reduced manual labor.",
    icon: "fa-robot",
    slug: "prolaq-auto",
  },
  {
    id: "rwr",
    category: "Descaling Systems",
    title: "RWR",
    desc: "Pipe and heat exchanger cleaning system designed for efficient removal of scale and industrial deposits.",
    icon: "fa-sync",
    img: "/rwr.jpg",
    slug: "rwr",
  },
  {
    id: "rer-kst",
    category: "Descaling Systems",
    title: "RER-KST",
    desc: "Specialized descaling system for plastic-lined pipes and sensitive cooling circuits.",
    icon: "fa-tools",
    slug: "rer-kst",
  },
  {
    id: "general-cleaners",
    category: "Cleaners",
    title: "General Cleaners",
    desc: "Versatile cleaning solutions for everyday industrial maintenance and surface preparation.",
    extraDesc: "Our general cleaners are formulated to tackle a wide range of industrial soils including oils, greases, and machining residues. Suitable for both ferrous and non-ferrous metals, these solvent-free, VOC-free formulations deliver consistent cleaning performance while ensuring workplace safety and environmental compliance.",
    icon: "fa-broom",
    slug: "general-cleaners",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTCc3F7n8z0csoEBwAiXn7vYD_RbE9rYm9g&s",
    products: ["cb-100", "uno-s", "biochem-power-star-l", "biochem-bio-neutral-cleaner", "biochem-bio-circle-l", "biochem-power-cleaner-db"],
  },
  {
    id: "bio-circle-cleaners",
    category: "Cleaners",
    title: "Bio-circle Cleaners",
    desc: "Eco-friendly, bio-active cleaning agents designed for use with Bio-Circle parts washing systems.",
    extraDesc: "These bio-active formulations harness the power of beneficial microorganisms to continuously break down oils and hydrocarbons during the cleaning process. The result is a self-regenerating cleaning bath that extends fluid life, reduces waste, and lowers operational costs — all while maintaining exceptional cleaning performance.",
    icon: "fa-recycle",
    slug: "bio-circle-cleaners",
    products: ["biochem-bio-circle-l"],
  },
  {
    id: "acidic-cleaners",
    category: "Cleaners",
    title: "Acidic Cleaners",
    desc: "Powerful acidic formulations for removing mineral deposits, rust, and heavy oxidation.",
    extraDesc: "Engineered for heavy-duty descaling and de-rusting applications, our acidic cleaners penetrate and dissolve stubborn inorganic deposits including limescale, rust, and mineral buildup. Ideal for heat exchangers, cooling systems, and metal components requiring deep restoration.",
    icon: "fa-vial",
    slug: "acidic-cleaners",
    products: [],
  },
  {
    id: "finishers",
    category: "Cleaners",
    title: "Finishers",
    desc: "Final-step solutions for surface protection, brightening, and professional-grade finishing.",
    extraDesc: "Our finishers deliver the final touch to your cleaning process, providing surface brightening, passivation, and temporary corrosion protection. These advanced formulations ensure components emerge with a pristine, presentation-ready finish that meets the highest quality standards.",
    icon: "fa-shining",
    slug: "finishers",
    products: [],
  },
  {
    id: "anti-spatters",
    category: "Safeweld",
    title: "Anti-spatters",
    desc: "Advanced anti-spatter solutions to prevent weld dross adhesion and protect workpieces and equipment.",
    extraDesc: "Our anti-spatter formulations create a protective barrier on workpiece surfaces and MIG/TIG nozzles, preventing weld spatter from adhering. This extends consumable life, reduces post-weld cleanup time, and maintains consistent weld quality across production runs.",
    icon: "fa-fire-extinguisher",
    slug: "anti-spatters",
    products: ["safeweld-system"],
  },
  {
    id: "weld-cleaners",
    category: "Safeweld",
    title: "Weld cleaners",
    desc: "Effective cleaning agents for removing heat tint and oxidation from weld seams, particularly on stainless steel.",
    extraDesc: "Specially formulated to remove heat discoloration, oxidation layers, and welding residues from stainless steel and other alloys. Our weld cleaners restore the original surface finish and prepare welds for passivation or further processing without mechanical abrasion.",
    icon: "fa-sparkles",
    slug: "weld-cleaners",
    products: [],
  },
  {
    id: "surface-protectors",
    category: "Safeweld",
    title: "Surface protectors",
    desc: "Protective coatings and treatments to safeguard surfaces from corrosion, scratches, and environmental damage.",
    extraDesc: "Our surface protectors provide a durable, temporary barrier against corrosion, moisture, and mechanical damage during storage, transport, and inter-process handling. Available in film-forming and oil-based variants for different protection requirements and removal preferences.",
    icon: "fa-shield-virus",
    slug: "surface-protectors",
    products: [],
  },
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

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Advanced Technical Performance</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Industrial surfaces often accumulate complex, layered contaminants that resist standard aqueous cleaners. CB 100 is formulated to penetrate and break down the heaviest soiling, including burnt-on grease, smoke residues, soot, rubber residues, bitumen, and wax. Its high-solvency power ensures that even stubborn pastes and lubricants are emulsified and removed, restoring surfaces to their original specification.
      </p>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">The Science of Sustainability</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Unlike standard cleaners that rely on high-VOC solvents, CB 100 utilizes a surfactant-rich formulation derived from renewable raw materials. Its demulsifying properties allow oils and greases to be easily separated from the cleaning fluid. This means the fluid can be recycled and reused multiple times, significantly extending its service life and reducing operational waste. This circular approach to cleaning directly impacts the bottom line by lowering chemical consumption and disposal costs.
      </p>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Seamless Process Integration</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        CB 100 is designed for versatility, making it suitable for both manual and machine use. It can be integrated into conventional parts washers or CLEAN BOX systems without requiring any alterations to existing work processes. It provides exceptional results on stainless steel, steel, and non-ferrous metals, ensuring broad compatibility across your entire component inventory.
      </p>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Industry Applications</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Extensively used in high-precision sectors such as Automotive assembly, Aerospace maintenance, and Tool & Die manufacturing. CB 100 is the preferred solution for pre-cleaning components before high-accuracy quality inspection or final coating applications, where zero-residue surfaces are essential for process integrity.
      </p>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6 uppercase tracking-tight">Occupational Safety & Compliance</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        By being VOC-free and label-free in accordance with the CLP regulation, CB 100 actively contributes to a safer workplace. It eliminates the inhalation risks associated with solvent vapors and reduces the chemical burden on operators. This commitment to 'Clean Blue' technology ensures that industrial growth is built on a foundation of sustainability and worker protection.
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
    similarProducts: ["uno-s", "biochem-power-star-l", "biochem-bio-neutral-cleaner"],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        CB 100 is available in multiple packaging sizes to suit both manual and industrial machine applications:
      </p>
      <ul class="list-disc list-inside text-brand-body leading-relaxed space-y-2 mb-6">
        <li><strong class="text-green">500 ml Spray Can</strong> — Convenient for targeted spot cleaning and small-area applications.</li>
        <li><strong class="text-green">1 Litre Bottle</strong> — Ideal for manual use in maintenance and workshop environments.</li>
        <li><strong class="text-green">5 Litre Canister</strong> — Suitable for medium-volume machine cleaning operations.</li>
        <li><strong class="text-green">20 Litre Drum</strong> — Designed for high-volume industrial parts washers.</li>
        <li><strong class="text-green">200 Litre Barrel</strong> — Bulk supply for dedicated cleaning systems and continuous production lines.</li>
      </ul>
      <p class="text-brand-body leading-relaxed">
        All packaging is recyclable. Larger bulk quantities and custom filling options are available on request.
      </p>
    `,
    labels: ["VOC Free", "Bio-Based", "Clean Blue"],
    icon: "fa-flask",
    img: "https://www.bio-circle.com/lib/uploads/sites/2/2024/09/CB_100_500ml-600x600.jpg",
    slug: "cb-100",
  },
  {
    id: "gt-parts-washer",
    category: "Parts Washers",
    title: "GT Parts Washer Pro",
    desc: "Compact yet powerful bench-top aqueous washer designed for precision machined components. Adjustable spray pressure and temperature control.",
    features: ["Adjustable spray pressure", "Stainless steel tank", "Low water consumption", "Ergonomic lid design"],
    similarProducts: ["htw-ii-bio", "uno-s", "biochem-bio-neutral-cleaner"],
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
    similarProducts: ["biochem-power-star-l", "uno-s", "cb-100"],
    icon: "fa-fire-alt",
    img: "/SafeWeld.jpg",
    slug: "safeweld-system",
  },
  {
    id: "bioclean-concentrate",
    category: "Chemicals",
    title: "BioClean Concentrate",
    desc: "Eco-certified industrial degreaser for ferrous and non-ferrous metals.",
    similarProducts: ["cb-100", "uno-s", "biochem-bio-neutral-cleaner"],
    icon: "fa-flask",
    slug: "bioclean-concentrate",
  },
  {
    id: "autopurge-system",
    category: "Automation",
    title: "AutoPurge System",
    desc: "Automated pipeline purging for zero-residue chemical changeovers.",
    similarProducts: ["htw-ii-bio", "gt-parts-washer"],
    icon: "fa-wind",
    slug: "autopurge-system",
  },
  {
    id: "corroshield-coating",
    category: "Protection",
    title: "CorroShield Coating",
    desc: "Temporary rust-preventive film for storage and inter-process protection.",
    similarProducts: ["bioclean-concentrate", "safeweld-system", "uno-s"],
    icon: "fa-shield-alt",
    slug: "corroshield-coating",
  },
  {
    id: "cooltech-cutting-fluid",
    category: "Fluids",
    title: "CoolTech Cutting Fluid",
    desc: "Semi-synthetic metalworking fluid for high-speed CNC machining.",
    similarProducts: ["bioclean-concentrate", "uno-s", "biochem-power-star-l"],
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
    similarProducts: ["cb-100", "biochem-power-star-l", "biochem-bio-neutral-cleaner"],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        UNO S is supplied in a range of packaging formats for flexible use across industrial settings:
      </p>
      <ul class="list-disc list-inside text-brand-body leading-relaxed space-y-2 mb-6">
        <li><strong class="text-green">500 ml Spray Can</strong> — Quick and easy application for precision cleaning tasks.</li>
        <li><strong class="text-green">1 Litre Bottle</strong> — Standard format for manual cleaning stations.</li>
        <li><strong class="text-green">5 Litre Canister</strong> — Economical choice for medium-volume usage.</li>
        <li><strong class="text-green">20 Litre Drum</strong> — For high-consumption cleaning operations.</li>
        <li><strong class="text-green">200 Litre Barrel</strong> — Bulk supply for automated cleaning systems.</li>
      </ul>
    `,
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
    similarProducts: ["cb-100", "uno-s", "biochem-bio-circle-l"],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Power Star L is available in the following packaging sizes:
      </p>
      <ul class="list-disc list-inside text-brand-body leading-relaxed space-y-2 mb-6">
        <li><strong class="text-green">1 Litre Bottle</strong> — For low-volume or trial use.</li>
        <li><strong class="text-green">5 Litre Canister</strong> — Standard size for regular cleaning operations.</li>
        <li><strong class="text-green">20 Litre Drum</strong> — Suitable for medium to high-volume applications.</li>
        <li><strong class="text-green">200 Litre Barrel</strong> — Bulk supply for continuous production.</li>
        <li><strong class="text-green">1000 Litre IBC</strong> — Large-volume intermediate bulk container for automated dosing systems.</li>
      </ul>
    `,
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
    similarProducts: ["cb-100", "uno-s", "biochem-bio-circle-l"],
    labels: ["Neutral pH", "Bio-Based"],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Bio Neutral Cleaner is supplied in the following formats:
      </p>
      <ul class="list-disc list-inside text-brand-body leading-relaxed space-y-2 mb-6">
        <li><strong class="text-green">1 Litre Bottle</strong> — Convenient for manual cleaning stations.</li>
        <li><strong class="text-green">5 Litre Canister</strong> — Ideal for regular maintenance operations.</li>
        <li><strong class="text-green">20 Litre Drum</strong> — Designed for high-volume usage.</li>
        <li><strong class="text-green">200 Litre Barrel</strong> — Bulk supply for centralized cleaning systems.</li>
      </ul>
    `,
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
    similarProducts: ["cb-100", "biochem-power-star-l", "biochem-bio-neutral-cleaner"],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Bio Circle L is available in the following sizes:
      </p>
      <ul class="list-disc list-inside text-brand-body leading-relaxed space-y-2 mb-6">
        <li><strong class="text-green">1 Litre Bottle</strong> — Suitable for low-volume and trial applications.</li>
        <li><strong class="text-green">5 Litre Canister</strong> — Standard size for regular use.</li>
        <li><strong class="text-green">20 Litre Drum</strong> — For medium to high-volume cleaning systems.</li>
        <li><strong class="text-green">200 Litre Barrel</strong> — Bulk supply for continuous operation.</li>
      </ul>
    `,
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
    similarProducts: ["cb-100", "biochem-power-star-l", "uno-s"],
    labels: ["Dual Function", "Efficient"],
    packaging: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Biochem Power Cleaner DB is offered in the following packaging options:
      </p>
      <ul class="list-disc list-inside text-brand-body leading-relaxed space-y-2 mb-6">
        <li><strong class="text-green">1 Litre Bottle</strong> — For manual application and small-scale use.</li>
        <li><strong class="text-green">5 Litre Canister</strong> — Standard option for regular cleaning tasks.</li>
        <li><strong class="text-green">20 Litre Drum</strong> — Designed for high-demand cleaning operations.</li>
        <li><strong class="text-green">200 Litre Barrel</strong> — Bulk supply for automated systems and production lines.</li>
      </ul>
    `,
    icon: "fa-flask",
    img: "/biochem-power-cleaner-db.jpg",
    slug: "biochem-power-cleaner-db",
  },
];
