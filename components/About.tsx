
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized Excellence in <br /><span className="text-blue-400">Mobile Development</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a mobile developer specializing in building scalable and high-performance mobile applications using Flutter and modern Android technologies. I focus on designing clean architecture, implementing real-time systems, and creating reliable user experiences for production-ready applications.

              My experience includes developing complex mobile features such as real-time chat systems, push notification handling, offline data caching, and custom Flutter plugins with native platform integration. I enjoy solving technical challenges and building maintainable mobile systems that scale.

              In addition to cross-platform development with Flutter, I also build native Android interfaces using Jetpack Compose, allowing me to implement platform-specific features when needed.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My goal is to continuously improve as a mobile engineer and contribute to building impactful mobile products that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
                <div className="text-3xl font-bold text-blue-500 mb-1">3+</div>
                <div className="text-slate-400 text-sm">Years of Experience</div>
              </div>
              <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
                <div className="text-3xl font-bold text-blue-500 mb-1">3+</div>
                <div className="text-slate-400 text-sm">Apps Published</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-slate-700">
                <img
                  src="https://picsum.photos/seed/sokong/800/800"
                  alt="Run Sokong Profile"
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl">
                    <p className="text-sm font-medium text-slate-300 italic">
                      "Building the future of mobile experiences, one widget at a time."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
