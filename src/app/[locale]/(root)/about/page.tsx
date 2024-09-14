import Image from "next/image";

import { PageHeader } from "@/components/page-header";

import { getTranslations } from "next-intl/server";
import { AboutBeamsBlock } from "@/components/about/beams";
import { CommentsBlock } from "@/components/about/comments";

export async function generateMetadata() {
  const t = await getTranslations("AboutPage");

  return {
    title: t("Title"),
    description: t("SubTitle"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-5">
        <PageHeader title={t("Title")} subtitle={t("SubTitle")} />
        <div>
          <Image
            src={"/about/team.jpg"}
            alt="Team"
            title="Team"
            width={1000}
            height={1000}
            className="h-[300px] w-full rounded md:h-[500px]"
          />
        </div>
      </div>
      <AboutBeamsBlock />
      <CommentsBlock />
    </>
  );
}
