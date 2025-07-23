import React from "react";
import { motion } from "framer-motion";

type CTABlockProps = {
  text: string;
  buttonText: string;
};

export default function CTABlock({ text, buttonText }: CTABlockProps) {
  return (
    <motion.div
      className="w-full glassmorphic p-10 flex flex-col items-center gap-6 text-center border border-orange-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-heading font-bold m-0">{text}</h2>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-full neumorphic text-[#FFB86C] px-8 py-3 font-semibold shadow border border-orange-200 transition font-body"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
