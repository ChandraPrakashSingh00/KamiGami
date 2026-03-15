import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
// import ProductDetails from "./pages/ProductDetails/ProductDeatils";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartSidebar from "./components/CartSidebar/CartSidebar";

const App = () => {
  
  return (
    <>
      <Navbar/>
      <Routes>

        
        <Route path="/" element={<Hero />} />

       
        {/* <Route path="/product" element={<ProductDetails />} /> */}

        <Route path="/cartsidebar" element={< CartSidebar/>} />

      </Routes>
      <Footer/>
    </>
  );
};

export default App;