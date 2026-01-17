import React from "react";
import { assets } from "../../constants/assets";
import { homeData } from "../../data/home";

const Banner = () => {
  return (
    <>
      <div
        className="relative flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.bannerImage})` }}
      >
        <div className="container">
          {/* Banner content */}
          <div className="text-center flex flex-col gap-3 sm:gap-6">
            <h1
              className="text-3xl sm:text-5xl md:text-[58px] text-[#DBDBDB]! font-semibold lg:w-[80%] xl:w-[50%] mx-auto font-playfair-display animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {homeData.banner.title}
              <span
                className="text-gradient-gold mt-3 block animate-fade-in"
                style={{ animationDelay: "0.6s", opacity: 0 }}
              >
                {homeData.banner.subTitle}
              </span>
            </h1>
            <p
              className="text-base sm:text-xl text-[#DBDBDB] md:w-[70%] lg:w-[50%] xl:w-[60%] mx-auto font-pro-display animate-fade-in-up"
              style={{ animationDelay: "0.8s", opacity: 0 }}
            >
              {homeData.banner.description}
            </p>
            {/* buttons group */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <button
                className="bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)]! w-70 rounded-[50px] h-14.5 text-black font-semibold! animate-slide-in-left hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "1s", opacity: 0 }}
              >
                Get Free Quote
              </button>
              <button
                className="bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)]! w-70 rounded-[50px] h-14.5 text-black font-semibold! animate-slide-in-right hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "1.2s", opacity: 0 }}
              >
                Browse Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
