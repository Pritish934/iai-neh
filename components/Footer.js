"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1a1a1a] py-16">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c8a96e]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="font-['Playfair_Display'] text-2xl font-semibold tracking-wide text-white"
            >
              IAI-NEH
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">
              A boutique homestay nestled in the hills of Meghalaya, offering
              tranquility, warm hospitality, and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c8a96e]">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Amenities", href: "#amenities" },
                { label: "Gallery", href: "#gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a0a0a0] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c8a96e]">
              Support
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
                { label: "Booking Info", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#a0a0a0] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c8a96e]">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff]/10 text-[#a0a0a0] transition-all hover:border-[#c8a96e] hover:text-[#c8a96e]"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff]/10 text-[#a0a0a0] transition-all hover:border-[#c8a96e] hover:text-[#c8a96e]"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TripAdvisor */}
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff]/10 text-[#a0a0a0] transition-all hover:border-[#c8a96e] hover:text-[#c8a96e]"
                aria-label="TripAdvisor"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 4.5c-2.76 0-5 2.24-5 5 0 1.32.5 2.54 1.36 3.46l-1.86 1.86-1.86-1.86C10.5 12.04 11 10.82 11 9.5c0-2.76-2.24-5-5-5S1 6.74 1 9.5s2.24 5 5 5c1.32 0 2.54-.5 3.46-1.36l1.86 1.86-1.86 1.86C8.5 18.96 8 20.18 8 21.5c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5c-1.32 0-2.54.5-3.46 1.36L7.68 17l1.86-1.86c.92.86 2.14 1.36 3.46 1.36 2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-[#a0a0a0]">
              <a
                href="tel:+919876543210"
                className="hover:text-white transition-colors"
              >
                +91 9819133594
              </a>
            </p>
            <p className="mt-1 text-sm text-[#a0a0a0]">
              <a
                href="lammawrie@gmail.com"
                className="hover:text-white transition-colors"
              >
                lammawrie@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#ffffff]/10 pt-8 text-center sm:flex-row">
          <p className="text-xs text-[#6b6b6b]">
            &copy; {new Date().getFullYear()} IAI-NEH. All rights reserved.
          </p>
          <p className="text-xs text-[#6b6b6b]">
            Crafted with care in the hills of Meghalaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
