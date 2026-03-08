import React from "react";
import ProductCard from "../../components/ProductCards/ProductCards";
import { Funnel } from "lucide-react";
import "../ProductPages/module.css";

const products = [
  {
    id: 1,
    title: "Classic Black Hoodie",
    category: "Men",
    price: "Rs. 3,499",
    image: "https://images.unsplash.com/photo-1556821840-3a9fbc2c7f2e",
  },
  {
    id: 2,
    title: "Oversized Street Hoodie",
    category: "Men",
    price: "Rs. 3,799",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 3,
    title: "Minimal Grey Hoodie",
    category: "Men",
    price: "Rs. 3,299",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    id: 4,
    title: "Urban Style Hoodie",
    category: "Men",
    price: "Rs. 3,899",
    image: "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd",
  },
  {
    id: 5,
    title: "Comfort Fit Hoodie",
    category: "Men",
    price: "Rs. 3,599",
    image: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7",
  },
  {
    id: 6,
    title: "Streetwear Premium Hoodie",
    category: "Men",
    price: "Rs. 4,099",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985",
  },
];

const ProductSection = () => {
  return (
    <section className="product-section">

      {/* Filter */}
      <div className="filter-bar">
        <Funnel size={18} />
        <span>Filter</span>
      </div>

      {/* Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductSection;