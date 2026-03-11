import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import ProductDetails from "./pages/ProductDetails/ProductDeatils";
import Navbar from "./components/Navbar/Navbar";
import Footer from './pages/HeroFooter/HeroFooter'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>

        
        <Route path="/" element={<Hero />} />

       
        <Route path="/product" element={<ProductDetails />} />

      </Routes>
      <Footer/>
    </>
  );
};

export default App;