import React from 'react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg_1793549190117.jpg" 
          alt="Fine Dining Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#171514]/60"></div>
      </div>
      <div className="relative z-10 text-center text-[#F5EFE5] px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Where Indian Heritage Meets Modern Elegance</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">Discover a refined celebration of India's rich culinary traditions, thoughtfully crafted for unforgettable dining experiences.</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>Explore Our Menu</Button>
          <Button variant="outline" onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}>Reserve Your Table</Button>
        </div>
      </div>
    </section>
  );
};
