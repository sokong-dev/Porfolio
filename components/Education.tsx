
import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Academic Background</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl reveal">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-tighter">2019 – 2022</span>
                <h4 className="text-xl font-bold text-white">Bachelor of IT</h4>
              </div>
            </div>
            <p className="text-slate-300 font-semibold mb-2">National Institute of Business</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Focused on Computer Science fundamentals, Software Engineering, and Database Management Systems.
            </p>
          </div>

          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-tighter">2016 – 2019</span>
                <h4 className="text-xl font-bold text-white">High Diploma in English</h4>
              </div>
            </div>
            <p className="text-slate-300 font-semibold mb-2">PUC – Institute of Foreign Language</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Comprehensive English language studies focusing on professional communication and technical writing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
