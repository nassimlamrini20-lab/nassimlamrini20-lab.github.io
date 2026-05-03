import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { publications } from '../data';
import { FileText, ExternalLink, Calendar, Tag, Filter, BookOpen } from 'lucide-react';

export const Publications = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Journal' | 'Conference'>('All');
  
  const filteredPubs = activeFilter === 'All' 
    ? publications 
    : publications.filter(p => p.type === activeFilter);

  return (
    <section className="py-24 bg-slate-50" id="publications">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Academic Publications</h2>
            <p className="text-lg text-muted">
              Peer-reviewed research published in leading energy, AI, and engineering journals and international conferences.
            </p>
          </div>
          
          <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-lg shadow-sm">
            {(['All', 'Journal', 'Conference'] as const).map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeFilter === f 
                  ? 'bg-primary text-white' 
                  : 'text-muted hover:bg-slate-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredPubs.map((pub) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-card rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="hidden md:flex flex-col items-center justify-center w-24 h-24 bg-primary/5 rounded-xl border border-primary/10 flex-shrink-0 text-primary">
                  <FileText size={32} strokeWidth={1.5} />
                  <span className="text-[10px] font-bold uppercase mt-1 tracking-tighter opacity-60">{pub.type}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                      <Calendar size={10} /> {pub.year}
                    </span>
                    {pub.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-accent/5 text-accent uppercase tracking-widest px-2 py-0.5 rounded border border-accent/10 flex items-center gap-1">
                         {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 font-medium italic">
                    {pub.authors.map((author, index) => {
                      const isNassim = author.includes('Lamrini');
                      return (
                        <span key={index}>
                          <span className={isNassim ? 'text-primary font-bold decoration-accent underline decoration-2' : ''}>
                            {author}
                          </span>
                          {index < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 mt-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <BookOpen size={14} className="text-accent" />
                      {pub.journal}
                    </p>
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-primary transition-colors bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm"
                      >
                        DOI Link <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
