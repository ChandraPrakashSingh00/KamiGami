import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Blurred Oversized T-shirt",
    category: "Men",
    price: "Rs. 3,714",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
  },
  {
    id: 2,
    name: "Blurred Oversized T-shirt",
    category: "Men",
    price: "Rs. 3,714",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    id: 3,
    name: "Blurred Oversized T-shirt",
    category: "Men",
    price: "Rs. 3,714",
    img: "https://images.unsplash.com/photo-1618354691229-88d47f285158"
  }
];

const RelatedProducts = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-12">

      <div className="max-w-[1400px] mx-auto">

        {/* PRODUCTS GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-[#0c1116] rounded-2xl overflow-hidden group hover:scale-[1.02] transition duration-300 border border-neutral-800"
            >

              {/* IMAGE CLICK -> PRODUCT PAGE */}

              <Link to={`/product/${product.id}`}>

                <div className="overflow-hidden">

                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

              </Link>


              {/* CONTENT */}

              <div className="p-6">

                <Link to={`/product/${product.id}`}>

                  <h3 className="text-lg font-medium leading-tight hover:text-red-500 transition">
                    {product.name}
                  </h3>

                </Link>

                <p className="text-gray-400 text-sm">
                  {product.category}
                </p>


                {/* PRICE + CART */}

                <div className="flex items-center justify-between mt-8">

                  <p className="text-lg font-semibold">
                    {product.price}
                  </p>


                  {/* ADD TO CART LINK */}

                  <Link
                    to="/product"
                    className="bg-neutral-800 p-3 rounded-full hover:bg-red-600 transition"
                  >
                    <ShoppingCart size={18} />
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default RelatedProducts;
