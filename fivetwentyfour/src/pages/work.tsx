import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'Project One', desc: 'Brand identity & web', image: '/assets/project1.png' },
  { title: 'Project Two', desc: 'E-commerce launch', image: '/assets/project2.png' },
  { title: 'Project Three', desc: 'Strategy & design', image: '/assets/project3.png' },
  { title: 'Project Four', desc: 'Creative campaign', image: '/assets/project4.png' },
];

export default function Work() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <h1>Our Work</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
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