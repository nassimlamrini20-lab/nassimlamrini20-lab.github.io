import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Database, 
  FileText, 
  Mail, 
  Linkedin, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden" id="home">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Zap size={14} />
              <span>PhD Candidate | PV Research Engineer</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Nassim Lamrini
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl">
              Specializing in <span className="text-primary font-semibold">AI-driven optimizations</span> for utility-scale photovoltaic systems. Bridging high-fidelity engineering with data-driven intelligence.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <button onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                View Research <ArrowRight size={18} />
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all">
                Contact
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 glass-card rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">202 MWp</div>
                <div className="text-sm text-muted uppercase tracking-wider font-semibold">PV Systems Ops</div>
              </div>
              <div className="p-4 glass-card rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">40%</div>
                <div className="text-sm text-muted uppercase tracking-wider font-semibold">Faster Diagnostics</div>
              </div>
              <div className="p-4 glass-card rounded-xl">
                <div className="text-3xl font-bold text-primary mb-1">9+</div>
                <div className="text-sm text-muted uppercase tracking-wider font-semibold">Publications</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-1e959f78a05c?auto=format&fit=crop&q=80&w=1000" 
                alt="Solar plant engineering" 
                className="w-full h-auto grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-mono opacity-80 uppercase tracking-[0.2em] mb-1">Hybrid Systems Engineer</p>
                <p className="text-lg font-semibold italic text-slate-100">"Digitalizing renewable energy through the lens of AI."</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
