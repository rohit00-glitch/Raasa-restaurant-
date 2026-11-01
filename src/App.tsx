import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureDishes } from './components/SignatureDishes';
import { ReservationForm } from './components/ReservationForm';
import { Contact } from './components/Contact';
import { ReviewSection } from './components/reviews/ReviewSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#171514] min-h-screen text-[#F5EFE5]">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <ReservationForm />
      <Contact />
      <ReviewSection />
      <Footer />
    </div>
  );
}
