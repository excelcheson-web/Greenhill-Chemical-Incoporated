"use client";

import Image from 'next/image';

export function IndustryPartners() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-brand-mint mb-6">
            Empowering Industry Professionals with Superior Chemical Solutions
          </h3>
          <p className="text-xl md:text-2xl text-brand-anthracite max-w-3xl mx-auto">
            We help Mining, Construction, and Manufacturing professionals achieve their goals with quality chemicals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <Image 
              src="/images/male-worker-with-bulldozer-sand-quarry.jpg" 
              alt="Underground Mining Operation with Chemical Storage"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              width={400}
              height={256}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div>
            <Image 
              src="/images/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept.jpg" 
              alt="Concrete Batching Plant using Greenhills Admixtures"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              width={400}
              height={256}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div>
            <Image 
              src="/images/manager-supervisor-worker-discussing-about-production-results-new-strategy-factory-industrial-hall.jpg" 
              alt="Chemical Blending Line in Modern Manufacturing Facility"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              width={400}
              height={256}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
