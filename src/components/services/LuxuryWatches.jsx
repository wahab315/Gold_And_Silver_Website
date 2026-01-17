import React, { useState, useEffect } from "react";
import { servicesData } from "../../data/services";
import LuxuryWatchesSkeleton from "../skeletions/LuxuryWatchesSkeleton";

const LuxuryWatches = () => {
  const [loading, setLoading] = useState(true);
  const { title, highlightTitle, description, items } =
    servicesData.itemsWeAccept;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LuxuryWatchesSkeleton />;
  }

  return (
    <>
      <style>
        {`
          .gradient-border-card {
            background: transparent;
            transition: background 0.5s ease;
          }
          .gradient-border-card:hover {
            background: linear-gradient(180deg, #A08122 0%, #6F5813 100%);
          }
        `}
      </style>
      <div className="py-5 sm:py-20 bg-black relative overflow-hidden">
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

        <div className="bg-black py-14 flex flex-col gap-8">
          <h1 className="text-3xl sm:text-5xl md:text-[40px] text-center text-[#DBDBDB]! font-semibold font-playfair-display">
            {title}{" "}
            <span className="text-gradient-gold animate-fade-in">
              {highlightTitle}
            </span>
          </h1>
          <p className="text-base text-center max-w-120 mx-auto sm:text-xl text-[#DBDBDB] font-pro-display">
            {description}
          </p>
        </div>
        {/* luxury watches cards */}
        <div className="container">
          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 p-px rounded-xl gradient-border-card"
              >
                <div className="flex flex-col items-center justify-center gap-4 bg-[#111111] w-full h-48 rounded-xl cursor-pointer">
                  <div className="w-17.75 h-17.25 bg-[#39311D] rounded-xl flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-9.75 h-9.75"
                    />
                  </div>
                  <p className="text-xl font-semibold text-[#DBDBDB] text-c font-playfair-display">
                    {item.label}
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

export default LuxuryWatches;
