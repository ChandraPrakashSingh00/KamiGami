import React, { useState, useEffect } from "react";
import "../HeroSlider/module.css";

const slides = [
  {
    id: 1,
    title: "Hoodies",
    subtitle: "Shop Now",
    image:
      "https://schoolprintworld.co.uk/wp-content/uploads/2024/08/Hoodies-Banner-2025-scaled.webp",
  },
  {
    id: 2,
    title: "New Collection",
    subtitle: "Discover",
    image:
      "https://img.freepik.com/premium-photo/stylish-hoodie-mockup-boutique-banner-with-close-up-shot-generated-by-ai_1020799-6212.jpg",
  },
  {
    id: 3,
    title: "Street Wear",
    subtitle: "Shop Now",
    image:
      "https://schoolprintworld.co.uk/wp-content/uploads/2025/08/Hoodies-Banner-2026-scaled.webp",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
 
  return (
    <section className="hero-slider">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >

          <img src={slide.image} alt="slider" className="slide-image" />

          <div className="overlay"></div>

          <div className="slide-content">

            <h1>{slide.title}</h1>

            <p>{slide.subtitle}</p>

          </div>

        </div>
      ))}

      {/* Dots */}
      <div className="slider-dots">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`dot ${index === current ? "active-dot" : ""}`}
          ></button>
        ))}

      </div>

    </section>
  );
};

export default HeroSlider;