import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import AccountDashboard from "./pages/AccountDashboard/AccountDashboard";
import ProductDetails from "./pages/ProductDetails/ProductDeatils";
import Admin from "./pages/Admin/Admin";


const App = () => {
  return (
    <>

      

      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/userprofile" element={<AccountDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/all-products" element={<ProductDetails />} />
        {/* <Route path="/product" element={<ProductDetails />} /> */}

        <Route path="/cartsidebar" element={< CartSidebar/>} />

      </Routes>
      <Footer />

      </>

    
  );
};

export default App;