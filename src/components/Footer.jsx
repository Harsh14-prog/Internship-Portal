import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-700 mb-2">Intern<span className="text-emerald-600">Hub</span></h3>
          <p className="text-sm leading-relaxed">
            InternHub connects students with top internships in tech, design, content, and more.
            Learn by doing and grow your career from day one.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li>
            <li><Link to="/internships" className="hover:text-indigo-600 transition">Internships</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h4 className="text-md font-semibold mb-3">Stay Connected</h4>
          <p className="text-sm mb-3">Email: <a href="mailto:hello@internhub.com" className="text-indigo-600 hover:underline">hello@internhub.com</a></p>
          <div className="flex space-x-4 text-indigo-600">
            <span className="hover:scale-110 transition cursor-pointer"><FaLinkedin size={20} /></span>
            <span className="hover:scale-110 transition cursor-pointer"><FaGithub size={20} /></span>
            <span className="hover:scale-110 transition cursor-pointer"><FaTwitter size={20} /></span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 py-4 border-t">
        <span>© {new Date().getFullYear()} InternHub. All rights reserved.</span>
        <span className="ml-1">| Made with <span className="text-red-500">♥</span> by Team InternHub</span>
      </div>
    </footer>
  );
};

export default Footer;
