import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Globe, FileText, Github, Quote } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tighter text-primary">
          NL<span className="text-accent underline decoration-2 underline-offset-4">.RESEARCH</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/cv_nassim_lamrini.pdf" 
            target="_blank"
            className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/10 flex items-center gap-2"
          >
            <FileText size={16} /> CV
          </a>
        </div>

        <button className="md:hidden p-2 text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export const ContactFooter = () => {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white overflow-hidden relative" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Available for PhD visibility, postdoctoral opportunities, and industrial R&D collaborations in the PV and AI sectors.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:nassim.lamrini20@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Email Address</p>
                  <p className="font-medium">nassim.lamrini20@gmail.com</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/nassim-lamrini/" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Professional Profile</p>
                  <p className="font-medium">linkedin.com/in/nassim-lamrini</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Location</p>
                  <p className="font-medium">Ben Guerir, Morocco</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Academic Identity</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://orcid.org/0000-0002-8627-754X" target="_blank" className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/40 transition-all group">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">ORCID</p>
                <p className="font-mono text-sm group-hover:text-accent transition-colors">0000-0002-8627-754X</p>
              </a>
              <a href="https://www.researchgate.net/profile/Nassim-Lamrini" target="_blank" className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/40 transition-all group">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">ResearchGate</p>
                <p className="font-bold group-hover:text-accent transition-colors">Nassim Lamrini</p>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-6">Built with precision for the next generation of energy research.</p>
              <div className="flex gap-4">
                <Github size={20} className="text-slate-500 hover:text-white cursor-pointer transition-all" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 Nassim Lamrini. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-30"></div>
    </footer>
  );
};
