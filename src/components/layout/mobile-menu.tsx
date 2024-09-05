import { Link } from "@/i18n/navigation";

import { Logo } from "@/components/logo";

import { AiOutlineProduct } from "react-icons/ai";

import { getLinks } from "@/data/links";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Whatsapp } from "./whatsapp";
import { FaWhatsapp } from "react-icons/fa";

export async function MobileMenu() {
  const links = await getLinks();
  return (
    <div className="fixed bottom-0 z-10 flex h-14 w-full items-center justify-between bg-white/50 px-4 text-black shadow-2xl shadow-black backdrop-blur-sm dark:bg-primary-foreground/50 dark:text-white dark:shadow-none sm:h-16 md:hidden md:px-8">
      <Sheet>
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
          <div className="mt-10 flex flex-col items-start gap-5">
            {links.map((link) => (
              <SheetClose key={link.title}>
                <Link href={link.link} className="w-full text-2xl">
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="mt-20 flex cursor-pointer items-center justify-evenly gap-2 rounded-full bg-green-600 p-3 text-white shadow-2xl backdrop-blur-sm dark:shadow-none">
            <FaWhatsapp className="animate-bell size-7 md:size-10" /> Whatsapp
            Destek Hattı
          </div>
        </SheetContent>
      </Sheet>

      <Link href={"/"} className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="20px"
          viewBox="0 0 17.996 20.442"
        >
          <path
            d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
            transform="translate(-30.619 0.236)"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.4"
          ></path>
        </svg>
      </Link>

      <button className="flex-shrink-0">
        <AiOutlineProduct className="size-6" />
      </button>
    </div>
  );
}
