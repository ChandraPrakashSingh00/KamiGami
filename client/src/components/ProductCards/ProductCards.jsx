import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import "../ProductCards/module.css";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems, setIsCartOpen } = useContext(CartContext);

  if (!product) return null;

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true); 
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
      </div>

      <div className="product-footer">
        <span className="product-price">₹{product.price}</span>
        <button className="cart-btn" onClick={handleAddToCart}>
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
