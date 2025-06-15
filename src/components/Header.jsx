import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Internships', path: '/internships' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-700 tracking-tight">Intern<span className="text-emerald-600">Hub</span></Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-2 py-1 transition-colors duration-300 hover:text-indigo-600 ${
                location.pathname === item.path ? 'text-indigo-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4 text-sm font-medium space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 transition-colors duration-300 hover:text-indigo-600 ${
                location.pathname === item.path ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
