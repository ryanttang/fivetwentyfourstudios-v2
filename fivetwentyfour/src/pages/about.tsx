import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div className="glass" style={{ textAlign: 'center', padding: '2rem' }}>
            <img src="/assets/founder.jpg" alt="Founder" style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', background: 'var(--color-bg-alt)' }} />
            <div style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>“Let’s build something memorable.”</div>
          </div>
          <div>
            <h1>About fivetwentyfour studios</h1>
            <p>
              Hi, I’m [Your Name], founder of fivetwentyfour studios. I believe small businesses deserve big agency thinking—creative, strategic, and always human. My approach blends editorial minimalism with a touch of personality, helping brands stand out with confidence and warmth.
            </p>
            <p>
              Whether you’re launching, rebranding, or just dreaming big, I’m here to help bring your vision to life.
            </p>
            <button className="btn-neumorphic" style={{ marginTop: '2rem' }}>Let’s Connect</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 