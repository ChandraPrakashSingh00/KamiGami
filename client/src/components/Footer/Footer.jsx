import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "../Footer/module.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Row */}
      <div className="footer-top">

        {/* Google Play Button */}
        <div className="playstore-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </div>

        {/* Social Icons */}
        <div className="social-icons">

          <div className="social-icon">
            <FaInstagram size={18} />
          </div>

          <div className="social-icon">
            <FaFacebookF size={18} />
          </div>

          <div className="social-icon">
            <FaTwitter size={18} />
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Brand Text */}
      <div className="footer-brand">

        <h1>KAMIGAMI</h1>

      </div>

    </footer>
  );
};

export default Footer;