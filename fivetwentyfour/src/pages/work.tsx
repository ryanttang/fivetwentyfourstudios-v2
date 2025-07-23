import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const projects = [
  { title: 'Brand Identity', desc: 'Modern branding for a creative agency.', image: '/assets/work1.avif' },
  { title: 'E-commerce Launch', desc: 'Full-stack online store build.', image: '/assets/work2.avif' },
  { title: 'App UI/UX', desc: 'Mobile app interface and experience.', image: '/assets/work3.avif' },
  { title: 'Product Campaign', desc: 'Creative direction for product launch.', image: '/assets/work4.avif' },
  { title: 'Portfolio Website', desc: 'Personal portfolio for a designer.', image: '/assets/work5.avif' },
  { title: 'Corporate Rebrand', desc: 'Rebranding for a large enterprise.', image: '/assets/work6.avif' },
  { title: 'Startup MVP', desc: 'Rapid MVP for a tech startup.', image: '/assets/work7.avif' },
  { title: 'Event Promo', desc: 'Promotional site for a major event.', image: '/assets/work8.avif' },
  { title: 'Nonprofit Site', desc: 'Web presence for a nonprofit.', image: '/assets/work9.avif' },
  { title: 'Landing Page', desc: 'High-converting landing page.', image: '/assets/work10.avif' },
  { title: 'SaaS Dashboard', desc: 'Analytics dashboard for SaaS.', image: '/assets/work11.avif' },
  { title: 'Blog Platform', desc: 'Custom blog and CMS.', image: '/assets/work12.avif' },
  { title: 'Photography Gallery', desc: 'Showcase for a photographer.', image: '/assets/work13.avif' },
];

export default function Work() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8 text-center tracking-tight">Our Work</h1>
          {/* Carousel Showcase */}
          <div className="relative mb-16 flex justify-center">
            <div className="w-full max-w-5xl px-2 sm:px-4">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.custom-swiper-prev',
                  nextEl: '.custom-swiper-next',
                }}
                loop={true}
                spaceBetween={32}
                slidesPerView={1.2}
                breakpoints={{
                  640: { slidesPerView: 2.2, spaceBetween: 24 },
                  1024: { slidesPerView: 3.2, spaceBetween: 32 },
                }}
                className="!pb-2"
              >
                {projects.map((p, i) => (
                  <SwiperSlide key={i} className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden bg-white/90 backdrop-blur-lg border border-gray-100 dark:bg-gray-900/90 dark:border-gray-800 shadow-lg hover:border-blue-400 dark:hover:border-blue-500 ring-1 ring-gray-200 dark:ring-gray-800">
                      <ProjectCard title={p.title} desc={p.desc} image={p.image} />
                    </div>
                  </SwiperSlide>
                ))}
                {/* Custom navigation buttons */}
                <button
                  aria-label="Previous"
                  className="custom-swiper-prev absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg p-3 hover:bg-blue-100 dark:hover:bg-blue-900 border border-gray-200 dark:border-gray-700 transition"
                  style={{}}
                >
                  <span className="text-2xl">&#8592;</span>
                </button>
                <button
                  aria-label="Next"
                  className="custom-swiper-next absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg p-3 hover:bg-blue-100 dark:hover:bg-blue-900 border border-gray-200 dark:border-gray-700 transition"
                  style={{}}
                >
                  <span className="text-2xl">&#8594;</span>
                </button>
              </Swiper>
            </div>
          </div>
          {/* Fallback Grid for non-carousel users */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={i} title={p.title} desc={p.desc} image={p.image} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 