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
      className="project-card neumorphic rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-200"
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)' }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="glassmorphic flex items-center justify-center w-full h-52">
        <img src={image} alt={title} className="max-w-[90%] max-h-[90%] object-cover rounded-xl" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold m-0 text-[#F5F6FA]">{title}</h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#FFB86C] font-body font-medium mt-2 mb-0"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
} 