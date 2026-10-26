import type { MetadataRoute } from "next";
import { ownerPosts, SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-26T00:00:00.000Z");
  const posts = ownerPosts.map((post) => ({
    url: `${SITE.domain}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE.domain,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.domain}/coaches`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts,
  ];
}
