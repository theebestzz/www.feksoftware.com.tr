"use client";

import React, { useState } from "react";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { motion } from "framer-motion";

import { getProducts } from "@/data/products";
import { getServices } from "@/data/services";

import { Logo } from "@/components/logo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  const t = useTranslations("Navbar");

  const products = getProducts();
  const services = getServices();
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="fixed inset-x-0 top-2 z-50 mx-auto max-w-2xl"
    >
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <HoveredLink href="/">{t("Home")}</HoveredLink>
          <HoveredLink href="/about">{t("About")}</HoveredLink>
          <MenuItem setActive={setActive} active={active} item={t("Services")}>
            <div className="flex flex-col space-y-4 text-sm">
              {services.map((service) => (
                <HoveredLink key={service.title} href={service.link}>
                  {service.title}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item={t("Products")}>
            <div className="grid grid-cols-2 gap-10 p-4 text-sm">
              {products.slice(0, 4).map((product) => (
                <ProductItem
                  key={product.title}
                  href={product.link}
                  src={product.thumbnail}
                  title={product.title}
                  description="Prepare for tech interviews like never before."
                />
              ))}
            </div>
          </MenuItem>
          <HoveredLink href="/projects">{t("Projects")}</HoveredLink>
          <HoveredLink href="/contact">{t("Contact")}</HoveredLink>
        </Menu>
      </div>
      <div className="relative flex items-center justify-between space-x-4 rounded-full border border-primary/25 bg-white/50 p-4 shadow-input backdrop-blur-sm dark:bg-primary-foreground/25 md:hidden md:px-8 md:py-6">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </motion.div>
  );
}
