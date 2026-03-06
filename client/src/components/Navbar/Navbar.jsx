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

import logo from "../../assets/images/Logo.png";
import StoryIcon from "../../elements/StoryIcon";

export default function Navbar() {

  const [open,setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT LINKS */}
      <div className="nav-left">
        <a>New In</a>
        <a>Collections</a>
      </div>

      {/* CENTER LOGO */}
      <div className="nav-center">
        <img src={logo} alt="Kamigami logo" className="logo"/>
      </div>

      {/* RIGHT ICONS */}
      <div className="nav-right">
        <StoryIcon/>
        <MapPin size={22}/>
        <Search size={22}/>
        <User size={22}/>
        <Heart size={22}/>
        <ShoppingCart size={22}/>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="mobile-menu">
        <Menu size={28} onClick={()=>setOpen(!open)}/>
      </div>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${open ? "active":""}`}>
        <a>New In</a>
        <a>Collections</a>

        <div className="mobile-icons">
          <MapPin/>
          <Search/>
          <User/>
          <Heart/>
          <ShoppingCart/>
        </div>
      </div>

    </nav>
  );
}