import React from 'react';

export default function Navbar() {
  return (
    <nav className="glassmorphic sticky top-0 z-50 shadow-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <span className="font-bold text-xl tracking-wide text-[#F5F6FA]">
          fivetwentyfour <span className="text-[#FFB86C]">studios</span>
        </span>
        <div className="flex gap-8">
          <a href="/" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Home</a>
          <a href="/work" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Work</a>
          <a href="/about" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About</a>
          <a href="/contact" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Contact</a>
        </div>
      </div>
    </nav>
  );
} 