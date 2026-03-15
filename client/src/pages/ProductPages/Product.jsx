import React, { useState } from "react";
import ProductCard from "../../components/ProductCards/ProductCards";
import CartSidebar from "../../components/CartSidebar/CartSidebar";
import { Funnel } from "lucide-react";
import "../ProductPages/module.css";

const products = [
  {
    id: 1,
    title: "Classic Black Hoodie",
    category: "Men",
    price: 3499,
    image:
      "https://cdn.pixabay.com/photo/2024/05/03/16/00/realistic-8737344_1280.jpg",
  },
  {
    id: 2,
    title: "Oversized Street Hoodie",
    category: "Men",
    price: 3799,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 3,
    title: "Minimal Grey Hoodie",
    category: "Men",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    id: 4,
    title: "Urban Style Hoodie",
    category: "Men",
    price: 3899,
    image:
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd",
  },
  {
    id: 5,
    title: "Comfort Fit Hoodie",
    category: "Men",
    price: 3599,
    image:
      "https://images.unsplash.com/photo-1622473590773-f588134b6ce7",
  },
  {
    id: 6,
    title: "Streetwear Premium Hoodie",
    category: "Men",
    price: 4099,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
];

const ProductSection = () => {

  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {

    const existing = cartItems.find(
      (item) => item.id === product.id
    );

    if (existing) {

      const updated = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updated);

    } else {

      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);

    }

    
    setIsOpen(true);
  };

  return (
    <section className="product-section">

     
      <div className="filter-bar">
        <Funnel size={18} />
        <span>Filter</span>
      </div>

     
      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

      
      <CartSidebar
        cartItems={cartItems}
        setCartItems={setCartItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </section>
  );
};

export default ProductSection;