import React, { useState, useContext } from "react";

import {
  Heart,
  Truck,
  Calendar,
  Package,
  Percent
} from "lucide-react";

import { useParams } from "react-router-dom";

import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

import { ProductDataContext } 
from "../../context/ProductDataContext";

import "./module.css";


const ProductDetails = () => {

  // Get product ID from URL
  const { id } = useParams();

  // Get products from Context
  const { productData } =
    useContext(ProductDataContext);

  // Find clicked product
  const product =
    productData.find(
      (p) => p.id === id
    );

  // Safety check
  if (!product) {

    return (
      <h2 className="text-white text-center mt-40">
        Product Not Found
      </h2>
    );

  }

  // Dynamic Images (for now duplicate)
  const images = [

    product.image,
    product.image,
    product.image

  ];

  const [mainImage, setMainImage] =
    useState(images[0]);

  const [size, setSize] =
    useState(product.size || "M");

  return (

    <>

      <div className="bg-black text-white min-h-screen pt-28">

        {/* BREADCRUMB */}

        <div className="breadcrumb max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 text-gray-400 text-sm">

          Home • {product.title}

        </div>


        {/* PRODUCT SECTION */}

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12">


          {/* LEFT IMAGE */}

          <div>

            <img
              src={mainImage}
              className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-xl"
              alt={product.title}
            />

            <div className="flex gap-3 sm:gap-5 mt-5 overflow-x-auto">

              {images.map((img, i) => (

                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  onClick={() => setMainImage(img)}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer border border-neutral-800 hover:border-red-600 flex-shrink-0"
                />

              ))}

            </div>

          </div>


          {/* RIGHT DETAILS */}

          <div>

            {/* Dynamic Title */}

            <h1 className="product-title text-2xl sm:text-3xl font-semibold">

              {product.title}

            </h1>


            {/* Dynamic Price */}

            <p className="product-price text-red-600 text-xl sm:text-2xl mt-2">

              ₹{product.price}

            </p>


            {/* SIZE */}

            <div className="mt-8">

              <p className="select-size text-gray-400 mb-3">

                Select Size

              </p>

              <div className="flex flex-wrap gap-3">

                {["S", "M", "L", "XL"].map((s) => (

                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`size-text px-5 py-2 rounded-full border text-sm transition ${
                      size === s
                        ? "bg-red-600 border-red-600"
                        : "border-neutral-700 hover:border-red-600"
                    }`}
                  >

                    {s}

                  </button>

                ))}

              </div>

            </div>


            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">

              <button className="addToCart bg-red-600 px-10 py-3 rounded-full hover:bg-red-700 transition">

                Add To Cart

              </button>

              <button className="buyNow bg-red-600 px-10 py-3 rounded-full hover:bg-red-700 transition">

                Buy Now

              </button>

              <button className="border border-neutral-700 p-3 rounded-full w-fit">

                <Heart size={18}/>

              </button>

            </div>


            {/* DESCRIPTION */}

            <div className="mt-10">

              <h2 className="product-description text-xl font-semibold mb-3">

                Description & Fit

              </h2>

              {/* Dynamic Description */}

              <p className="product-detail text-red-400 leading-relaxed text-sm sm:text-base">

                {product.description}

              </p>

            </div>


            {/* SHIPPING */}

            <div className="mt-10">

              <h2 className="shipping-heading text-xl font-semibold mb-6">

                Shipping

              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                {/* Discount Dynamic */}

                <div className="flex items-center gap-4">

                  <div className="bg-neutral-900 p-3 rounded-full">

                    <Percent size={18}/>

                  </div>

                  <div>

                    <p className="ship-details text-red-600">

                      Discount

                    </p>

                    <p className="ship-text text-gray-400 text-sm">

                      {product.discount}%

                    </p>

                  </div>

                </div>


                {/* Static Sections remain */}

                <div className="flex items-center gap-4">

                  <div className="bg-neutral-900 p-3 rounded-full">

                    <Package size={18}/>

                  </div>

                  <div>

                    <p className="ship-details text-red-600">

                      Package

                    </p>

                    <p className="ship-text text-gray-400 text-sm">

                      Regular Packaging

                    </p>

                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="bg-neutral-900 p-3 rounded-full">

                    <Calendar size={18}/>

                  </div>

                  <div>

                    <p className="ship-details text-red-600">

                      Delivery Time

                    </p>

                    <p className="ship-text text-gray-400 text-sm">

                      3-4 Working Days

                    </p>

                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <div className="bg-neutral-900 p-3 rounded-full">

                    <Truck size={18}/>

                  </div>

                  <div>

                    <p className="ship-details text-red-600">

                      Estimation Arrive

                    </p>

                    <p className="ship-text text-gray-400 text-sm">

                      10-12 Oct 2026

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      <ReviewsSection/>

      <RelatedProducts/>

    </>

  );

};

export default ProductDetails;