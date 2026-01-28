
import React from 'react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    role: "Mobile Developer",
    company: "Suntel Technology Cambodia",
    period: "May 2024 – Present",
    description: [
      "Developing mission-critical Flutter apps including Home Service, HR, Partner, and Chat platforms.",
      "Implementing real-time communication using Zego Cloud for voice/video calls.",
      "Applying modular architecture patterns to ensure codebase scalability and testability.",
      "Optimizing application performance for a diverse range of Android and iOS devices."
    ]
  },
  {
    role: "Mobile Developer",
    company: "CloudNET",
    period: "Sep 2022 – Feb 2024",
    description: [
      "Developed comprehensive eCommerce features including product listings, cart systems, and payment integrations.",
      "Integrated Firebase Authentication and Cloud Messaging (FCM) for personalized user experiences.",
      "Collaborated with cross-functional teams to resolve complex technical challenges and improve app stability.",
      "Maintained high standards of UI/UX by implementing smooth animations and responsive layouts."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Journey</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Work Experience</h3>
          </div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-0">
            {experiences.map((exp, idx) => (
              <div key={idx} className="mb-16 relative pl-8 reveal" style={{ transitionDelay: `${idx * 200}ms` }}>
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 font-mono">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-start leading-relaxed">
                      <span className="text-slate-600 mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
