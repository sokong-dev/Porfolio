
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => setStatus(null), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sokong-dev',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sokong-run-3a8109366/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~0176697626e98c91b4',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 3.322c-2.542 0-4.562 1.364-5.409 3.424-1.017-1.911-1.619-4.307-2.113-6.746H8.277v6.746c0 1.69-.699 2.398-2.398 2.398s-2.398-.708-2.398-2.398V0H.72v6.746c0 3.801 2.398 6.199 6.199 6.199 2.031 0 3.467-.666 4.381-1.882.366.63 1.139 1.882 2.398 1.882 2.542 0 4.562-1.364 5.409-3.424.161.311.238.603.238.905 0 1.69-.699 2.398-2.398 2.398s-2.398-.708-2.398-2.398v-.223H11.78v.223c0 3.801 2.398 6.199 6.199 6.199 3.801 0 6.199-2.398 6.199-6.199 0-2.311-.849-4.394-2.221-5.69.066-.35.1-.714.1-1.082 0-3.801-2.398-6.199-6.199-6.199zm0 9.296c-1.69 0-2.398-.708-2.398-2.398 0-.311.047-.611.127-.905.791-2.06 2.417-3.424 4.562-3.424 1.69 0 2.398.708 2.398 2.398s-.708 4.329-4.689 4.329z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/liveable.sokong/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      url: 'https://t.me/sokong_run',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.82-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.54-.203 1.01.122.84.951z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Connect</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or direct contact info.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mr-6 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-white text-lg font-medium">Phnom Penh, Cambodia</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mr-6 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-white text-lg font-medium">096 542 5989</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mr-6 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-white text-lg font-medium">sunkovselfemployed@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">Social Profiles</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="p-10 bg-slate-900 border border-slate-800 rounded-3xl space-y-6">
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Run Sokong"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
              >
                Send Message
              </button>
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-center font-bold">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
