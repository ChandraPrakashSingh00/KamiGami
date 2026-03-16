import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6">

      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-[#0d1117] p-8 rounded-xl border border-gray-800">

        
        <div className="flex-shrink-0">
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-black px-10 py-6 text-5xl font-bold rounded-md shadow-lg tracking-wide">
            <span className="text-white">A</span>
            <span className="text-gray-200">bout</span>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl space-y-4">

          <p>
            We're a clothing brand built on <span className="text-white font-semibold">bold identity</span> 
            and <span className="text-white font-semibold">clean design</span>. Every piece is crafted 
            with premium fabrics and attention to detail.
          </p>

          <p>
            Our style blends <span className="text-white font-medium">modern edge</span> with timeless 
            confidence, giving you fashion that stands out in every moment.
          </p>

          <p className="italic text-gray-400">
            We don't follow trends — we create statements.
          </p>

          <p className="text-white font-semibold text-lg">
            Wear it. Own it. Stand out.
          </p>

        </div>

      </div>

      {/* IMAGE CARDS */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

        {/* LEFT CARD */}
        <div className="overflow-hidden rounded-t-[200px] rounded-b-xl group">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20241210/zr76/67583c120f47f80c87ebe88b/-473Wx593H-466659464-beige-MODEL.jpg"
            alt="fashion"
            className="w-[320px] h-[480px] object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* MIDDLE CARD */}
        <div className="overflow-hidden rounded-[220px] group">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
            alt="fashion"
            className="w-[320px] h-[520px] object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* RIGHT CARD */}
        <div className="overflow-hidden rounded-t-[200px] rounded-b-xl group">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20241210/zr76/67583c120f47f80c87ebe88b/-473Wx593H-466659464-beige-MODEL.jpg"
            alt="fashion"
            className="w-[320px] h-[480px] object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

      </div>

    </section>
  );
};

export default AboutSection;