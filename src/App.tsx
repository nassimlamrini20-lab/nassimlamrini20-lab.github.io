import React from 'react';
import { Navbar, ContactFooter } from './components/Navigation';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { ExperienceSkills } from './components/ExperienceSkills';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Publications />
        <ExperienceSkills />
      </main>
      <ContactFooter />
    </div>
  );
}
