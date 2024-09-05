import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://feksoftware.vercel.app",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://feksoftware.vercel.app",
          tr: "https://feksoftware.vercel.app/tr",
        },
      },
    },
    {
      url: "https://feksoftware.vercel.app/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://feksoftware.vercel.app/about",
          tr: "https://feksoftware.vercel.app/tr/about",
        },
      },
    },
  ];
}
