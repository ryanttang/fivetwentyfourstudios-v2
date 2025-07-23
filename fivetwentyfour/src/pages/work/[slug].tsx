import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProjectDetail() {
  // Placeholder data
  const project = {
    title: 'Project One',
    intro: 'A boutique brand identity and web launch for a soulful small business.',
    whatYouDid: 'Strategy, design, and launch of a new digital presence.',
    outcome: 'Increased brand awareness and online conversions.',
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <button onClick={() => window.history.back()} className="btn-neumorphic" style={{ margin: '2rem 0' }}>&larr; Back to Work</button>
            <h1>{project.title}</h1>
            <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>{project.intro}</p>
            <h3>What We Did</h3>
            <p>{project.whatYouDid}</p>
            <h3>Outcome</h3>
            <p>{project.outcome}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 