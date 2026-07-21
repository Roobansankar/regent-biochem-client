import { API } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(`${API}/blogs/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      const post = data.blog;
      if (post && post.title) {
        const title = post.meta_title || `${post.title} | Regent Biochem`;
        const description = post.meta_description || post.excerpt || "";
        const image = post.image || "/hero.webp";
        return {
          title,
          description,
          keywords: post.meta_keywords || "",
          alternates: {
            canonical: `/blog/${slug}`,
          },
          openGraph: {
            type: "article",
            siteName: "Regent Bio-Chem India",
            title,
            description,
            url: `/blog/${slug}`,
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
    title: "Blog | Regent Biochem",
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      siteName: "Regent Bio-Chem India",
      title: "Blog | Regent Biochem",
      url: `/blog/${slug}`,
      images: ["/hero.webp"],
    },
  };
}

export default function BlogPostLayout({ children }) {
  return <>{children}</>;
}
