import React from "react";
import { ShoppingCart } from "lucide-react";
import "../ProductCards/module.css";

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null;

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <div className="bottom">
        <div className="bottom-content">
          <h1>{product.title}</h1>

          <p>{product.category}</p>

          <div className="price-cart">
            <span className="price">₹{product.price}</span>

            <button className="cart-btn" onClick={() => addToCart(product)}>
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
