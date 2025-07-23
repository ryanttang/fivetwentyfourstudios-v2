import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="glassmorphic sticky top-0 z-50 shadow-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <span className="font-bold text-xl tracking-wide text-[#F5F6FA]">
          fivetwentyfour <span className="text-[#FFB86C]">studios</span>
        </span>
        <div className="flex gap-8">
          <Link to="/" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            <FontAwesomeIcon icon={faHome as any} className="mr-2" />Home
          </Link>
          <Link to="/work" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            <FontAwesomeIcon icon={faBriefcase as any} className="mr-2" />Work
          </Link>
          <Link to="/about" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            <FontAwesomeIcon icon={faUser as any} className="mr-2" />About
          </Link>
          <Link to="/contact" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            <FontAwesomeIcon icon={faEnvelope as any} className="mr-2" />Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 