"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const slides = [
  { src: '/images/image 1.jpeg', alt: 'Hero image 1' },
  { src: '/images/flamm-chemical-warehouse-629651_1920.jpg', alt: 'Chemical warehouse' },
  { src: '/images/flamm-warehouse-629641.jpg', alt: 'Industrial warehouse' },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change every 8 seconds - slow slide

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-brand-anthracite px-4 py-28 text-brand-clean sm:px-6 sm:py-36 lg:px-8 lg:py-44"
    >
      {/* Background slider */}
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          className={`absolute inset-0 -z-10 object-cover transition-opacity duration-1500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          sizes="100vw"
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-anthracite/80 via-brand-anthracite/70 to-brand-anthracite/90" aria-hidden="true" />

      {/* Slide indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ring-2 ring-transparent ${
              index === currentSlide 
                ? 'bg-brand-mint scale-125 ring-brand-mint' 
                : 'bg-white/50 hover:bg-white hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-40">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-shadow-lg sm:text-5xl lg:text-6xl drop-shadow-2xl"
        >
          Sustainable Chemical Solutions{' '}
          <span className="text-brand-mint drop-shadow-lg">for a Global Market</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl leading-relaxed text-brand-clean/95 drop-shadow-md">
          Greenhills Chemicals Incorporated delivers high-purity, responsibly sourced industrial chemicals — backed by rigorous GHS compliance, full Safety Data Sheets, and sustainable manufacturing.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-mint px-8 py-4 text-lg font-bold text-brand-anthracite shadow-2xl hover:bg-brand-mint/90 hover:shadow-brand-mint/25 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-anthracite"
          >
            Request a Quote Now
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-clean/30 px-8 py-4 text-lg font-semibold text-brand-clean hover:bg-brand-clean/20 hover:border-brand-mint hover:text-brand-mint focus:outline-none focus:ring-4 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-anthracite transition-all duration-300"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
