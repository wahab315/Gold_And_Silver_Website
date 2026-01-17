import React, { useState, useEffect } from "react";
import { homeData } from "../../data/home";
import ChooseUsSkeleton from "../skeletions/ChooseUsSkeleton";

const ChooseUs = () => {
  const [loading, setLoading] = useState(true);
  const { header, title, description, experience, benefits } =
    homeData.whyChooseUs;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ChooseUsSkeleton />;
  }

  return (
    <>
      <div
        className="bg-black py-17.5 border-t border-b border-transparent
            [border-image:linear-gradient(180deg,#A08122_0%,#6F5813_100%)_1]"
      >
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-10 items-center">
            {/* Left Panel - Experience Highlight */}
            <div className="col-span-12 lg:col-span-6 xl:mx-auto">
              <div className="relative w-full xl:w-100 h-90.75 rounded-2xl p-0.5 bg-linear-to-b from-[#A08122] to-[#6F5813]">
                <div className="w-full h-full bg-[#1B170C] rounded-2xl flex items-center justify-center">
                  <div className="">
                    <img
                      src={experience.shieldIcon}
                      alt="shield"
                      className="w-32 h-32"
                    />
                  </div>
                  <div className="absolute top-72 right-0 xl:left-64 w-46.5 h-23.25 bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)] rounded-2xl flex flex-col items-center justify-center">
                    <div className="text-black text-4xl">
                      {experience.years}
                    </div>
                    <div className="font-playfair-display text-base">
                      {experience.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0">
              <div className="">
                <h3 className="text-gradient-gold text-base font-medium mb-4">
                  {header}
                </h3>
                <h1 className="text-2xl md:text-[28px] lg:text-[40px] font-semibold font-playfair-display text-white mb-5">
                  {title}
                </h1>
                <p className="text-[#DBDBDB] text-base md:text-xl">
                  {description}
                </p>

                {/* Benefits List */}
                <div className="flex flex-col gap-5 mt-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-13.25 h-13.25 bg-[#39311D] rounded-2xl flex items-center justify-center shrink-0">
                        <img
                          src={benefit.icon}
                          alt={benefit.title}
                          className="w-7 h-7"
                        />
                      </div>
                      <div>
                        <h3 className="text-white text-base sm:text-xl font-semibold font-playfair-display">
                          {benefit.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#DBDBDB]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
