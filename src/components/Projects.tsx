import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data';
import { Settings, Cpu, Globe, Database, ArrowUpRight } from 'lucide-react';

const icons: Record<string, any> = {
  Industrial: Settings,
  Research: Globe,
  Software: Cpu
};

export const Projects = () => {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Engineering Systems & R&D</h2>
          <p className="text-lg text-muted">
            Translating complex research into deployable industrial solutions for large-scale energy infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = icons[project.category];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white shadow-sm rounded-lg border border-slate-200">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/50 border border-slate-200 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
                  <p className="text-accent font-medium text-sm mb-6 pb-6 border-b border-slate-200 italic">
                    {project.subtitle}
                  </p>
                  
                  <div className="space-y-6 mb-8 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">The Problem</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Systems Approach</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Tools</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-500 uppercase">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-200 bg-slate-100/50 -mx-8 -mb-8 p-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-primary rounded-full">
                        <ArrowUpRight size={12} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase text-primary mb-1">Quantified Result</p>
                        <p className="text-sm font-medium text-slate-700">{project.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
