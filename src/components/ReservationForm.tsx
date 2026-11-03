import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [emailNotificationFailed, setEmailNotificationFailed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: supabaseError } = await supabase
      .from('reservations')
      .insert([
        {
          customer_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          reservation_date: formData.date,
          reservation_time: formData.time,
          guests: parseInt(formData.guests),
          special_request: formData.requests
        }
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
      setError(`Failed to submit reservation: ${supabaseError.message || 'Unknown error'}`);
      setLoading(false);
    } else {
      // 2. Send Email via Web3Forms
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            subject: "New RAASA Restaurant Reservation",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            guests: formData.guests,
            special_requests: formData.requests
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error("Email notification failed");
        }
      } catch (e) {
        console.error("Web3Forms Error:", e);
        setEmailNotificationFailed(true);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '', requests: '' });
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="reservations" className="py-20 bg-[#F5EFE5]">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-serif text-[#3B101B] text-center mb-12">Your Table Awaits</h2>
        {error && <p className="mb-4 text-red-600 text-center">{error}</p>}
        {submitted ? (
          <div className="bg-[#3B101B] p-8 text-[#C8A46A] text-center">
            <p className="text-xl">Thank you! Your reservation request has been received.</p>
            {emailNotificationFailed && (
              <p className="text-sm text-yellow-500 mt-2">Note: We were unable to send an email notification to the restaurant, but your reservation has been saved.</p>
            )}
          </div>
        ) : (
          <form className="bg-[#3B101B] p-8 text-[#F5EFE5]" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="p-3 bg-[#171514] border border-[#C8A46A]" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-3 bg-[#171514] border border-[#C8A46A]" />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="p-3 bg-[#171514] border border-[#C8A46A]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-3 bg-[#171514] border border-[#C8A46A]" />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required className="p-3 bg-[#171514] border border-[#C8A46A]" />
              </div>
              <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} min="1" required className="p-3 bg-[#171514] border border-[#C8A46A]" />
              <textarea name="requests" placeholder="Special Requests" value={formData.requests} onChange={handleChange} className="p-3 bg-[#171514] border border-[#C8A46A]" rows={4}></textarea>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[#C8A46A] text-[#171514] py-4 font-bold hover:bg-[#D9CBB8] disabled:opacity-50">
              {loading ? 'Submitting...' : 'Reserve Now'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
