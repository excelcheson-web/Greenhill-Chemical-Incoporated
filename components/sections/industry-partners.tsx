"use client";

export function IndustryPartners() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-brand-mint mb-6">
            Empowering Industry Professionals with Superior Chemical Solutions
          </h3>
          <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
            We help Mining, Construction, and Manufacturing professionals achieve their goals with quality chemicals.
          </p>
        </div>
        <div className="flex gap-5 md:gap-8 justify-center flex-wrap">
          <div className="flex-1 min-w-[300px] md:min-w-0">
            <img 
              src="/images/male-worker-with-bulldozer-sand-quarry.jpg" 
              alt="Underground Mining Operation with Chemical Storage"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-0">
            <img 
              src="/images/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept.jpg" 
              alt="Concrete Batching Plant using Greenhills Admixtures"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="flex-1 min-w-[300px] md:min-w-0">
            <img 
              src="/images/manager-supervisor-worker-discussing-about-production-results-new-strategy-factory-industrial-hall.jpg" 
              alt="Chemical Blending Line in Modern Manufacturing Facility"
              className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

