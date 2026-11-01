import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem('raasa_reviews');
    if (savedReviews) setReviews(JSON.parse(savedReviews));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || rating === 0 || !comment) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('raasa_reviews', JSON.stringify(updatedReviews));
    setName('');
    setRating(0);
    setComment('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const avgRating = reviews.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : '0.0';

  return (
    <section id="reviews" className="py-20 bg-[#F5EFE5]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#3B101B] text-center mb-12">Customer Reviews</h2>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1 bg-[#3B101B] p-8 text-[#F5EFE5]">
            <h3 className="text-2xl font-serif text-[#C8A46A] mb-6">Submit a Review</h3>
            {success && <p className="mb-4 text-green-400">Thank you for your review!</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 bg-[#171514] border border-[#C8A46A]" />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={28} className={`cursor-pointer ${s <= rating ? 'fill-[#C8A46A] text-[#C8A46A]' : 'text-gray-500'}`} onClick={() => setRating(s)} />
                ))}
                <span className="ml-2 text-[#C8A46A]">{rating}/5</span>
              </div>
              <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} required className="w-full p-3 bg-[#171514] border border-[#C8A46A]" rows={4}></textarea>
              <button type="submit" className="w-full bg-[#C8A46A] text-[#171514] py-3 font-bold hover:bg-[#D9CBB8]">Submit Review</button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#3B101B] p-8 text-[#F5EFE5] mb-8">
              <h3 className="text-2xl font-serif text-[#C8A46A] mb-4">Average Rating: {avgRating} / 5</h3>
              <p>Total Reviews: {reviews.length}</p>
            </div>
            
            <div className="space-y-6">
              {reviews.length === 0 ? (
                <p className="text-[#3B101B]">No reviews yet. Be the first to share your experience!</p>
              ) : (
                reviews.map((r) => (
                  <div key={r.id} className="bg-[#D9CBB8] p-6 text-[#171514]">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">{r.name}</h4>
                      <span className="text-sm">{r.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < r.rating ? 'fill-[#3B101B] text-[#3B101B]' : 'text-gray-400'} />)}
                    </div>
                    <p>{r.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
