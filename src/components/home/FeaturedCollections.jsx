import React, { useState, useEffect } from "react";
import { homeData } from "../../data/home";
import { Link } from "react-router-dom";
import { assets } from "../../constants/assets";
import FeaturedCollectionsSkeleton from "../skeletions/FeaturedCollectionsSkeleton";

const FeaturedCollections = () => {
  const [loading, setLoading] = useState(true);
  const { header, title, featured_Cards } = homeData.featured;
  const cards = featured_Cards;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FeaturedCollectionsSkeleton />;
  }

  return (
    <>
      <div className="bg-black py-15 xl:py-30 relative overflow-hidden">
        {/* Decorative blurred ellipse */}
        <div
          className="absolute w-1/4 h-50 rounded-full opacity-30 "
          style={{
            backgroundColor: "#A08122",
            top: "-25px",
            left: "28%",
            transform: "translateX(200px)",
            filter: "blur(80px)",
          }}
        ></div>
        <div className="container text-white relative z-10">
          {/* Featured header */}
          <div>
            <h3 className="text-gradient-gold text-base font-medium">
              {header}
            </h3>
            <div className="flex flex-wrap items-center justify-between mt-3">
              <h1 className="text-2xl sm:text-[28px] lg:text-[40px] font-semibold font-playfair-display">
                {title}
              </h1>
              <Link
                to="/featured"
                className="text-gradient-gold text-xl flex items-center gap-2"
              >
                View All
                <img
                  src={assets.mingcute_right}
                  alt="arrow-right"
                  className="w-4.5 h-4.5"
                />
              </Link>
            </div>
          </div>
          {/* Featured cards */}
          <div className="grid grid-cols-12 gap-5 mt-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-[#111111] rounded-2xl overflow-hidden"
              >
                <div className="relative">
                  <div className="relative w-full aspect-308/230 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover rounded-t-2xl"
                      loading="lazy"
                    />
                  </div>

                  {card.tag && (
                    <span className="absolute top-4.25 left-5 text-sm font-semibold text-[#252523] font-playfair-display bg-[linear-gradient(132.89deg,#B78648_2%,#FBE495_93.92%)] rounded-[10px] w-15.75 h-6.5 flex items-center justify-center">
                      {card.tag}
                    </span>
                  )}
                  {card.icon && (
                    <div className="absolute top-4.25 right-5 w-7.25 h-7.25 flex items-center justify-center rounded-full bg-black">
                      <img
                        src={card.icon}
                        alt="favorite"
                        className="w-4.25 h-4.25 cursor-pointer"
                      />
                    </div>
                  )}
                </div>
                <div className="px-5 py-8">
                  <h2 className="font-playfair-display text-xl font-medium text-center line-clamp-1">
                    {card.name}
                  </h2>
                  <p className="text-[#DBDBDB] text-base py-2 text-center">
                    {card.model}
                  </p>
                  <p className="text-gradient-gold text-xl font-medium text-center">
                    {card.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCollections;
