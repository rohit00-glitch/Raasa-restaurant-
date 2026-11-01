import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F5EFE5]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif text-[#3B101B] mb-6">A Celebration of Indian Culinary Art</h2>
          <p className="text-[#171514] text-lg leading-relaxed mb-6">
            RAASA is a modern Indian fine-dining restaurant that celebrates India's diverse culinary heritage. 
            We meticulously prepare our dishes using quality ingredients, honoring traditional recipes while 
            incorporating contemporary techniques to create an exceptional dining experience.
          </p>
          <p className="text-[#171514] text-lg leading-relaxed">
            Our commitment to exceptional hospitality ensures every visit is memorable.
          </p>
        </div>
        <div className="bg-[#D9CBB8] p-4">
          <img 
            src="/images/hero_bg_1793549190117.jpg" 
            alt="Restaurant Interior" 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
