import { API } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(`${API}/blogs/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const post = await res.json();
      if (post && post.title) {
        return {
          title: post.meta_title || `${post.title} | Regent Biochem`,
          description: post.meta_description || post.excerpt || "",
          keywords: post.meta_keywords || "",
          alternates: {
            canonical: `/blog/${slug}`,
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
  };
}

export default function BlogPostLayout({ children }) {
  return <>{children}</>;
}
