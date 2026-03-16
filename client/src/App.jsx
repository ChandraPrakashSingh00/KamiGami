import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
import CartSidebar from "./components/CartSidebar/CartSidebar";
import AccountDashboard from "./pages/AccountDashboard/AccountDashboard";
import ProductDetails from "./pages/ProductDetails/ProductDeatils";
import Admin from "./pages/Admin/Admin";
=======
>>>>>>> 37a05d08c3438c29fca781fc9348983179e807af

const App = () => {
  return (
    <>
<<<<<<< HEAD
      {/* <Navbar/> */}
=======
      <Navbar />
>>>>>>> 37a05d08c3438c29fca781fc9348983179e807af
      <Routes>
        <Route path="/" element={<Hero />} />
<<<<<<< HEAD
        <Route path="/userprofile" element={<AccountDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/all-products" element={<ProductDetails />} />


       
        {/* <Route path="/product" element={<ProductDetails />} /> */}

        <Route path="/cartsidebar" element={< CartSidebar/>} />

      </Routes>
      {/* <Footer/> */}
=======
      </Routes>
      <Footer />
>>>>>>> 37a05d08c3438c29fca781fc9348983179e807af
    </>
  );
};

export default App;