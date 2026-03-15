import React, { useState } from "react";
import { X } from "lucide-react";
import "../CartSidebar/module.css";

const CartSidebar = ({ isOpen, setIsOpen }) => {

  const [quantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const price = 2999;

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = price * quantity;

  const applyCoupon = (value) => {
    setCoupon(value);

    if (value === "SAVE10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const total = subtotal - discount;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`overlay ${isOpen ? "show" : ""}`}
      ></div>

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="cart-header">

          <h2>Your Cart</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="close-btn"
          >
            <X size={26} />
          </button>

        </div>

        {/* Cart Item */}
        <div className="cart-items">

          <div className="cart-item">

            <img
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
              alt="product"
            />

            <div className="item-info">

              <h3>Loose Fit Hoodie</h3>

              <p className="price">₹{price}</p>

              <div className="item-actions">

                <div className="quantity">
                  <button onClick={decrease}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increase}>+</button>
                </div>

                <button className="remove-btn">
                  Remove
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* COUPON DESIGN */}
        <div className="coupon-section">

          

          <input
            placeholder="Coupon Code ?"
            type="text"
            value={coupon}
            onChange={(e) => applyCoupon(e.target.value)}
          />

        </div>

        {/* Footer */}
        <div className="cart-footer">

          <div className="subtotal">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {discount > 0 && (
            <div className="subtotal">
              <span>Discount</span>
              <span>- ₹{discount}</span>
            </div>
          )}

          <div className="total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="checkout-btn">
            Check Out
          </button>

        </div>

      </div>
    </>
  );
};

export default CartSidebar;