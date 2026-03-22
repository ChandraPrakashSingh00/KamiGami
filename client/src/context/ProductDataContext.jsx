import { createContext, useState } from "react";

export const ProductDataContext = createContext();

export const ProductDataProvider = ({ children }) => {

  const [productData, setProductData] = useState([]);

  console.log("Context Data:", productData);

  return (
    <ProductDataContext.Provider
      value={{
        productData,
        setProductData
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};