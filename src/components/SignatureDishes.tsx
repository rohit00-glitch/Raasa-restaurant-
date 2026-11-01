import React from 'react';
import { Button } from './ui/Button';

const dishes = [
  { name: 'Royal Paneer Tikka', desc: 'Paneer marinated in exotic spices, grilled to perfection.', price: '850', img: '/src/assets/images/dish_1_paneer_1793549190618.jpg' },
  { name: 'Dal Makhani', desc: 'Slow-cooked black lentils, creamy and rich.', price: '700', img: '/src/assets/images/dish_2_dal_1793549190026.jpg' },
  { name: 'Hyderabadi Dum Biryani', desc: 'Aromatic basmati rice with tender spiced meat.', price: '1200', img: '/src/assets/images/dish_3_biryani_1793549190790.jpg' },
  { name: 'Butter Chicken', desc: 'Tender chicken in a velvety tomato-based gravy.', price: '1100', img: '/src/assets/images/dish_4_butter_chicken_1793549190166.jpg' },
  { name: 'Tandoori Platter', desc: 'Assorted marinated meats and vegetables.', price: '1500', img: '/src/assets/images/dish_5_tandoori_1793549189781.jpg' },
  { name: 'Saffron Rasmalai', desc: 'Delicate cottage cheese dumplings in saffron milk.', price: '600', img: '/src/assets/images/dish_6_rasmalai_1793549190978.jpg' },
];

export const SignatureDishes = () => {
  return (
    <section id="menu" className="py-20 bg-[#171514]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#F5EFE5] text-center mb-16">Signature Dishes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-[#3B101B] p-4 group overflow-hidden">
              <img src={dish.img} alt={dish.name} className="w-full h-64 object-cover mb-4 transition-transform duration-500 group-hover:scale-105" />
              <h3 className="text-2xl font-serif text-[#C8A46A] mb-2">{dish.name}</h3>
              <p className="text-[#D9CBB8] mb-4">{dish.desc}</p>
              <p className="text-[#F5EFE5] font-semibold text-lg">₹{dish.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button>Explore Full Menu</Button>
        </div>
      </div>
    </section>
  );
};
