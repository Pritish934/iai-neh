import "./globals.css";

export const metadata = {
  title: "IAI-NEH | Boutique Homestay in Meghalaya",
  description:
    "Experience tranquility, warm hospitality, and unforgettable memories at IAI-NEH — a boutique homestay nestled in the serene hills of Meghalaya.",
  keywords: [
    "homestay",
    "Meghalaya",
    "boutique stay",
    "hill station",
    "IAI-NEH",
    "weekend getaway",
  ],
  openGraph: {
    title: "IAI-NEH | Boutique Homestay in Meghalaya",
    description:
      "Experience tranquility, warm hospitality, and unforgettable memories at IAI-NEH.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
