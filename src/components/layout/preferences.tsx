"use client";

import Image from "next/image";

import { Settings } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";

import { labels } from "@/i18n/config";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const locales = Object.entries(labels);

export function Preferences() {
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const params = useParams();

  const { setTheme } = useTheme();

  const changeLocale = (lang: any) => {
    router.push(
      { pathname: pathname as any, params: params },
      { locale: lang },
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="fixed bottom-12 right-5 hidden cursor-pointer rounded-full bg-primary-foreground/50 p-3 shadow-2xl backdrop-blur-sm md:block"
        >
          <Settings className="size-5 animate-spin-slow md:size-10" />
        </motion.div>
      </DialogTrigger>
      <DialogContent className="mx-auto flex max-w-3xl flex-col">
        <DialogHeader className="!text-center">
          <DialogTitle>{t("Preferences.Title")}</DialogTitle>
          <DialogDescription>{t("Preferences.Description")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <div className="flex justify-evenly">
            <div
              className="cursor-pointer border-primary"
              onClick={() => setTheme("light")}
            >
              <div className="items-center rounded-md border-2 border-muted p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                {t("ThemeSwitcher.Light")}
              </span>
            </div>
            <div
              className="cursor-pointer border-primary"
              onClick={() => setTheme("dark")}
            >
              <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                {t("ThemeSwitcher.Dark")}
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            {locales.map(([locale, { name, flag }]) => (
              <button
                key={locale}
                onClick={() => changeLocale(locale)}
                disabled={currentLocale === locale}
                className="flex w-full cursor-pointer flex-col items-center gap-5 border border-muted p-5 hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Image src={flag} alt={`${name} flag`} width={50} height={50} />
                <span className="block w-full p-2 text-center font-normal">
                  {name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
