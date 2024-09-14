"use client";

import { motion } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";

export function Whatsapp() {
  return (
    <motion.a
      target="_blank"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="fixed bottom-12 left-5 hidden cursor-pointer rounded-full bg-green-600 p-3 shadow-2xl backdrop-blur-sm md:block"
    >
      <FaWhatsapp className="size-5 animate-bell text-white md:size-10" />
    </motion.a>
  );
}
