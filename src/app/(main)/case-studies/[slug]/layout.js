import { API } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(`${API}/case-studies/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      const study = data.caseStudy;
      if (study && study.title) {
        return {
          title: study.meta_title || `${study.title} | Regent Biochem`,
          description: study.meta_description || study.industry || "",
          alternates: {
            canonical: `/case-studies/${slug}`,
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
  };
}

export default function CaseStudyLayout({ children }) {
  return <>{children}</>;
}
