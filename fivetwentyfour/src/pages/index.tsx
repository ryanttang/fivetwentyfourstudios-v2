import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import CTABlock from "../components/CTABlock";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";

export default function Home() {
  const [modalProject, setModalProject] = useState<null | {
    title: string;
    desc: string;
    image: string;
  }>(null);
  const [modalTeam, setModalTeam] = useState<null | {
    name: string;
    role: string;
    bio: string;
    photo: string;
  }>(null);
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 py-10 px-4 items-center relative overflow-hidden">
          {/* Background YouTube Video */}
          <div className="youtube-bg-wrapper absolute inset-0 w-full h-full z-0 pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 opacity-40"
              style={{
                width: "177.78vh", // 100vh * (16/9)
                height: "100vh",
                minWidth: "100vw",
                minHeight: "56.25vw", // 100vw * (9/16)
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                border: 0,
              }}
              src="https://www.youtube.com/embed/VwqzEqU7ss4?autoplay=1&mute=1&loop=1&playlist=VwqzEqU7ss4&controls=0&showinfo=0&modestbranding=1&rel=0"
              title="YouTube video background"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <motion.div
            className="md:col-span-7 flex flex-col gap-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6 text-[#F5F6FA] opacity-100 drop-shadow-lg">
              Boutique digital strategy for{" "}
              <span className="text-[#F5F6FA] font-bold">
                small brands with soul.
              </span>
            </h1>
            <div className="flex gap-6 mt-4">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full neumorphic px-8 py-3 font-semibold text-[#F5F6FA] border border-gray-200 shadow transition font-body"
                onClick={() => {
                  const el = document.getElementById("gallery-showcase");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full glassmorphic gradient-accent text-[#181A20] px-8 py-3 font-semibold shadow border-none transition font-body backdrop-blur"
                onClick={() => {
                  const el = document.getElementById("cta-contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
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
            <div className="glassmorphic gradient-glass p-8 flex items-center justify-center">
              <svg
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="90"
                  cy="90"
                  r="85"
                  fill="#F5EFE6"
                  stroke="#D96C3A"
                  strokeWidth="6"
                />
                <text
                  x="50%"
                  y="54%"
                  textAnchor="middle"
                  fill="#D96C3A"
                  fontSize="2rem"
                  fontFamily="'Canela', 'Georgia', serif"
                  dy=".3em"
                >
                  524
                </text>
              </svg>
            </div>
          </motion.div>
        </section>

        {/* Services Row */}
        <motion.section
          className="max-w-6xl mx-auto glassmorphic grid grid-cols-1 md:grid-cols-3 gap-8 py-6 px-4 my-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {["Strategy", "Design", "Launch"].map((service, i) => (
            <motion.div
              key={service}
              className="neumorphic rounded-xl p-8 text-center transition-transform duration-200 relative z-10 scale-105 bg-[#181A20]/90 border-2 border-orange-400 shadow-2xl card-hover-gradient"
            >
              <div className="card-gradient-overlay" />
              <h3 className="text-[#FFB86C] text-xl font-semibold mb-2 font-heading">
                {service}
              </h3>
              <p className="text-[#F5F6FA]/80 font-body">
                {
                  [
                    "Vision to voice",
                    "Visual identity",
                    "Websites that convert",
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* Unique Carousel Gallery Section */}
        <motion.section
          id="gallery-showcase"
          className="max-w-6xl mx-auto py-10 px-4 my-6 relative overflow-visible bg-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Parallax Animated Gradient Background */}
          {/* Removed orange animated gradient background for a neutral look */}
          <motion.div
            className="relative flex flex-col justify-center items-center min-h-[500px] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#FFB86C] drop-shadow-lg text-center">
              Gallery Showcase
            </h2>
            <div className="w-full max-w-5xl px-2 sm:px-4 relative">
              <Swiper
                modules={[Navigation, EffectCoverflow, Pagination]}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 32,
                  stretch: 0,
                  depth: 220,
                  modifier: 1.2,
                  slideShadows: true,
                }}
                navigation={{
                  prevEl: ".custom-swiper-prev",
                  nextEl: ".custom-swiper-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-swiper-pagination",
                }}
                loop={true}
                centeredSlides={true}
                spaceBetween={24}
                slidesPerView={1.25}
                breakpoints={{
                  640: { slidesPerView: 2.1, spaceBetween: 24 },
                  1024: { slidesPerView: 3.1, spaceBetween: 32 },
                }}
                className="!pb-8 min-h-[440px]"
              >
                {[
                  {
                    title: "Brand Identity",
                    desc: "Modern branding for a creative agency.",
                    image: "/assets/work1.avif",
                  },
                  {
                    title: "E-commerce Launch",
                    desc: "Full-stack online store build.",
                    image: "/assets/work2.avif",
                  },
                  {
                    title: "App UI/UX",
                    desc: "Mobile app interface and experience.",
                    image: "/assets/work3.avif",
                  },
                  {
                    title: "Product Campaign",
                    desc: "Creative direction for product launch.",
                    image: "/assets/work4.avif",
                  },
                  {
                    title: "Portfolio Website",
                    desc: "Personal portfolio for a designer.",
                    image: "/assets/work5.avif",
                  },
                  {
                    title: "Corporate Rebrand",
                    desc: "Rebranding for a large enterprise.",
                    image: "/assets/work6.avif",
                  },
                  {
                    title: "Startup MVP",
                    desc: "Rapid MVP for a tech startup.",
                    image: "/assets/work7.avif",
                  },
                  {
                    title: "Event Promo",
                    desc: "Promotional site for a major event.",
                    image: "/assets/work8.avif",
                  },
                  {
                    title: "Nonprofit Site",
                    desc: "Web presence for a nonprofit.",
                    image: "/assets/work9.avif",
                  },
                  {
                    title: "Landing Page",
                    desc: "High-converting landing page.",
                    image: "/assets/work10.avif",
                  },
                  {
                    title: "SaaS Dashboard",
                    desc: "Analytics dashboard for SaaS.",
                    image: "/assets/work11.avif",
                  },
                  {
                    title: "Blog Platform",
                    desc: "Custom blog and CMS.",
                    image: "/assets/work12.avif",
                  },
                  {
                    title: "Photography Gallery",
                    desc: "Showcase for a photographer.",
                    image: "/assets/work13.avif",
                  },
                ].map((p, i) => (
                  <SwiperSlide
                    key={i}
                    className="flex justify-center items-center w-full h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="w-full h-full flex justify-center items-center"
                    >
                      <div className="w-full h-full flex items-stretch">
                        {/* Add a strong drop shadow to each card for float effect */}
                        <div className="shadow-2xl shadow-[#181A20]/60 rounded-3xl">
                          <div onClick={() => setModalProject(p)}>
                            <ProjectCard
                              title={p.title}
                              desc={p.desc}
                              image={p.image}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Modal for project details */}
              {modalProject && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                  onClick={() => setModalProject(null)}
                >
                  <div
                    className="bg-[#181A20] rounded-3xl p-8 max-w-lg w-full relative text-center border-2 border-orange-400 shadow-2xl animate-fade-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={modalProject.image}
                      alt={modalProject.title}
                      className="w-full h-56 object-cover rounded-2xl mb-4"
                    />
                    <h3 className="text-2xl font-heading font-bold text-[#FFB86C] mb-2">
                      {modalProject.title}
                    </h3>
                    <p className="text-[#F5F6FA] font-body mb-4">
                      {modalProject.desc}
                    </p>
                    <button
                      className="mt-2 rounded-full px-6 py-2 bg-[#FFB86C] text-[#181A20] font-semibold shadow hover:bg-orange-400 transition"
                      onClick={() => setModalProject(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              {/* Custom navigation buttons, now visually outside the carousel */}
              <button
                aria-label="Previous"
                className="custom-swiper-prev absolute -left-12 top-1/2 -translate-y-1/2 z-20 neumorphic text-[#FFB86C] shadow-lg p-3 hover:bg-[#FFB86C]/20 border border-orange-200 transition backdrop-blur-lg bg-white/10 hover:scale-110 rounded-full"
              >
                <span className="text-2xl">&#8592;</span>
              </button>
              <button
                aria-label="Next"
                className="custom-swiper-next absolute -right-12 top-1/2 -translate-y-1/2 z-20 neumorphic text-[#FFB86C] shadow-lg p-3 hover:bg-[#FFB86C]/20 border border-orange-200 transition backdrop-blur-lg bg-white/10 hover:scale-110 rounded-full"
              >
                <span className="text-2xl">&#8594;</span>
              </button>
              {/* Animated Pagination Dots */}
              <div className="custom-swiper-pagination flex justify-center gap-2 mt-6" />
            </div>
          </motion.div>
        </motion.section>

        {/* Services & Pricing Section */}
        <motion.section
          className="max-w-4xl mx-auto glassmorphic py-8 px-6 flex flex-col items-center my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-2">
              Services & Pricing for You
            </h2>
            <p className="text-[#FFB86C] text-lg font-medium opacity-85 font-body">
              Transparent packages for every stage of your brand journey.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            {[
              {
                name: "Brand Starter",
                desc: "Logo, color palette, and basic brand guide to get you started.",
                price: "$800",
                details:
                  "Includes logo design, color palette, basic brand guide PDF, and one revision round.",
              },
              {
                name: "Website Launch",
                desc: "Custom 1-5 page website, mobile responsive, and basic SEO.",
                price: "$2,500",
                details:
                  "Includes design & development, mobile responsiveness, basic SEO, and 2 revision rounds.",
              },
              {
                name: "Full Brand Suite",
                desc: "Complete brand identity, website, and launch strategy.",
                price: "$4,500",
                details:
                  "Everything in Brand Starter + Website Launch, plus launch strategy session and 3 revision rounds.",
              },
            ].map((pkg) => (
              <motion.div
                key={pkg.name}
                className="flex-1 neumorphic rounded-2xl p-8 flex flex-col items-center text-center transition font-body relative z-10 scale-105 bg-[#181A20]/90 border-2 border-orange-400 shadow-2xl card-hover-gradient"
              >
                <div className="card-gradient-overlay" />
                <h3 className="text-[#FFB86C] text-lg font-semibold mb-2 font-heading">
                  {pkg.name}
                </h3>
                <p className="text-[#F5F6FA]/80 mb-6">{pkg.desc}</p>
                <div className="text-2xl font-bold text-[#FFB86C] mt-auto">
                  {pkg.price}
                </div>
                <div className="mt-4 text-[#F5F6FA] text-base font-body animate-fade-in">
                  {pkg.details}
                  <button
                    className="block mx-auto mt-6 rounded-full px-6 py-2 bg-[#FFB86C] text-[#181A20] font-semibold shadow hover:bg-orange-400 transition"
                    onClick={() => {
                      const el = document.getElementById("cta-contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="max-w-2xl mx-auto rounded-3xl py-8 px-6 text-center my-8 relative overflow-hidden border border-orange-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Video background */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-3xl overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 opacity-40"
              style={{
                width: "177.78vh", // 100vh * (16/9)
                height: "100vh",
                minWidth: "100vw",
                minHeight: "56.25vw", // 100vw * (9/16)
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                border: 0,
                borderRadius: "1.5rem",
              }}
              src="https://www.youtube.com/embed/VwqzEqU7ss4?autoplay=1&mute=1&loop=1&playlist=VwqzEqU7ss4&controls=0&showinfo=0&modestbranding=1&rel=0"
              title="YouTube video background"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Gradient overlay for readability */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,184,108,0.32) 0%, rgba(217,108,58,0.32) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-1.5 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full mx-auto mb-8"></div>
            <h2 className="text-2xl font-heading font-bold mb-6">
              Small, nimble, built for the ambitious.
            </h2>
            <p className="max-w-xl mx-auto text-lg text-[#F5F6FA]/80 font-body">
              We believe small businesses deserve big agency thinking.
              Human-centered, creative, and always approachable.
            </p>
            <button
              className="mt-6 rounded-full px-6 py-2 bg-[#FFB86C] text-[#181A20] font-semibold shadow hover:bg-orange-400 transition"
              onClick={() => {
                const el = document.getElementById("about-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </button>
          </div>
        </motion.section>

        {/* About/Team Section */}
        <motion.section
          className="max-w-3xl mx-auto glassmorphic rounded-3xl py-10 px-6 text-center my-8"
          id="about-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-heading font-bold mb-4">About Us</h2>
          <p className="text-lg text-[#F5F6FA]/80 font-body mb-8">
            We are a passionate team of designers, strategists, and
            technologists dedicated to helping soulful brands shine online. Our
            mission is to bring big agency thinking to small businesses, with a
            personal touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8">
            {[
              {
                name: "Ryan Tang",
                role: "Founder & Creative Director",
                bio: "Ryan leads the creative vision and strategy for every project, blending design, tech, and business insight.",
                photo: "/assets/work1.avif",
              },
              {
                name: "Alex Kim",
                role: "Lead Designer",
                bio: "Alex crafts beautiful, user-centered designs and ensures every brand stands out visually.",
                photo: "/assets/work2.avif",
              },
              {
                name: "Jamie Lee",
                role: "Web Developer",
                bio: "Jamie brings ideas to life with clean, scalable code and a passion for performance.",
                photo: "/assets/work3.avif",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                className="flex flex-col items-center bg-[#181A20]/80 rounded-2xl p-6 shadow-lg border border-orange-200 cursor-pointer hover:scale-105 transition-transform w-56"
                whileHover={{ scale: 1.07 }}
                onClick={() => setModalTeam(member)}
                tabIndex={0}
                aria-label={member.name + " bio"}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-[#FFB86C]"
                />
                <div className="font-heading text-lg text-[#FFB86C] font-bold mb-1">
                  {member.name}
                </div>
                <div className="text-[#F5F6FA]/80 font-body text-sm mb-1">
                  {member.role}
                </div>
                <div className="text-[#F5F6FA]/60 font-body text-xs">
                  Click for bio
                </div>
              </motion.div>
            ))}
          </div>
          {/* Modal for team member bio */}
          {modalTeam && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              onClick={() => setModalTeam(null)}
            >
              <div
                className="bg-[#181A20] rounded-3xl p-8 max-w-md w-full relative text-center border-2 border-orange-400 shadow-2xl animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modalTeam.photo}
                  alt={modalTeam.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[#FFB86C]"
                />
                <h3 className="text-xl font-heading font-bold text-[#FFB86C] mb-1">
                  {modalTeam.name}
                </h3>
                <div className="text-[#F5F6FA]/80 font-body mb-2">
                  {modalTeam.role}
                </div>
                <p className="text-[#F5F6FA] font-body mb-4">{modalTeam.bio}</p>
                <button
                  className="mt-2 rounded-full px-6 py-2 bg-[#FFB86C] text-[#181A20] font-semibold shadow hover:bg-orange-400 transition"
                  onClick={() => setModalTeam(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.section>

        {/* Client Logos / Past Clients Section */}
        <motion.section
          className="max-w-4xl mx-auto py-8 px-6 flex flex-col items-center my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-xl font-heading font-bold mb-6">
            Brands We've Worked With
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {/* Placeholder logos, replace with real client logos */}
            <div className="w-32 h-12 bg-[#F5EFE6] rounded-lg flex items-center justify-center text-[#D96C3A] font-bold text-lg">
              Client 1
            </div>
            <div className="w-32 h-12 bg-[#F5EFE6] rounded-lg flex items-center justify-center text-[#D96C3A] font-bold text-lg">
              Client 2
            </div>
            <div className="w-32 h-12 bg-[#F5EFE6] rounded-lg flex items-center justify-center text-[#D96C3A] font-bold text-lg">
              Client 3
            </div>
            <div className="w-32 h-12 bg-[#F5EFE6] rounded-lg flex items-center justify-center text-[#D96C3A] font-bold text-lg">
              Client 4
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="max-w-3xl mx-auto glassmorphic rounded-3xl py-10 px-6 text-center my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-heading font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1 bg-[#F5EFE6]/80 rounded-xl p-6 text-[#181A20] shadow">
              <p className="italic mb-2">
                “Absolutely transformed our brand presence. The team was
                creative, responsive, and a joy to work with!”
              </p>
              <div className="font-bold text-[#D96C3A]">— Alex, Founder</div>
            </div>
            <div className="flex-1 bg-[#F5EFE6]/80 rounded-xl p-6 text-[#181A20] shadow">
              <p className="italic mb-2">
                “Professional, talented, and truly understood our vision from
                day one.”
              </p>
              <div className="font-bold text-[#D96C3A]">— Jamie, CEO</div>
            </div>
          </div>
        </motion.section>

        {/* Process Overview Section */}
        <motion.section
          className="max-w-4xl mx-auto py-10 px-6 my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">
            Our Process
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-[#FFB86C]/30 rounded-full flex items-center justify-center font-bold text-xl text-[#D96C3A]">
                1
              </div>
              <div className="font-heading font-semibold mb-1">Discover</div>
              <div className="text-[#F5F6FA]/80 font-body">
                We learn about your brand, goals, and audience.
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-[#FFB86C]/30 rounded-full flex items-center justify-center font-bold text-xl text-[#D96C3A]">
                2
              </div>
              <div className="font-heading font-semibold mb-1">Design</div>
              <div className="text-[#F5F6FA]/80 font-body">
                We craft a unique visual identity and digital experience.
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-[#FFB86C]/30 rounded-full flex items-center justify-center font-bold text-xl text-[#D96C3A]">
                3
              </div>
              <div className="font-heading font-semibold mb-1">Launch</div>
              <div className="text-[#F5F6FA]/80 font-body">
                We launch your project and support your growth.
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="max-w-3xl mx-auto glassmorphic rounded-3xl py-10 px-6 my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="text-left space-y-6">
            <div>
              <div className="font-heading font-semibold text-[#FFB86C]">
                How long does a typical project take?
              </div>
              <div className="text-[#F5F6FA]/80 font-body">
                Most projects are completed in 4-8 weeks, depending on scope and
                feedback cycles.
              </div>
            </div>
            <div>
              <div className="font-heading font-semibold text-[#FFB86C]">
                Do you offer payment plans?
              </div>
              <div className="text-[#F5F6FA]/80 font-body">
                Yes, we offer flexible payment options for all packages.
              </div>
            </div>
            <div>
              <div className="font-heading font-semibold text-[#FFB86C]">
                Can you help with ongoing support?
              </div>
              <div className="text-[#F5F6FA]/80 font-body">
                Absolutely! We offer maintenance and support packages tailored
                to your needs.
              </div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Signup Section */}
        <motion.section
          className="max-w-2xl mx-auto glassmorphic rounded-3xl py-8 px-6 text-center my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-heading font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-[#F5F6FA]/80 font-body mb-4">
            Subscribe for occasional updates, tips, and inspiration. No spam,
            ever.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-full px-6 py-3 font-body text-[#181A20] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              className="rounded-full glassmorphic gradient-accent text-[#181A20] px-8 py-3 font-semibold shadow border-none transition font-body backdrop-blur"
            >
              Subscribe
            </button>
          </form>
        </motion.section>

        {/* CTA Strip */}
        <motion.section
          className="max-w-2xl mx-auto flex justify-center items-center py-6 my-4"
          id="cta-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <CTABlock
            text="Let’s bring your brand to life."
            buttonText="Get in touch"
          />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
