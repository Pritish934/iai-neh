"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    label: "Mountain View Suite",
    gradient: "from-[#2d5a3d]/30 to-[#c8a96e]/30",
    src: "/images/Image3.jpeg",
  },
  {
    id: 2,
    label: "The Veranda",
    gradient: "from-[#c8a96e]/30 to-[#8b6f47]/30",
    src: "/images/Image5.jpeg",
  },
  {
    id: 3,
    label: "Bedroom Interior",
    gradient: "from-[#2d5a3d]/20 to-[#4a7c5e]/30",
    src: "/images/Image6.jpeg",
  },
  {
    id: 4,
    label: "Cozy Living Room",
    gradient: "from-[#8b6f47]/20 to-[#c8a96e]/20",
    src: "/images/Image7.jpeg",
  },
  {
    id: 5,
    label: "Parking Space",
    gradient: "from-[#c8a96e]/30 to-[#2d5a3d]/20",
    src: "/images/Image8.jpeg",
  },
  {
    id: 6,
    label: "Bedroom Interior",
    gradient: "from-[#4a7c5e]/20 to-[#8b6f47]/20",
    src: "/images/Image3.jpeg",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-[#8b6f47]">
            Gallery
          </span>
          <h2 className="mt-4 font-['Playfair_Display'] text-4xl leading-tight font-medium text-[#1a1a1a] sm:text-5xl">
            A Glimpse of
            <br />
            <span className="text-[#2d5a3d]">Paradise</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6b6b6b]">
            Explore the beauty and charm of IAI-NEH through our curated photo
            collection.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              onClick={() => setSelectedImage(image)}
              className={`group relative aspect-square overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:aspect-[2/1]" : ""
              }`}
            >
              {/* Gradient placeholder as image substitute */}
              <div
                className={`h-full w-full bg-gradient-to-br ${image.gradient} transition-transform duration-700 group-hover:scale-105`}
              />
              <Image
                src={image.src}
                alt={image.label}
                fill
                className="object-cover"
              />
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/10" />

              {/* Label overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-left text-sm font-medium uppercase tracking-widest text-white/80">
                    {image.label}
                  </p>
                  <div className="mt-2 h-[1px] w-0 bg-white/60 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-[#1a1a1a]/90 backdrop-blur-sm"
          >
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-6 max-w-3xl overflow-hidden rounded-2xl"
            >
              <div
                className={`aspect-[4/3] w-full bg-gradient-to-br ${selectedImage.gradient}`}
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent p-6">
                <p className="font-['Playfair_Display'] text-2xl font-medium text-white">
                  {selectedImage.label}
                </p>
              </div>
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
