import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABlock from '../components/CTABlock';
// If you don't have react-icons installed, run: npm install react-icons
import { FaLightbulb, FaUsers, FaHeart, FaRocket } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-4 glassmorphic my-12 rounded-3xl shadow-lg">
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <img src="/assets/founder.jpg" alt="Founder" className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg border-4 border-[#FFB86C]/30" />
            <div className="italic text-[#FFB86C] text-lg text-center md:text-left mb-2">“Let’s build something memorable.”</div>
            <div className="font-heading text-2xl font-bold text-[#F5F6FA] mb-1">Alex Taylor</div>
            <div className="text-[#F5F6FA]/80 font-body text-base mb-4">Founder, fivetwentyfour studios</div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-3xl font-heading font-bold mb-2 text-[#F5F6FA]">About fivetwentyfour studios</h1>
            <p className="text-[#F5F6FA]/90 font-body text-lg">We believe small businesses deserve big agency thinking—creative, strategic, and always human. Our approach blends editorial minimalism with a touch of personality, helping brands stand out with confidence and warmth.</p>
            <p className="text-[#F5F6FA]/70 font-body">Whether you’re launching, rebranding, or just dreaming big, we’re here to help bring your vision to life.</p>
            <button className="rounded-full neumorphic px-8 py-3 font-semibold text-[#FFB86C] mt-4 shadow transition font-body">Let’s Connect</button>
          </div>
        </section>

        {/* Studio Philosophy */}
        <section className="max-w-3xl mx-auto glassmorphic rounded-2xl py-12 px-6 text-center my-12">
          <h2 className="text-2xl font-heading font-bold mb-4 text-[#FFB86C]">Studio Philosophy</h2>
          <p className="text-lg text-[#F5F6FA]/90 font-body mb-2">We’re passionate about helping soulful brands find their voice and thrive in a digital world. Our philosophy is rooted in:</p>
          <ul className="flex flex-col md:flex-row justify-center gap-8 mt-6">
            <li className="flex-1">
              <FaLightbulb className="mx-auto text-3xl text-[#FFB86C] mb-2" />
              <div className="font-bold text-[#F5F6FA]">Creativity</div>
              <div className="text-[#F5F6FA]/70 text-sm">Fresh ideas, always tailored to you.</div>
            </li>
            <li className="flex-1">
              <FaUsers className="mx-auto text-3xl text-[#FFB86C] mb-2" />
              <div className="font-bold text-[#F5F6FA]">Collaboration</div>
              <div className="text-[#F5F6FA]/70 text-sm">Working closely, every step of the way.</div>
            </li>
            <li className="flex-1">
              <FaHeart className="mx-auto text-3xl text-[#FFB86C] mb-2" />
              <div className="font-bold text-[#F5F6FA]">Empathy</div>
              <div className="text-[#F5F6FA]/70 text-sm">Human-centered, always approachable.</div>
            </li>
            <li className="flex-1">
              <FaRocket className="mx-auto text-3xl text-[#FFB86C] mb-2" />
              <div className="font-bold text-[#F5F6FA]">Ambition</div>
              <div className="text-[#F5F6FA]/70 text-sm">Helping you grow bold and confident.</div>
            </li>
          </ul>
        </section>

        {/* Timeline / Milestones */}
        <section className="max-w-3xl mx-auto py-12 px-4 my-12">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center text-[#FFB86C]">Our Journey</h2>
          <div className="flex flex-col gap-8">
            <div className="glassmorphic rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="text-3xl font-bold text-[#FFB86C]">2021</div>
              <div className="text-[#F5F6FA]/90 font-body">fivetwentyfour studios is founded with a mission to empower small brands.</div>
            </div>
            <div className="glassmorphic rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="text-3xl font-bold text-[#FFB86C]">2022</div>
              <div className="text-[#F5F6FA]/90 font-body">Launched our first 10+ client projects, building lasting partnerships.</div>
            </div>
            <div className="glassmorphic rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="text-3xl font-bold text-[#FFB86C]">2023</div>
              <div className="text-[#F5F6FA]/90 font-body">Expanded our services and grew our creative team.</div>
            </div>
            <div className="glassmorphic rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="text-3xl font-bold text-[#FFB86C]">2024</div>
              <div className="text-[#F5F6FA]/90 font-body">Recognized for creative excellence and client success.</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-2xl mx-auto flex justify-center items-center py-12">
          <CTABlock text="Ready to make something memorable?" buttonText="Get in touch" />
        </section>
      </main>
      <Footer />
    </>
  );
} 