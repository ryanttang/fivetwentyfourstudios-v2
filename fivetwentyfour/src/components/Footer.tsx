import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="glassmorphic border-t border-white/10 mt-16 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <strong className="block text-lg font-bold mb-2 text-[#F5F6FA]">fivetwentyfour studios</strong>
          <div className="text-[#F5F6FA]/80 text-base">Boutique digital agency for small brands</div>
        </div>
        <div>
          <strong className="block text-lg font-bold mb-2 text-[#F5F6FA]">Social</strong>
          <ul className="space-y-2">
            <li><a href="#" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"><FontAwesomeIcon icon={faInstagram as any} className="mr-2" />Instagram</a></li>
            <li><a href="#" className="relative font-medium text-[#F5F6FA] hover:text-[#FFB86C] transition after:content-[''] after:block after:h-0.5 after:bg-[#FFB86C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"><FontAwesomeIcon icon={faLinkedin as any} className="mr-2" />LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <strong className="block text-lg font-bold mb-2 text-[#F5F6FA]">Contact</strong>
          <div className="text-[#F5F6FA]/80 text-base">hello@fivetwentyfour.com</div>
        </div>
        <div>
          <strong className="block text-lg font-bold mb-2 text-[#F5F6FA]">Newsletter</strong>
          <div className="text-[#F5F6FA]/80 text-base">Coming soon</div>
        </div>
      </div>
      <div className="text-center mt-10 text-base text-[#F5F6FA]/80">
        © 2025 fivetwentyfour studios — where small brands grow bold.
      </div>
    </footer>
  );
} 