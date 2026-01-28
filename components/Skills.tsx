
import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    skills: ["Dart & Flutter", "Kotlin (Android Native)", "Flutter Flavor Configuration (dev/staging/prod)"]
  },
  {
    title: "Architecture & Data",
    skills: ["Modular Architecture", "State Management (Getx/Provider)", "Local Storage (SQLite & Hive)"]
  },
  {
    title: "Real-Time & Communication",
    skills: ["Zego Cloud (Voice/Video)", "WebSocket (Real-time Chat)", "REST APIs"]
  },
  {
    title: "Notifications & UI",
    skills: ["Interactive Push Notifications", "Custom Animations", "Figma to Flutter"]
  },
  {
    title: "Tools & Services",
    skills: ["GitHub / GitLab", "Firebase & GA4", "Postman / Apidog"]
  },
  {
    title: "Deployment & IDEs",
    skills: ["Play Console / App Store Connect", "VS Code / Android Studio", "Xcode / Transporter"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Technical Skills</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My toolkit is built on the foundation of the Flutter ecosystem, extending into native capabilities and complex backend integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={cat.title} 
              className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all group reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h4 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                {cat.title}
              </h4>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-slate-400 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
