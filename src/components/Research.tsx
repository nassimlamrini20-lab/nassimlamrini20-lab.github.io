import React from 'react';
import { motion } from 'motion/react';
import { Binary, Eye, Database, Activity, Sun, ShieldAlert } from 'lucide-react';

const domains = [
  {
    icon: ShieldAlert,
    title: 'AI-Based Fault Detection',
    desc: 'Developing robust anomaly detection algorithms for real-time identification of electrical and physical defects in PV arrays.'
  },
  {
    icon: Database,
    title: 'Digital Twins for PV Plants',
    desc: 'Creating high-fidelity digital replicas that synchronize field sensor data with physical models for predictive maintenance.'
  },
  {
    icon: Eye,
    title: 'Drone Thermography & CV',
    desc: 'Unsupervised and supervised computer vision techniques for large-scale thermal image segmentation and defect classification.'
  },
  {
    icon: Activity,
    title: 'Performance Modeling',
    desc: 'Assessing soiling rates, degradation patterns, and inverter efficiency under varying environmental conditions.'
  },
  {
    icon: Binary,
    title: 'Federated Learning',
    desc: 'Implementing privacy-preserving collaborative learning for decentralized energy monitoring systems.'
  },
  {
    icon: Sun,
    title: 'Predictive Maintenance',
    desc: 'Data-driven strategies for mission-critical solar asset management and optimization.'
  }
];

export const Research = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="research">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Research Domains</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            My work sits at the intersection of power systems engineering and advanced computational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 glass-card rounded-3xl group hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="mb-6 w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{domain.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {domain.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
