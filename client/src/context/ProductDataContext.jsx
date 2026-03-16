import React, { createContext, useContext, useState } from 'react'

export const productDataContext = createContext(null)

const ProductDataContext = (props) => {

    const [productData, setProductData] = useState([])

    console.log("Context Data:", productData);

  return (
    <productDataContext.Provider value={{productData, setProductData}}>
        {props.children}
    </productDataContext.Provider>
  )
}

export default ProductDataContext
