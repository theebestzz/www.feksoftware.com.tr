"use client";

import React from "react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-base text-primary hover:opacity-[0.9] md:text-lg"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-primary/25 bg-white shadow-xl backdrop-blur-sm dark:bg-primary-foreground"
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-4 rounded-full border border-primary/25 bg-white/50 p-4 shadow-input backdrop-blur-sm dark:bg-primary-foreground/50 md:px-8 md:py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={{
        pathname: "/products/[slug]",
        params: { slug: href },
      }}
      className="flex space-x-2"
    >
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        priority={true}
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-base text-neutral-700 hover:text-black dark:text-neutral-200 md:text-lg"
    >
      {children}
    </Link>
  );
};
