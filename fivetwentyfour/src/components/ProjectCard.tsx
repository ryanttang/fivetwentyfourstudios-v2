import React from 'react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  desc: string;
  image: string;
};

export default function ProjectCard({ title, desc, image }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card glassmorphic rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-200 border border-white/10"
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)' }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-full h-56 bg-gradient-glass">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl shadow-md border border-white/10" />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-heading text-xl font-bold m-0 text-[#F5F6FA] tracking-tight drop-shadow-sm">{title}</h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#FFB86C] font-body font-medium mt-2 mb-0 drop-shadow-sm"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
} 