import { API } from "@/lib/api";

async function fetchStudy(slug) {
  try {
    const res = await fetch(`${API}/case-studies/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.caseStudy && data.caseStudy.title) return data.caseStudy;
    }
  } catch {}
  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = await fetchStudy(slug);

  if (study) {
    const title = study.meta_title || `${study.title} | Regent Biochem`;
    const description = study.meta_description || study.industry || "";
    const image = study.image || "/hero.webp";
    return {
      title,
      description,
      alternates: {
        canonical: `/case-studies/${slug}`,
      },
      openGraph: {
        type: "article",
        siteName: "Regent Bio-Chem India",
        title,
        description,
        url: `/case-studies/${slug}`,
        images: [image],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  }

  return {
    title: "Case Study | Regent Biochem",
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      type: "article",
      siteName: "Regent Bio-Chem India",
      title: "Case Study | Regent Biochem",
      url: `/case-studies/${slug}`,
      images: ["/hero.webp"],
    },
  };
}

export default async function CaseStudyLayout({ children, params }) {
  const { slug } = await params;
  const study = await fetchStudy(slug);

  const jsonLdBlocks = [];

  if (study) {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.title,
      description: study.industry || "",
      image: study.image ? [study.image] : undefined,
      datePublished: study.created_at || undefined,
      dateModified: study.updated_at || study.created_at || undefined,
      publisher: {
        "@id": "https://bio-chem.in/#organization",
      },
      mainEntityOfPage: `https://bio-chem.in/case-studies/${slug}`,
    });

    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bio-chem.in" },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://bio-chem.in/case-studies" },
        { "@type": "ListItem", position: 3, name: study.title, item: `https://bio-chem.in/case-studies/${slug}` },
      ],
    });
  }

  return (
    <>
      {jsonLdBlocks.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
