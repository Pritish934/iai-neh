"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    date: "March 2026",
    rating: 5,
    text: "Absolutely stunning place! The hospitality was incredible, and the views from the room were breathtaking. The home-cooked meals were the highlight of our stay. Can't wait to come back!",
    source: "Google Reviews",
  },
  {
    name: "Rahul Mehta",
    date: "February 2026",
    rating: 5,
    text: "IAI-NEH is a hidden gem. The hosts made us feel like family from the moment we arrived. The property is beautifully maintained, and the peaceful atmosphere is exactly what we needed.",
    source: "Google Reviews",
  },
  {
    name: "Ananya Krishnan",
    date: "January 2026",
    rating: 5,
    text: "We spent a week here and it was magical. The organic garden, the morning walks, the starlit evenings — everything was perfect. Highly recommended for anyone looking to disconnect and recharge.",
    source: "Google Reviews",
  },
  {
    name: "Vikram Singh",
    date: "December 2025",
    rating: 5,
    text: "One of the best homestay experiences we've ever had. The attention to detail, the warm service, and the beautiful surroundings made our family vacation truly special.",
    source: "Google Reviews",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-[#c8a96e]" : "text-[#e8e4de]"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col rounded-2xl border border-[#e8e4de] bg-white p-8"
    >
      {/* Quote mark */}
      <svg
        className="mb-4 h-8 w-8 text-[#c8a96e]/30"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Review text */}
      <p className="flex-1 text-base leading-relaxed text-[#6b6b6b]">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Rating */}
      <div className="mt-6">
        <StarRating rating={review.rating} />
      </div>

      {/* Author */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-[#1a1a1a]">{review.name}</p>
          <p className="text-xs text-[#6b6b6b]">{review.date}</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#e8e4de] px-3 py-1">
          <svg
            className="h-3.5 w-3.5 text-[#c8a96e]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
          </svg>
          <span className="text-xs font-medium text-[#1a1a1a]">Google</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#faf8f5] py-24 sm:py-32"
    >
      {/* Decorative element */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-linear-to-r from-transparent via-[#c8a96e]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#8b6f47]">
            Guest Reviews
          </span>
          <h2 className="mt-4 font-['Playfair_Display'] text-4xl leading-tight font-medium text-[#1a1a1a] sm:text-5xl">
            What Our Guests
            <br />
            <span className="text-[#2d5a3d]">Say About Us</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-[#c8a96e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-[#6b6b6b]">
              4.9 average rating from 60+ reviews
            </span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://maps.app.goo.gl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#c8a96e]/30 px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#8b6f47] transition-all hover:border-[#c8a96e]/60 hover:bg-[#c8a96e]/5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V4.07c3.94.49 7 3.85 7 7.93s-3.06 7.44-7 7.93z" />
            </svg>
            See all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
