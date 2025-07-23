import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import CTABlock from '../components/CTABlock';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 py-20 px-4 items-center">
          <motion.div
            className="md:col-span-7 flex flex-col gap-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Boutique digital strategy for <span className="text-[#FFB86C]">small brands with soul.</span>
            </h1>
            <div className="flex gap-6 mt-4">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full neumorphic px-8 py-3 font-semibold text-[#F5F6FA] border border-gray-200 shadow transition font-body"
              >
                See Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full glassmorphic text-[#FFB86C] px-8 py-3 font-semibold shadow border border-orange-200 transition font-body backdrop-blur"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glassmorphic p-8 flex items-center justify-center">
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="90" cy="90" r="85" fill="#F5EFE6" stroke="#D96C3A" strokeWidth="6" />
                <text x="50%" y="54%" textAnchor="middle" fill="#D96C3A" fontSize="2rem" fontFamily="'Canela', 'Georgia', serif" dy=".3em">524</text>
              </svg>
            </div>
          </motion.div>
        </section>

        {/* Services Row */}
        <motion.section
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {["Strategy", "Design", "Launch"].map((service, i) => (
            <motion.div
              key={service}
              className="neumorphic rounded-xl p-8 text-center cursor-pointer hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)' }}
            >
              <h3 className="text-[#FFB86C] text-xl font-semibold mb-2 font-heading">{service}</h3>
              <p className="text-[#F5F6FA]/80 font-body">{["Vision to voice", "Visual identity", "Websites that convert"][i]}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Services & Pricing Section */}
        <motion.section
          className="max-w-4xl mx-auto glassmorphic py-14 px-6 flex flex-col items-center my-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-2">Services & Pricing for You</h2>
            <p className="text-[#FFB86C] text-lg font-medium opacity-85 font-body">Transparent packages for every stage of your brand journey.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <motion.div
              className="flex-1 neumorphic rounded-2xl p-8 flex flex-col items-center text-center transition hover:scale-105 font-body"
              whileHover={{ scale: 1.04 }}
            >
              <h3 className="text-[#FFB86C] text-lg font-semibold mb-2 font-heading">Brand Starter</h3>
              <p className="text-[#F5F6FA]/80 mb-6">Logo, color palette, and basic brand guide to get you started.</p>
              <div className="text-2xl font-bold text-[#FFB86C] mt-auto">$800</div>
            </motion.div>
            <motion.div
              className="flex-1 glassmorphic border-2 border-orange-600 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center relative z-10 font-body"
              whileHover={{ scale: 1.06 }}
            >
              <h3 className="text-[#FFB86C] text-lg font-semibold mb-2 font-heading">Website Launch</h3>
              <p className="text-[#F5F6FA]/80 mb-6">Custom 1-5 page website, mobile responsive, and basic SEO.</p>
              <div className="text-2xl font-bold text-[#FFB86C] mt-auto">$2,500</div>
            </motion.div>
            <motion.div
              className="flex-1 neumorphic rounded-2xl p-8 flex flex-col items-center text-center transition hover:scale-105 font-body"
              whileHover={{ scale: 1.04 }}
            >
              <h3 className="text-[#FFB86C] text-lg font-semibold mb-2 font-heading">Full Brand Suite</h3>
              <p className="text-[#F5F6FA]/80 mb-6">Complete brand identity, website, and launch strategy.</p>
              <div className="text-2xl font-bold text-[#FFB86C] mt-auto">$4,500</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="max-w-2xl mx-auto neumorphic rounded-3xl py-14 px-6 text-center my-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full mx-auto mb-8"></div>
          <h2 className="text-2xl font-heading font-bold mb-6">Small, nimble, built for the ambitious.</h2>
          <p className="max-w-xl mx-auto text-lg text-[#F5F6FA]/80 font-body">We believe small businesses deserve big agency thinking. Human-centered, creative, and always approachable.</p>
        </motion.section>

        {/* CTA Strip */}
        <motion.section
          className="max-w-2xl mx-auto flex justify-center items-center py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <CTABlock text="Let’s bring your brand to life." buttonText="Get in touch" />
        </motion.section>
      </main>
      <Footer />
    </>
  );
} 