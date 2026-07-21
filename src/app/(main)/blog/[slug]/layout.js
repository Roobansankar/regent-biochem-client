import { API } from "@/lib/api";

async function fetchPost(slug) {
  try {
    const res = await fetch(`${API}/blogs/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.blog && data.blog.title) return data.blog;
    }
  } catch {}
  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (post) {
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

export default async function BlogPostLayout({ children, params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  const jsonLdBlocks = [];

  if (post) {
    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt || "",
      image: post.image ? [post.image] : undefined,
      datePublished: post.created_at || undefined,
      dateModified: post.updated_at || post.created_at || undefined,
      author: {
        "@type": "Person",
        name: post.author || "Regent Bio-Chem India",
      },
      publisher: {
        "@id": "https://bio-chem.in/#organization",
      },
      mainEntityOfPage: `https://bio-chem.in/blog/${slug}`,
    });

    jsonLdBlocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bio-chem.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://bio-chem.in/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://bio-chem.in/blog/${slug}` },
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
