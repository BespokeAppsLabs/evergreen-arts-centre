import type { MetadataRoute } from "next";
import { programmes } from "@/lib/content";

const baseUrl = "https://evergreenarts.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/contact", "/get-involved", "/impact", "/programmes", "/stories"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route ? 0.8 : 1 })),
    ...programmes.map(({ slug }) => ({ url: `${baseUrl}/programmes/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
