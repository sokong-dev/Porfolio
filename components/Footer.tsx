
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Upwork',
      url: 'https://upwork.com/freelancers/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 3.322c-2.542 0-4.562 1.364-5.409 3.424-1.017-1.911-1.619-4.307-2.113-6.746H8.277v6.746c0 1.69-.699 2.398-2.398 2.398s-2.398-.708-2.398-2.398V0H.72v6.746c0 3.801 2.398 6.199 6.199 6.199 2.031 0 3.467-.666 4.381-1.882.366.63 1.139 1.882 2.398 1.882 2.542 0 4.562-1.364 5.409-3.424.161.311.238.603.238.905 0 1.69-.699 2.398-2.398 2.398s-2.398-.708-2.398-2.398v-.223H11.78v.223c0 3.801 2.398 6.199 6.199 6.199 3.801 0 6.199-2.398 6.199-6.199 0-2.311-.849-4.394-2.221-5.69.066-.35.1-.714.1-1.082 0-3.801-2.398-6.199-6.199-6.199zm0 9.296c-1.69 0-2.398-.708-2.398-2.398 0-.311.047-.611.127-.905.791-2.06 2.417-3.424 4.562-3.424 1.69 0 2.398.708 2.398 2.398s-.708 4.329-4.689 4.329z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter text-blue-500 mb-2 block text-center md:text-left">
              RS<span className="text-white">.</span>
            </a>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              © {new Date().getFullYear()} Run Sokong — Senior Mobile Developer. Built with Flutter in heart.
            </p>
          </div>

          <div className="text-center md:text-right">
             <p className="text-slate-300 font-semibold mb-4 text-sm">Let's build something amazing together.</p>
             <div className="flex justify-center md:justify-end gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors duration-300"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
