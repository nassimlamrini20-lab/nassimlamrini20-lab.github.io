import { Project, Publication, Experience, SkillGroup } from './types';

export const projects: Project[] = [
  {
    id: 'digital-twin-pv',
    title: 'Digital Twin PV Monitoring Platform',
    subtitle: 'Real-time performance virtualization for utility-scale systems',
    problem: 'Standard SCADA systems provide raw data but lack predictive diagnostic capabilities and high-fidelity physics-informed modeling.',
    approach: 'Developed a Python-based digital twin architecture integrating real-time SCADA streams with PVSyst-derived physics models to track Performance Ratio (PR) and Degradation in real-time.',
    tools: ['Python', 'Streamlit', 'Modbus TCP', 'SCADA', 'PVLib'],
    results: 'Enabled detection of sub-optimal performance hours with 98% accuracy compared to baseline modeling.',
    impact: 'Implemented at GEP experimental facility to monitor multi-technology arrays.',
    category: 'Research'
  },
  {
    id: 'ai-thermal-detection',
    title: 'AI-Based Automated Defect Detection',
    subtitle: 'Computer vision for drone-based thermography',
    problem: 'Manual inspection of thousands of thermal images from drone campaigns is time-consuming and prone to human error.',
    approach: 'Engineered a deep learning pipeline (U-Net/Mask R-CNN) for automated segmentation of hot spots, bypass diode failures, and string anomalies from IR drone imagery.',
    tools: ['PyTorch', 'OpenCV', 'Thermal Imaging', 'Deep Learning'],
    results: 'Reduced defect diagnostic time by 40% while maintaining a Recall rate of 0.92 for critical faults.',
    impact: 'Applied across multiple 50MW+ utility-scale plants.',
    category: 'Software'
  },
  {
    id: 'ocp-utility-ops',
    title: 'Utility-Scale PV Operations (202 MWp)',
    subtitle: 'Performance engineering for OCP Group mining sites',
    problem: 'Operating massive PV plants in harsh mining environments (dust/soiling) requires rigorous maintenance strategies and IEC compliance.',
    approach: 'Led the validation of SCADA instrumentation and established preventive maintenance procedures covering DC/AC equipment for four utility-scale plants.',
    tools: ['SCADA', 'IEC 61724', 'I-V Curve Tracing', 'Asset Management'],
    results: 'Optimized cleaning schedules based on localized soiling modeling, recovering an estimated 3.5% in annual energy yield.',
    impact: 'Strategic oversight of Morocco\'s largest industrial PV portfolio.',
    category: 'Industrial'
  }
];

export const publications: Publication[] = [
  {
    id: 'pub-2025-1',
    title: 'A holistic multimodal approach for real-time anomaly detection and classification in large-scale photovoltaic plants',
    authors: ['Barraz, Z.', 'Sebari, I.', 'Oufettoul, H.', 'Ait El Kadi, K.', 'Lamrini, N.', 'Ait Abdelmoula, I.'],
    journal: 'Energy and AI',
    year: 2025,
    doi: '10.1016/j.egyai.2025.100525',
    type: 'Journal',
    tags: ['AI', 'Anomaly Detection', 'Multimodal']
  },
  {
    id: 'pub-2024-1',
    title: 'Federated learning for solar energy applications: A case study on real-time fault detection',
    authors: ['Ait Abdelmoula, I.', 'Oufettoul, H.', 'Lamrini, N.', 'Motahhir, S.', 'Mehdary, A.', 'El Aroussi, M.'],
    journal: 'Solar Energy',
    year: 2024,
    doi: '10.1016/j.solener.2024.112942',
    type: 'Journal',
    tags: ['Federated Learning', 'Fault Detection']
  },
  {
    id: 'pub-2023-1',
    title: 'A hybrid and scalable architecture of a monitoring system for photovoltaic installations',
    authors: ['Lamrini, N.', 'Oufettoul, H.', 'El Mehdi, A.', 'et al.'],
    journal: 'IEEE 11th International Conference on Smart Energy Grid Engineering (SEGE)',
    year: 2023,
    doi: '10.1109/SEGE59172.2023.10274540',
    type: 'Conference',
    tags: ['Monitoring', 'Architecture', 'SCADA']
  }
];

export const experiences: Experience[] = [
  {
    id: 'gep',
    role: 'Research Assistant – Digitalized PV Plant',
    company: 'Green Energy Park (UM6P)',
    period: '2021 – Present',
    location: 'Ben Guerir, Morocco',
    narrative: 'Leading research and engineering initiatives focused on the digitalization of large-scale PV plants, bridging the gap between field data and AI-driven insights.',
    highlights: [
      'Delivered 10+ techno-economic feasibility studies (50–2000 kWp) for industrial clients.',
      'Managed inspection campaigns combining aerial thermography and I–V curve tracing.',
      'Developed real-time monitoring dashboards tracking PR, SR, and PLR across experimental test facilities.'
    ]
  },
  {
    id: 'renault',
    role: 'Final-Year Intern – Quality and Process Optimization',
    company: 'Renault Industrial Park',
    period: 'Feb – June 2020',
    location: 'Tangier, Morocco',
    narrative: 'Applied Lean Six Sigma (DMAIC) methodology to industrial quality workflows.',
    highlights: [
      'Resulted in a 3% increase in first-time pass rate across inspection zones.',
      'Produced technical dashboards to communicate recurring quality issues using APW tools.'
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    name: 'PV Systems & Instrumentation',
    skills: ['SCADA Integration', 'Drone Thermography', 'I-V Curve Tracing', 'Performance Monitoring', 'Soiling Analysis']
  },
  {
    name: 'AI / Machine Learning',
    skills: ['Computer Vision', 'Deep Learning', 'PyTorch/TensorFlow', 'Anomaly Detection', 'Federated Learning']
  },
  {
    name: 'Standards & QA',
    skills: ['IEC 61724/62446', 'ISO 9001', 'IEC 60364-7-712', 'Lean Six Sigma (DMAIC)']
  }
];
