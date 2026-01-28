
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    name: "Home Service",
    description: "A comprehensive platform connecting homeowners with local professionals for maintenance and repair services.",
    tags: ["Flutter", "Firebase", "Dart", "GetX", "FCM"],
    status: "published",
    appStoreUrl: "https://apps.apple.com/kh/app/beasy-cleaning-pest/id6745190697",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=suntel.beasy.app&hl=en"
  },
  {
    name: "HR Mobile",
    description: "Internal human resources management system with real-time check-ins, leave requests, and payroll tracking.",
    tags: ["Flutter", "REST API", "SQLite", "FCM"],
    status: "published",
    appStoreUrl: "https://apps.apple.com/kh/app/hr-mobile/id6745190697",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=suntel.beasy.app&hl=en"
  },
  {
    name: "Eco-Shop Plus",
    description: "Feature-rich eCommerce application with dynamic product catalogs, secure checkout, and order tracking.",
    tags: ["Flutter", "WebSocket", "Stripe API", "GetX"],
    status: "developing",
    sourceCodeUrl: "https://github.com/sokong-dev"
  },
  {
    name: "CommuniChat",
    description: "Enterprise-level messaging app supporting end-to-end encryption, group calls, and media sharing.",
    tags: ["Flutter", "WebSocket", "Zego Cloud", "Modular", "Hive","GetX"],
    status: "published",
    sourceCodeUrl: "https://github.com/sokong-dev"
  },
   {
    name: "Food and Cosmetic Scanner",
    description: "A cutting-edge mobile application that revolutionizes the way you scan food and cosmetics for health and safety.",
    tags: ["Flutter", "OCR", "Firestore", "Dart", "Provider", "Firebase ML Kit"],
    status: "published",
    sourceCodeUrl: "https://github.com/sokong-dev"
  },
  {
    name: "Expense Tracker",
    description: "A feature-rich expense tracking app that helps you manage your finances efficiently.",
    tags: ["Flutter", "SQLite", "Dart", "GetX","Google Excell API"],
    status: "developing",
    sourceCodeUrl: "https://github.com/sokong-dev"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Recent Projects</h3>
            <p className="text-slate-400">
              A selection of mobile applications I've developed, focusing on performance, usability, and modern architecture.
            </p>
          </div>
          <a href="#" className="group flex items-center text-blue-500 font-bold">
            View All Work 
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={project.name} 
              className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="h-64 bg-slate-800 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${project.name}/800/400`} 
                  alt={project.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  {project.status === 'published' ? (
                    <span className="px-3 py-1 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      ✓ Live
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      🚧 In Development
                    </span>
                  )}
                </div>
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-md">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.name}</h4>
                <p className="text-slate-400 mb-8 leading-relaxed h-20 overflow-hidden text-ellipsis line-clamp-3">
                  {project.description}
                </p>
                <div className="space-y-3">
                  {project.status === 'published' ? (
                    <div className="flex gap-3">
                      <a 
                        href={project.appStoreUrl || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2" 
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.624 7.319c-.681-.852-1.713-1.348-2.878-1.348-2.232 0-4.039 1.808-4.039 4.039 0 2.232 1.808 4.039 4.039 4.039 1.165 0 2.197-.496 2.878-1.348h.052c.716 1.017 1.931 1.685 3.309 1.685 2.232 0 4.039-1.808 4.039-4.039 0-2.232-1.808-4.039-4.039-4.039-1.378 0-2.593.668-3.309 1.685h-.052zm-2.878 2.768c-1.206 0-2.186 1.021-2.186 2.269 0 1.248.98 2.269 2.186 2.269s2.186-1.021 2.186-2.269c0-1.248-.98-2.269-2.186-2.269zm6.187 0c-1.206 0-2.186 1.021-2.186 2.269 0 1.248.98 2.269 2.186 2.269s2.186-1.021 2.186-2.269c0-1.248-.98-2.269-2.186-2.269z"/>
                        </svg>
                        App Store
                      </a>
                      <a 
                        href={project.googlePlayUrl || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2" 
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 20.5V3.5C3 2.91 3.9 2.5 4.5 2.5H6.5L17.5 14L6.5 25H4.5C3.9 25 3 24.59 3 24V20.5ZM16.6 5.5L7.7 14.4L16.6 23.3V5.5Z"/>
                        </svg>
                        Play Store
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-full py-2.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-xl border border-amber-500/30 transition-colors flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Coming Soon
                      </div>
                      {project.sourceCodeUrl && (
                        <a 
                          href={project.sourceCodeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2" 
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          View Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
