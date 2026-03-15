import React, { useState } from "react";
import { X } from "lucide-react";
import "../CartSidebar/module.css";

const CartSidebar = ({
  cartItems = [],
  setCartItems,
  isOpen,
  setIsOpen,
}) => {

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // convert price safely
  const getPrice = (price) => {
    if (typeof price === "number") return price;
    return parseInt(price.replace(/[^0-9]/g, ""));
  };

  // increase quantity
  const increase = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updated);
  };

  // decrease quantity
  const decrease = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updated);
  };

  // remove item
  const removeItem = (id) => {
    const filtered = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(filtered);
  };

  // subtotal calculation (FIXED REDUCE)
  const subtotal = cartItems.reduce((total, item) => {
    const price = getPrice(item.price);
    return total + price * item.quantity;
  }, 0);

  // apply coupon
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
      
      <div
        onClick={() => setIsOpen(false)}
        className={`overlay ${isOpen ? "show" : ""}`}
      ></div>

     
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

       
        <div className="cart-header">

          <h2>Your Cart</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="close-btn"
          >
            <X size={26} />
          </button>

        </div>

       
        <div className="cart-items">

          {cartItems.length === 0 && (
            <p className="empty-cart">
              Cart is empty
            </p>
          )}

          {cartItems.map((item) => {

            const price = getPrice(item.price);

            return (

              <div key={item.id} className="cart-item">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="item-info">

                  <h3>{item.title}</h3>

                  <p className="price">
                    ₹{price}
                  </p>

                  <div className="item-actions">

                    <div className="quantity">

                      <button
                        onClick={() =>
                          decrease(item.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increase(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="remove-btn"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

       
        {cartItems.length > 0 && (

          <div className="coupon-section">

            <label>COUPON CODE ?</label>

            <input
              type="text"
              placeholder="Enter coupon"
              value={coupon}
              onChange={(e) =>
                applyCoupon(e.target.value)
              }
            />

          </div>

        )}

        
        {cartItems.length > 0 && (

          <div className="cart-footer">

            <div className="subtotal">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            {discount > 0 && (

              <div className="subtotal">

                <span>Discount</span>

                <span>
                  - ₹{discount.toFixed(0)}
                </span>

              </div>

            )}

            <div className="total">

              <span>Total</span>

              <span>
                ₹{total.toFixed(0)}
              </span>

            </div>

            <button className="checkout-btn">
              Check Out
            </button>

          </div>

        )}

      </div>
    </>
  );
};

export default CartSidebar;