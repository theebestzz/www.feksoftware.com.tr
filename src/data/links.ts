import { getTranslations } from "next-intl/server";

export async function getLinks(): Promise<{ title: string; link: string }[]> {
  const t = await getTranslations("Navbar");
  return [
    {
      title: t("Home"),
      link: "/",
    },
    {
      title: t("About"),
      link: "/about",
    },
    {
      title: t("Services"),
      link: "/services",
    },
    {
      title: t("Products"),
      link: "/products",
    },
    {
      title: t("Projects"),
      link: "/projects",
    },
    {
      title: t("Contact"),
      link: "/contact",
    },
  ];
}
