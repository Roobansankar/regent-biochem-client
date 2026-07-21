import { API } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(`${API}/case-studies/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      const study = data.caseStudy;
      if (study && study.title) {
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
    }
  } catch {}

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

export default function CaseStudyLayout({ children }) {
  return <>{children}</>;
}
