import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Placeholder submit handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate with backend/email service
  }

  return (
    <>
      <Navbar />
      <main>
        <motion.section
          className="max-w-xl mx-auto glassmorphic rounded-3xl shadow-lg py-14 px-8 my-16 flex flex-col items-center border border-orange-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[#FFB86C] text-center drop-shadow-lg">Contact</h1>
          <p className="text-lg text-[#F5F6FA]/90 font-body text-center mb-8 max-w-md">
            Tell me what you're dreaming up. I’ll help make it real.<br />
            Fill out the form and I’ll get back to you soon.
          </p>
          {submitted ? (
            <div className="neumorphic-inset rounded-2xl p-8 text-center text-[#FFB86C] font-heading text-xl shadow-inner w-full">
              Thank you for reaching out!<br />I’ll be in touch soon.
            </div>
          ) : (
            <form
              className="flex flex-col gap-6 w-full mt-2"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="neumorphic rounded-xl px-5 py-3 font-body text-base bg-transparent text-[#F5F6FA] placeholder-[#F5F6FA]/60 focus:outline-none focus:ring-2 focus:ring-[#FFB86C] transition"
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="neumorphic rounded-xl px-5 py-3 font-body text-base bg-transparent text-[#F5F6FA] placeholder-[#F5F6FA]/60 focus:outline-none focus:ring-2 focus:ring-[#FFB86C] transition"
                aria-label="Your Email"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="neumorphic rounded-xl px-5 py-3 font-body text-base bg-transparent text-[#F5F6FA] placeholder-[#F5F6FA]/60 focus:outline-none focus:ring-2 focus:ring-[#FFB86C] transition resize-none"
                aria-label="Your Message"
              />
              <button
                type="submit"
                className="rounded-full neumorphic text-[#FFB86C] px-8 py-3 font-semibold shadow border border-orange-200 transition font-body hover:bg-[#FFB86C]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB86C]"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.section>
      </main>
      <Footer />
    </>
  );
} 