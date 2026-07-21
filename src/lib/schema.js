export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": "https://bio-chem.in/#organization",
  name: "Regent Bio-Chem India Pvt. Ltd.",
  url: "https://bio-chem.in",
  logo: "https://bio-chem.in/logo-header.webp",
  image: "https://bio-chem.in/hero.webp",
  description: "Advanced Industrial Cleaning & Surface Technology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24, Paari Nagar, Sungam Bypass Road",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641045",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9843406642",
      contactType: "customer service",
      email: "info@bio-chem.in",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/regent-biochem/",
    "https://youtube.com/@regentbio-chem?si=yOEOWQuYKA7JCwUa",
    "https://www.facebook.com/profile.php?id=61591484781451",
    "https://www.instagram.com/regent_biochem/",
  ],
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION_SCHEMA,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bio-chem.in/#website",
    url: "https://bio-chem.in",
    name: "Regent Bio-Chem India",
    publisher: {
      "@id": "https://bio-chem.in/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://bio-chem.in/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://bio-chem.in${item.path}`,
    })),
  };
}
