"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Decorative leaf */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-[0.03]">
        <svg viewBox="0 0 200 200" fill="#2d5a3d">
          <path d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <AnimatedSection className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[#2d5a3d]/5" />
              <div
                className="h-full w-full bg-gradient-to-br from-[#2d5a3d]/10 to-[#c8a96e]/10"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d5a3d' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />
            </div>
            {/* Floating card on image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-6 -left-6 rounded-xl border border-[#e8e4de] bg-[#faf8f5] p-5 shadow-lg lg:-left-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d5a3d]/10">
                  <svg
                    className="h-6 w-6 text-[#2d5a3d]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] text-lg font-semibold text-[#1a1a1a]">
                    Boutique Living
                  </p>
                  <p className="text-sm text-[#6b6b6b]">4 Premium Suites</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <span className="inline-block rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#8b6f47]">
                About IAI-NEH
              </span>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="font-['Playfair_Display'] text-4xl leading-tight font-medium text-[#1a1a1a] sm:text-5xl">
                A Home Away From
                <br />
                <span className="text-[#2d5a3d]">Home</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-base leading-relaxed text-[#6b6b6b] sm:text-lg">
                Nestled in the lush green landscapes, IAI-NEH is more than just
                a stay — it's an experience. Our family-run homestay blends
                modern comfort with the warmth of traditional hospitality,
                offering you a sanctuary to unwind, reconnect, and create
                lasting memories.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-base leading-relaxed text-[#6b6b6b] sm:text-lg">
                Every corner of IAI-NEH tells a story — from the handcrafted
                wooden furniture to the locally sourced cuisine served with
                love. Whether you're sipping tea on the veranda overlooking the
                hills or strolling through our organic garden, you'll feel the
                gentle rhythm of life at its purest.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-[#e8e4de] pt-8">
                <div>
                  <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#2d5a3d]">
                    4
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#6b6b6b]">
                    Suites
                  </p>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#2d5a3d]">
                    2+
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#6b6b6b]">
                    Acres
                  </p>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] text-3xl font-semibold text-[#2d5a3d]">
                    ∞
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[#6b6b6b]">
                    Memories
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
