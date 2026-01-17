import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetQuoteSkeleton from "../skeletions/GetQuoteSkeleton";

const GetQuote = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <GetQuoteSkeleton />;
  }

  return (
    <>
      <div className="py-15 xl:py-30 bg-black">
        <div className="container">
          {/* Top section */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-[40px] text-[#DBDBDB]! font-semibold  font-playfair-display text-center">
              Ready to Get 
              <span className="text-gradient-gold">Your Quote?</span>
            </h1>
            <p className="text-base sm:text-xl text-[#DBDBDB] text-center max-w-162.5 mx-auto">
              Experience premium service with the most trusted name in luxury
              watch and jewelry exchange.
            </p>
          </div>
          {/* buttons group */}
          <div className="flex flex-wrap items-center justify-center gap-5 mt-7 md:mt-14">
            <Link
              to="#"
              className="inline-flex items-center justify-center bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)]! rounded-[50px] text-xl w-66 h-14.5 text-black font-semibold! "
            >
              Get Free Quote
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center border-2 border-[#C59F26] text-gradient-gold text-xl w-66 h-14.5 text-black font-semibold! rounded-[50px] "
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQuote;
