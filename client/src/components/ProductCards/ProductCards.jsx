import React from "react";
import { ShoppingCart } from "lucide-react";
import "../ProductCards/module.css";

const ProductCard = ({ product, addToCart }) => {

  if (!product) return null;

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info">

        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-category">
          {product.category}
        </p>

      </div>

      <div className="product-footer">

        <span className="product-price">
          ₹{product.price}
        </span>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={20} />
        </button>

      </div>

    </div>
  );
};

export default ProductCard;