import { PageHeader } from "@/components/page-header";
import { ServicesCard } from "@/components/services/card";

import { getServices } from "@/data/services";

import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("ServicesPage");

  return {
    title: t("Title"),
    description: t("SubTitle"),
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("ServicesPage");

  const services = getServices();

  return (
    <>
      <div className="mt-40 flex flex-col items-center justify-center gap-5">
        <PageHeader title={t("Title")} subtitle={t("SubTitle")} />
        <ServicesCard services={services} />
      </div>
    </>
  );
}
