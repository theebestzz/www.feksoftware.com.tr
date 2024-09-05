"use client";

import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import { Logo } from "@/components/logo";

import { Link } from "@/i18n/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileSheetProps {
  links: {
    title: string;
    link: string;
  }[];
}

export function MobileSheet({ links }: MobileSheetProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="14"
          viewBox="0 0 25.567 18"
        >
          <g transform="translate(-776 -462)">
            <rect
              id="Rectangle_941"
              data-name="Rectangle 941"
              width="12.749"
              height="2.499"
              rx="1.25"
              transform="translate(776 462)"
              fill="currentColor"
            ></rect>
            <rect
              id="Rectangle_942"
              data-name="Rectangle 942"
              width="25.567"
              height="2.499"
              rx="1.25"
              transform="translate(776 469.75)"
              fill="currentColor"
            ></rect>
            <rect
              id="Rectangle_943"
              data-name="Rectangle 943"
              width="17.972"
              height="2.499"
              rx="1.25"
              transform="translate(776 477.501)"
              fill="currentColor"
            ></rect>
          </g>
        </svg>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="mt-10 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => setSheetOpen(false)}
              className="inline-flex w-full rounded bg-primary-foreground p-2 text-2xl"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="mt-20 flex cursor-pointer items-center justify-evenly gap-2 rounded-full bg-green-600 p-3 text-white shadow-2xl backdrop-blur-sm dark:shadow-none">
          <FaWhatsapp className="animate-bell size-7 md:size-10" /> Whatsapp
          Destek Hattı
        </div>
      </SheetContent>
    </Sheet>
  );
}
