// src/components/Navbar/Navbar.jsx
import { useState, useContext } from "react";
import "./navbar.css";
import { MapPin, Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import StoryIcon from "../../elements/StoryIcon";
import CartSidebar from "../CartSidebar/CartSidebar";
import SearchOverlay from "../Search/SearchBox";
<<<<<<< HEAD
import AccountDashboard from "../../pages/AccountDashboard/AccountDashboard";
=======
import { CartContext } from "../../Context/CartContext";
>>>>>>> 37a05d08c3438c29fca781fc9348983179e807af

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/new">New In</Link>
          <Link to="/collections">Collections</Link>
        </div>

        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="Kamigami logo" className="logo" />
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/stories">
            <StoryIcon />
          </Link>

          <Link to="/location">
            <MapPin size={22} />
          </Link>

          <button onClick={() => setSearchOpen(true)}>
            <Search size={22} />
          </button>

          <Link to="/profile">
            <User size={22} />
          </Link>

          <Link to="/wishlist">
            <Heart size={22} />
          </Link>

          <button onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={22} />
          </button>
        </div>

        <div className="mobile-menu">
          <Menu size={28} onClick={() => setOpen(!open)} />
        </div>

        <div className={`mobile-nav ${open ? "active" : ""}`}>
          <Link to="/new">New In</Link>
          <Link to="/collections">Collections</Link>
          <div className="mobile-icons">
            <Link to="/location">
              <MapPin />
            </Link>

            <button onClick={() => setSearchOpen(true)}>
              <Search />
            </button>

            <Link to="/profile">
              {/* <User /> */}
              <AccountDashboard/>
            </Link>

            <Link to="/wishlist">
              <Heart />
            </Link>

            <button onClick={() => setIsCartOpen(true)}>
              <ShoppingCart />
            </button>
          </div>
        </div>
      </nav>

    
      <CartSidebar
        cartItems={cartItems}
        setCartItems={() => {}}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />

      <SearchOverlay isOpen={searchOpen} setIsOpen={setSearchOpen} />
    </>
  );
}