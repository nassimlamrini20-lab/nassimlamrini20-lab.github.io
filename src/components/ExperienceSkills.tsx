import React from 'react';
import { motion } from 'motion/react';
import { experiences, skills } from '../data';
import { Briefcase, MapPin, CheckCircle2, ChevronRight, Award, GraduationCap } from 'lucide-react';

export const ExperienceSkills = () => {
  return (
    <section className="py-24 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight flex items-center gap-3">
                <Briefcase className="text-accent" /> Professional Impact
              </h2>
              <p className="text-slate-600">Bridging academic rigor with industrial field engineering.</p>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-slate-100 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-accent rounded-full group-hover:bg-accent transition-colors"></div>
                  
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                    <span className="flex items-center gap-1.5 italic text-accent font-semibold">{exp.company}</span>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                    {exp.narrative}
                  </p>

                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 size={16} className="text-accent" />
                        </div>
                        <span className="text-sm text-slate-600 leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <GraduationCap className="text-accent" /> Education
                </h4>
                <div className="space-y-4 pt-4">
                  <div>
                    <p className="font-bold text-accent">Ph.D. in Engineering Sciences</p>
                    <p className="text-sm opacity-80">SmartICT Laboratory, UM1 · 2021 – Present</p>
                    <p className="text-[11px] opacity-60 mt-1 italic italic">Thesis: "Smart Monitoring and Predictive Maintenance for Large-Scale Photovoltaic Plants"</p>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <p className="font-bold">Engineering Degree in Industrial Logistics</p>
                    <p className="text-sm opacity-80">ENSA Oujda · 2017 – 2020</p>
                  </div>
                </div>
              </div>
              <Award className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Skills Column */}
          <div id="skills">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight flex items-center gap-3">
                <ChevronRight className="text-accent" /> Core Competencies
              </h2>
              <p className="text-slate-600">Technical domains of expertise and instrumentation proficiency.</p>
            </div>

            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.name} className="p-8 bg-slate-50 border border-slate-200 rounded-2xl group hover:border-accent/30 transition-all">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 group-hover:text-primary transition-colors">
                    {group.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-accent/40 cursor-default transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
               <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
                  <p className="text-xs font-bold uppercase text-slate-400 mb-2">Standards Mastery</p>
                  <p className="font-bold text-primary">IEC 61724 / 62446 / 60364</p>
               </div>
               <div className="glass-card p-6 rounded-2xl border-l-4 border-l-accent">
                  <p className="text-xs font-bold uppercase text-slate-400 mb-2">Systems Modeling</p>
                  <p className="font-bold text-primary">PVsyst / MATLAB / PVLib</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
