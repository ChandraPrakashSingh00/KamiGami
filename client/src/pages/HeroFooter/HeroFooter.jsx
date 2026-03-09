import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col overflow-hidden">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 md:px-16 py-6">

        {/* Playstore */}
        <button className="border border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="playstore"
            className="h-7"
          />
        </button>

        {/* Socials */}
        <div className="flex gap-4">

          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
            <Instagram size={18} />
          </div>

          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
            <Facebook size={18} />
          </div>

          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
            <Twitter size={18} />
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-red-600 mx-6 md:mx-16"></div>

      {/* Hero Title */}
      <div className="flex-1 flex items-center justify-center w-full px-4">

        <div className="w-full max-w-[1600px] text-center">

          <h1
            className="
            text-red-600
            font-black
            uppercase
            leading-[0.85]
            tracking-[0.04em]
            select-none
            w-full
            break-words
            "
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(90px, 15vw, 320px)"
            }}
          >
            KAMIGAMI
          </h1>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
