import React from "react";
import { X } from "lucide-react";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible z-[998]" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-black text-white shadow-2xl transform transition-transform duration-300 z-[999] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <h2 className="text-red-500 text-lg font-semibold">
            Your Cart
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-red-500 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">


          <div className="p-5 flex gap-4 border-b border-gray-800">

            <img
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
              alt="product"
              className="w-20 h-20 object-cover rounded-md"
            />

            <div className="flex flex-col justify-between w-full">

              <div>
                <h3 className="text-sm font-medium">
                  Loose Fit Hoodie
                </h3>

                <p className="text-red-500 font-semibold">
                  ₹2,999
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between mt-3">

                <div className="flex items-center bg-gray-800 rounded">

                  <button className="px-3 py-1 hover:bg-gray-700">
                    -
                  </button>

                  <span className="px-4 text-sm">1</span>

                  <button className="px-3 py-1 hover:bg-gray-700">
                    +
                  </button>

                </div>

                <button className="text-red-500 text-sm hover:underline">
                  Remove
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Checkout */}
        <div className="p-6 border-t border-gray-800">

          <div className="flex justify-between mb-4 text-sm">
            <span className="text-gray-400">Subtotal</span>
            <span className="font-semibold">₹2,999</span>
          </div>

          <button className="w-full bg-red-700 hover:bg-red-800 transition text-white py-4 rounded-full text-lg font-semibold shadow-lg">
            Check Out
          </button>

        </div>

      </div>
    </>
  );
};

export default CartSidebar;