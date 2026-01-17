import React, { useState, useEffect } from "react";
import { homeData } from "../../data/home";
import ServicesSkeleton from "../skeletions/ServicesSkeleton";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const { header, title, description, servicses_cards } = homeData.services;
  const cards = servicses_cards;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ServicesSkeleton />;
  }

  return (
    <>
      <div className=" bg-black py-15 xl:py-30">
        <div className="container">
          {/* Services top */}
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-gradient-gold text-base font-medium">
              {header}
            </h3>
            <h1 className="font-playfair-display text-2xl sm:text-3xl md:text-[40px] font-semibold text-white">
              {title}
            </h1>
            <p className="text-[#DBDBDB] text-base sm:text-xl lg:w-[50%] mx-auto md:mt-4">
              {description}
            </p>
          </div>
          {/* Services cards */}
          <div className="grid grid-cols-12 gap-6 mt-10 xl:mt-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 xl:col-span-4 bg-[#111111] shadow-[0px_1px_9.4px_0px_#6F58134D] rounded-2xl py-10 flex flex-col items-center"
              >
                <div className="bg-[#39311D] w-18 h-19.5 flex items-center justify-center rounded-[21px] mb-2">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10.75 h-10.75"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h2 className="text-xl text-gradient-gold font-medium">
                    {card.title}
                  </h2>
                  <p className="text-[#DBDBDB] text-base px-16 lg:px-26.75">
                    {card.description}
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

export default Services;
