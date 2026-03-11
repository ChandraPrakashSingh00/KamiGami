import { useState } from "react";
import "./navbar.css";
import {
  MapPin,
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/Logo.png";
import StoryIcon from "../../elements/StoryIcon";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT LINKS */}
      <div className="nav-left">
        <Link to="/new">New In</Link>
        <Link to="/collections">Collections</Link>
      </div>

      {/* CENTER LOGO */}
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="Kamigami logo" className="logo" />
        </Link>
      </div>

      {/* RIGHT ICONS */}
      <div className="nav-right">

        <Link to="/stories">
          <StoryIcon />
        </Link>

        <Link to="/location">
          <MapPin size={22} />
        </Link>

        <Link to="/search">
          <Search size={22} />
        </Link>

        <Link to="/profile">
          <User size={22} />
        </Link>

        <Link to="/wishlist">
          <Heart size={22} />
        </Link>

        <Link to="/product">
          <ShoppingCart size={22} />
        </Link>

      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="mobile-menu">
        <Menu size={28} onClick={() => setOpen(!open)} />
      </div>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${open ? "active" : ""}`}>

        <Link to="/new">New In</Link>
        <Link to="/collections">Collections</Link>

        <div className="mobile-icons">

          <Link to="/location">
            <MapPin />
          </Link>

          <Link to="/search">
            <Search />
          </Link>

          <Link to="/profile">
            <User />
          </Link>

          <Link to="/wishlist">
            <Heart />
          </Link>

          <Link to="/product">
            <ShoppingCart />
          </Link>

        </div>
      </div>

    </nav>
  );
}