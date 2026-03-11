import React, { useState } from "react";
import {
  Heart,
  Truck,
  Calendar,
  Package,
  Percent
} from "lucide-react";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";


const ProductDetails = () => {

  const images = [
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    "https://images.unsplash.com/photo-1618354691229-88d47f285158"
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [size, setSize] = useState("M");

  return (

    <>

    <div className="bg-black text-white min-h-screen pt-28">

      {/* BREADCRUMB */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 text-gray-400 text-sm">
        Home • Product Details
      </div>


      {/* PRODUCT SECTION */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12">


        {/* LEFT IMAGE */}

        <div>

          <img
            src={mainImage}
            className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-xl"
            alt="product"
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

          <h1 className="text-2xl sm:text-3xl font-semibold">
            Loose Fit Hoodie
          </h1>

          <p className="text-red-600 text-xl sm:text-2xl mt-2">
            ₹2,999
          </p>


          {/* SIZE */}

          <div className="mt-8">

            <p className="text-gray-400 mb-3">
              Select Size
            </p>

            <div className="flex flex-wrap gap-3">

              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-5 py-2 rounded-full border text-sm transition ${
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

            <button className="bg-red-600 px-10 py-3 rounded-full hover:bg-red-700 transition">
              Add To Cart
            </button>

            <button className="bg-red-600 px-10 py-3 rounded-full hover:bg-red-700 transition">
              Buy Now
            </button>

            <button className="border border-neutral-700 p-3 rounded-full w-fit">
              <Heart size={18}/>
            </button>

          </div>


          {/* DESCRIPTION */}

          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-3">
              Description & Fit
            </h2>

            <p className="text-red-400 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam tempor elit ac pharetra posuere ligula turpis
              elementum felis ut hendrerit felis odio non dolor.
            </p>

          </div>


          {/* SHIPPING */}

          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-6">
              Shipping
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


              <div className="flex items-center gap-4">

                <div className="bg-neutral-900 p-3 rounded-full">
                  <Percent size={18}/>
                </div>

                <div>
                  <p className="text-red-600">Discount</p>
                  <p className="text-gray-400 text-sm">DISC50%</p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <div className="bg-neutral-900 p-3 rounded-full">
                  <Package size={18}/>
                </div>

                <div>
                  <p className="text-red-600">Package</p>
                  <p className="text-gray-400 text-sm">Regular Packaging</p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <div className="bg-neutral-900 p-3 rounded-full">
                  <Calendar size={18}/>
                </div>

                <div>
                  <p className="text-red-600">Delivery Time</p>
                  <p className="text-gray-400 text-sm">3-4 Working Days</p>
                </div>

              </div>


              <div className="flex items-center gap-4">

                <div className="bg-neutral-900 p-3 rounded-full">
                  <Truck size={18}/>
                </div>

                <div>
                  <p className="text-red-600">Estimation Arrive</p>
                  <p className="text-gray-400 text-sm">10-12 Oct 2026</p>
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
