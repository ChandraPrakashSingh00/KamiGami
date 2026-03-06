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

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <a>New In</a>
        <a>Collections</a>
      </div>

      {/* CENTER */}
      <div className="nav-center">
  <img src={logo} alt="Kamigami logo" className="logo" />
</div>

      {/* RIGHT */}
      <div className="nav-right">
        <MapPin size={22} />
        <Search size={22} />
        <User size={22} />
        <Heart size={22} />
        <ShoppingCart size={22} />
        <Menu size={22} />
      </div>

    </nav>
  );
}