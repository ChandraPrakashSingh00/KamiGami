import "../HeroFooter/Footer.css";

import { Instagram, Facebook, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero">
      
    
      <div className="hero-top">

       
        <button className="playstore-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="playstore"
          />
        </button>

       
        <div className="socials">

          <div className="social-icon">
            <Instagram size={18} />
          </div>

          <div className="social-icon">
            <Facebook size={18} />
          </div>

          <div className="social-icon">
            <Twitter size={18} />
          </div>

        </div>
      </div>

      
      <div className="divider"></div>

      
      <div className="hero-center">
        <div className="hero-container">
          <h1 className="hero-title">KAMIGAMI</h1>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;