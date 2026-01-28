
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    name: "Home Service Connect",
    description: "A comprehensive platform connecting homeowners with local professionals for maintenance and repair services.",
    tags: ["Flutter", "Firebase", "Zego Cloud", "Hive"],
    detailsUrl: "#",
    appStoreUrl: "https://apps.apple.com/us/app/example",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example"
  },
  {
    name: "Suntel HR Portal",
    description: "Internal human resources management system with real-time check-ins, leave requests, and payroll tracking.",
    tags: ["Flutter", "GraphQL", "SQLite", "FCM"],
    detailsUrl: "#",
    appStoreUrl: "https://apps.apple.com/us/app/example",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example"
  },
  {
    name: "Eco-Shop Plus",
    description: "Feature-rich eCommerce application with dynamic product catalogs, secure checkout, and order tracking.",
    tags: ["Flutter", "WebSocket", "Stripe API", "GetX"],
    detailsUrl: "#",
    appStoreUrl: "https://apps.apple.com/us/app/example",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example"
  },
  {
    name: "CommuniChat",
    description: "Enterprise-level messaging app supporting end-to-end encryption, group calls, and media sharing.",
    tags: ["Flutter", "WebSocket", "Zego Cloud", "Modular"],
    detailsUrl: "#",
    appStoreUrl: "https://apps.apple.com/us/app/example",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example"
  }
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
                  <a 
                    href={project.detailsUrl || "#"} 
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all text-sm text-center flex items-center justify-center gap-2"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <div className="flex gap-3">
                    <a 
                      href={project.appStoreUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2" 
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.5,12.5a5,5,0,0,0,0,10,5,5,0,0,0,0-10Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,17.5,20.5ZM13,4.5A4.5,4.5,0,1,0,8.5,9,4.5,4.5,0,0,0,13,4.5ZM8.5,11A2.5,2.5,0,1,1,11,8.5,2.5,2.5,0,0,1,8.5,11ZM2,14.5A4.5,4.5,0,1,0,6.5,10,4.5,4.5,0,0,0,2,14.5ZM6.5,21A2.5,2.5,0,1,1,9,18.5,2.5,2.5,0,0,1,6.5,21Z" />
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
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.41-.814V2.628c0-.311.144-.601.409-.814zM15.206 13.414l2.844-2.844-3.144-1.815-2.5 2.5 2.8 2.159zm4.256-4.256l-2.022 1.168L12.5 5.5l5.86 3.38a1.002 1.002 0 0 1 .59.878 1.002 1.002 0 0 1-.59.878z" />
                      </svg>
                      Play Store
                    </a>
                  </div>
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
