import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#171514] py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-serif text-[#C8A46A]">RAASA</a>
        <div className="hidden md:flex gap-8 text-[#F5EFE5]">
          <a href="#home" className="hover:text-[#C8A46A]">Home</a>
          <a href="#about" className="hover:text-[#C8A46A]">Our Story</a>
          <a href="#menu" className="hover:text-[#C8A46A]">Menu</a>
          <a href="#gallery" className="hover:text-[#C8A46A]">Gallery</a>
          <a href="#contact" className="hover:text-[#C8A46A]">Contact</a>
        </div>
        <Button onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}>Book a Table</Button>
      </div>
    </nav>
  );
};
