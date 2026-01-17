import React, { useState, useEffect } from "react";
import { homeData } from "../../data/home";
import BrandsSkeleton from "../skeletions/BrandsSkeleton";

const Brands = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BrandsSkeleton />;
  }

  return (
    <>
      <div
        className="py-10 bg-black border-t border-b border-transparent
            [border-image:linear-gradient(180deg,rgba(89,89,89,0.82)_0%,#1D1D1D_100%)_1]"
      >
        <div className="container flex flex-col gap-4 xl:gap-7.5">
          <h2 className="text-base text-gradient-gold text-center">
            {homeData.brands.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-11.25 lg:gap-y-5">
            {homeData.brands.brands.map((brand, index) => (
              <div key={index}>
                <span className="font-playfair-display text-white text-xl cursor-pointer">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
