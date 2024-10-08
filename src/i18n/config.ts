import EnFlag from "../../public/flags/en.png";
import TrFlag from "../../public/flags/tr.png";

export const defaultLocale: string = "en";

export const locales: string[] = ["en", "tr"];

export const labels: {
  [key: string]: { name: string; flag: any };
} = {
  en: {
    name: "English",
    flag: EnFlag,
  },
  tr: {
    name: "Türkçe",
    flag: TrFlag,
  },
};
export const pathnames: {
  [key: string]: { en: string; tr: string } | string;
} = {
  "/": "/",

  "/about": {
    en: "/about",
    tr: "/hakkimda",
  },

  "/services": {
    en: "/services",
    tr: "/hizmetler",
  },

  "/products": {
    en: "/products",
    tr: "/urunler",
  },

  "/products/[slug]": {
    en: "/products/[slug]",
    tr: "/urunler/[slug]",
  },

  "/projects": {
    en: "/projects",
    tr: "/projeler",
  },

  "/contact": {
    en: "/contact",
    tr: "/iletisim",
  },
};

export const localePrefix: any = "as-needed";

export const localeDetection: any = true;
