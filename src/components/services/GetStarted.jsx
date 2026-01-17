import React, { useState, useEffect } from "react";
import { homeData } from "../../data/home";
import { Link } from "react-router-dom";
import { assets } from "../../constants/assets";
import ExperienceSkeleton from "../skeletions/ExperienceSkeleton";

const GetStarted = () => {
  const [loading, setLoading] = useState(true);
  const { title, description, apps } = homeData.experience;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ExperienceSkeleton />;
  }

  return (
    <>
      <div
        className="py-15 xl:py-30 bg-black border-t border-b border-[#A08122]"
        style={{
          backgroundImage: `url(${assets.experience_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col gap-8 md:gap-14">
          {/* Top section */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display text-center">
              Ready to Get {""}
              <span className="text-gradient-gold animate-fade-in">
                Started
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#DBDBDB] text-center">
              Whether you're looking to buy, sell, or pawn, we're here to help.
            </p>
          </div>
          {/* Buttons wrapper */}
          <div className="flex flex-wrap items-center justify-center gap-5">
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
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
