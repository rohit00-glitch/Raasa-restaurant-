import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/raasa',
  facebook: 'https://facebook.com/raasa',
  x: 'https://x.com/raasa',
  youtube: 'https://youtube.com/raasa',
};

export const Footer = () => {
  return (
    <footer className="py-10 bg-[#3B101B] text-[#F5EFE5]">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#C8A46A] transition-colors"><Instagram /></a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#C8A46A] transition-colors"><Facebook /></a>
          <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-[#C8A46A] transition-colors"><Twitter /></a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#C8A46A] transition-colors"><Youtube /></a>
        </div>
        <p>&copy; 2026 RAASA. All rights reserved.</p>
      </div>
    </footer>
  );
};
