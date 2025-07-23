import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import CTABlock from '../components/CTABlock';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Brand Identity', desc: 'Modern branding for a creative agency.', image: '/assets/work1.avif', category: 'Branding' },
  { title: 'E-commerce Launch', desc: 'Full-stack online store build.', image: '/assets/work2.avif', category: 'Web' },
  { title: 'App UI/UX', desc: 'Mobile app interface and experience.', image: '/assets/work3.avif', category: 'App' },
  { title: 'Product Campaign', desc: 'Creative direction for product launch.', image: '/assets/work4.avif', category: 'Campaign' },
  { title: 'Portfolio Website', desc: 'Personal portfolio for a designer.', image: '/assets/work5.avif', category: 'Web' },
  { title: 'Corporate Rebrand', desc: 'Rebranding for a large enterprise.', image: '/assets/work6.avif', category: 'Branding' },
  { title: 'Startup MVP', desc: 'Rapid MVP for a tech startup.', image: '/assets/work7.avif', category: 'App' },
  { title: 'Event Promo', desc: 'Promotional site for a major event.', image: '/assets/work8.avif', category: 'Campaign' },
  { title: 'Nonprofit Site', desc: 'Web presence for a nonprofit.', image: '/assets/work9.avif', category: 'Web' },
  { title: 'Landing Page', desc: 'High-converting landing page.', image: '/assets/work10.avif', category: 'Web' },
  { title: 'SaaS Dashboard', desc: 'Analytics dashboard for SaaS.', image: '/assets/work11.avif', category: 'App' },
  { title: 'Blog Platform', desc: 'Custom blog and CMS.', image: '/assets/work12.avif', category: 'Web' },
  { title: 'Photography Gallery', desc: 'Showcase for a photographer.', image: '/assets/work13.avif', category: 'Gallery' },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);
  return (
    <>
      <Navbar />
      <main>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center tracking-tight text-[#FFB86C] drop-shadow-lg mt-16">
          Our Work
        </h1>
        {/* Carousel Showcase Section */}
        <motion.section
          className="max-w-6xl mx-auto rounded-none py-4 px-0 mb-1 mt-4 relative overflow-visible bg-transparent shadow-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="relative mb-1 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="w-full max-w-5xl px-0 sm:px-0">
              <div className="rounded-none p-0 shadow-none bg-transparent">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: '.custom-swiper-prev',
                    nextEl: '.custom-swiper-next',
                  }}
                  loop={true}
                  spaceBetween={16}
                  slidesPerView={1.1}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 16 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  className="!pb-1 min-h-[220px]"
                >
                  {projects.map((p, i) => (
                    <SwiperSlide key={i} className="flex justify-center items-center w-full h-full">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.07 }}
                        className="w-full h-full flex justify-center items-center"
                      >
                        <div className="w-full h-full flex items-stretch">
                          <ProjectCard title={p.title} desc={p.desc} image={p.image} />
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                  {/* Custom navigation buttons */}
                  {/* <button
                    aria-label="Previous"
                    className="custom-swiper-prev absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 neumorphic text-[#FFB86C] shadow-lg p-3 hover:bg-[#FFB86C]/10 border border-orange-200 transition"
                    style={{}}
                  >
                    <span className="text-2xl">&#8592;</span>
                  </button>
                  <button
                    aria-label="Next"
                    className="custom-swiper-next absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 neumorphic text-[#FFB86C] shadow-lg p-3 hover:bg-[#FFB86C]/10 border border-orange-200 transition"
                    style={{}}
                  >
                    <span className="text-2xl">&#8594;</span>
                  </button> */}
                </Swiper>
              </div>
            </div>
          </motion.div>
        </motion.section>
        {/* Grid Section */}
        <motion.section
          className="max-w-6xl mx-auto glassmorphic rounded-3xl py-20 px-4 my-8 shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Filter UI */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`neumorphic px-4 py-1.5 text-sm font-medium transition focus:outline-none ${selectedCategory === cat ? 'bg-[#FFB86C] text-white font-bold ring-2 ring-[#FFB86C] ring-offset-2 shadow-lg' : 'bg-transparent text-[#FFB86C] hover:bg-[#FFB86C]/80 hover:text-white'}`}
                style={{ boxShadow: '8px 8px 24px #181A20, -8px -8px 24px #2a2d3a', border: 'none' }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <motion.div
            className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {filteredProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <ProjectCard title={p.title} desc={p.desc} image={p.image} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        {/* CTA Block */}
        <motion.section
          className="max-w-2xl mx-auto flex justify-center items-center py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <CTABlock text="Ready to start your project?" buttonText="Get in touch" />
        </motion.section>
      </main>
      <Footer />
    </>
  );
} 