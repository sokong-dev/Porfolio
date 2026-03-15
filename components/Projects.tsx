
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    name: "Cleaning Service",
    description: "An on-demand service marketplace for home maintenance, featuring real-time booking, pest control scheduling, and secure payment integration.",
    image: "/beasy.jpg",
    tags: ["Flutter", "Firebase", "GA4", "Dart", "GetX", "FCM"],
    status: "published",
    appStoreUrl: "https://apps.apple.com/kh/app/beasy-cleaning-pest/id6745190697",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=suntel.beasy.app&hl=en"
  },
  {
    name: "HR Mobile",
    description: "A centralized workforce tool for employee attendance via GPS, automated leave requests, and digital payslip management.",
    image: "/bhrms.jpg",
    tags: ["Flutter", "REST API", "FCM"],
    status: "published",
    appStoreUrl: "https://apps.apple.com/us/app/bhrms-hr-management-system/id6753970595",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=suntel.bhrms.app&pcampaignid=web_share"
  },
  {
    name: "Partner App",
    description: "The dedicated provider portal for service professionals to manage incoming bookings, track earnings, and update service availability.",
    image: "/bpartner.jpg",
    tags: ["Flutter", "WebSocket", "Provider"],
    status: "developing",
    appStoreUrl: "https://apps.apple.com/us/app/bhrms-hr-management-system/id6753970595",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=suntel.bhrms.app&pcampaignid=web_share"
  },
  {
    name: "CommuniChat",
    description: "High-performance messaging platform featuring custom memory caching for chat history, Zego Cloud video calls, and encrypted data storage.",
    image: "/bnow.jpg",
    tags: ["Flutter", "WebSocket", "Zego Cloud", "MVVM", "Hive", "SQLite", "GetX", "FCM", "Kotlin"],
    status: "developing",
    appStoreUrl: "https://apps.apple.com/us/app/bnow-messenger/id6741062783",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=suntel.bnow.app&pcampaignid=web_share"
  },
  {
    name: "Coffee App",
    description: "A one-click-order café experience allowing customers to browse digital menus, customize orders, and earn loyalty rewards.",
    image: "/bcoffee.jpg",
    tags: ["Flutter", "WebSocket", "Provider"],
    status: "developing",
    appStoreUrl: "https://apps.apple.com/us/app/yok-cafe/id6759313851",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.yokcafe.app&pcampaignid=web_share"
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
          {/* <a href="#" className="group flex items-center text-blue-500 font-bold">
            View All Work
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="h-64 bg-slate-800 relative overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  {project.status === 'published' ? (
                    <span className="px-3 py-1 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      ✓ Live
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      In Development
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

                  <div className="flex gap-3">
                    {/* App Store Button */}
                    <a
                      href={project.appStoreUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <img
                        src="/app-store.png"
                        alt="Apple"
                        className="w-4 h-4" // Use 'invert' if the logo is black and you want it white
                      />
                      App Store
                    </a>

                    {/* Play Store Button */}
                    <a
                      href={project.googlePlayUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <img
                        src="/google-play.png"
                        alt="Play Store"
                        className="w-4 h-4"
                      />
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
