"use client";

import { siteConfig } from "@/lib/site-config";
import { useTranslations } from "next-intl";

export function Footer() {
  const date = new Date();

  const t = useTranslations("Footer");

  return (
    <footer className="mb-2 border-t border-secondary bg-background pb-16 pt-5 backdrop-blur-3xl dark:border-primary-foreground sm:mb-0 sm:pb-20 md:pb-5">
      <div className="mx-auto flex max-w-[1920px] items-center justify-center px-4 text-center md:px-8 2xl:px-16">
        <div className="text-body flex flex-col text-xs leading-6 lg:text-sm">
          <a
            className="font-bold text-black/85 transition-colors duration-500 ease-in-out hover:text-black dark:text-white/85 dark:hover:text-white"
            href="https://www.feksoftware.com.tr"
          >
            {siteConfig.title} &nbsp;
          </a>
          <span className="font-normal dark:font-extralight">
            {t("Copyright")} © {date.getFullYear()} &mdash;{" "}
            {t("AllRightsReserved")}
            &nbsp;
          </span>
        </div>
      </div>
    </footer>
  );
}
