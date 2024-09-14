import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-3xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 lg:text-5xl">
          {t("Title")} <br /> {t("SubTitle")}
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg">
          {t("Description")}
        </p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="relative mt-5 bg-background/50 backdrop-blur-sm"
        >
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=905050520138"
          >
            {t("Contact")}
          </a>
        </Button>
      </BackgroundLines>
    </>
  );
}
