import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#171514] text-[#F5EFE5]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#C8A46A] text-center mb-12">Contact & Location</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif">RAASA</h3>
            <div className="flex items-start gap-3">
              <MapPin className="text-[#C8A46A] shrink-0" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Bandra+West,+Mumbai,+Maharashtra,+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#C8A46A] transition-colors"
              >
                Sample fictional address, Bandra West, Mumbai, Maharashtra, India.
              </a>
            </div>
            <Button variant="outline" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Bandra+West,+Mumbai,+Maharashtra,+India', '_blank')}>Get Directions</Button>
          </div>
          <div className="w-full h-80 bg-[#3B101B]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30154.218337774286!2d72.81977797807615!3d19.059556700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d924d54605%3A0x6b4c95f1784918f6!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1727786483569!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
