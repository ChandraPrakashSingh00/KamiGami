import React from "react";
import "../TestimonialSection/module.css";

const testimonials = [
  {
    name: "Alex Paul",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Great products and amazing quality!"
  },
  {
    name: "Alex Paul",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    text: "Amazing design and very comfortable."
  },
  {
    name: "Alex Paul",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
    text: "Best fashion store I’ve tried recently."
  },
  {
    name: "Alex Paul",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    text: "Fast delivery and premium quality."
  },
  {
    name: "Alex Paul",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Stylish clothing collection."
  }
];

const TestimonialCard = ({ item }) => {
  return (
    <div className="testimonial-card">
      <img src={item.img} alt="" />
      <div>
        <h3>{item.name}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

const TestimonialRow = ({ direction }) => {
  return (
    <div className="testimonial-row">
      <div className={`testimonial-track ${direction}`}>
        {[...testimonials, ...testimonials].map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">

      <h2 className="testimonial-title">
        What Our Customers Says !
      </h2>

      <TestimonialRow direction="scroll-left" />
      <TestimonialRow direction="scroll-right" />
      <TestimonialRow direction="scroll-left" />

    </section>
  );
};

export default TestimonialSection;