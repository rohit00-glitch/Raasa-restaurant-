import React from 'react';

export const ReservationForm = () => {
  return (
    <section id="reservations" className="py-20 bg-[#F5EFE5]">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-serif text-[#3B101B] text-center mb-12">Your Table Awaits</h2>
        <form className="bg-[#3B101B] p-8 text-[#F5EFE5]" onSubmit={(e) => { e.preventDefault(); alert("This is a demo. Your reservation submission has been received."); }}>
          <div className="grid gap-4 mb-4">
            <input type="text" placeholder="Name" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
            <input type="email" placeholder="Email" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
            <input type="tel" placeholder="Phone" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="date" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
              <input type="time" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
            </div>
            <input type="number" placeholder="Number of Guests" min="1" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
            <textarea placeholder="Special Requests" className="p-3 bg-[#171514] border border-[#C8A46A]" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full bg-[#C8A46A] text-[#171514] py-4 font-bold hover:bg-[#D9CBB8]">Reserve Now</button>
        </form>
      </div>
    </section>
  );
};
