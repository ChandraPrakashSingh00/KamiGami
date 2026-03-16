import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductDataContext from "./context/ProductDataContext";


import { CartProvider } from "./Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductDataContext>
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
  </ProductDataContext>,
);

