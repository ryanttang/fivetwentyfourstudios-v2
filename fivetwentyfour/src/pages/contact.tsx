import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Contact</h1>
          <p>Tell me what you're dreaming up. I’ll help make it real.</p>
          <form className="form-neumorphic" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required rows={5} />
            <button type="submit" className="btn-neumorphic">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
} 