import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ProductDataContext from "./context/ProductDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductDataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductDataContext>,
);
