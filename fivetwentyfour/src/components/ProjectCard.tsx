import React from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  desc: string;
  image: string;
};

export default function ProjectCard({ title, desc, image }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card glassmorphic rounded-3xl overflow-hidden shadow-2xl shadow-black/20 cursor-pointer transition-transform duration-200 border border-white/10 w-[320px] h-[300px] sm:w-[340px] sm:h-[320px] flex hover:shadow-2xl hover:-translate-y-2"
      whileHover={{
        scale: 1.04,
        boxShadow: "0 12px 32px 0 rgba(31,38,135,0.10)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <div className="bg-black/50 rounded-xl px-4 py-3 text-center">
            <h3 className="font-heading text-xl font-bold text-[#F5F6FA] tracking-tight drop-shadow-sm mb-2">
              {title}
            </h3>
            <p className="text-[#FFB86C] font-body font-medium m-0 drop-shadow-sm">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
