import React, { useState, useEffect } from "react";
import { servicesData } from "../../data/services";
import HowItWorksSkeleton from "../skeletions/HowItWorksSkeleton";

const HowItWorks = () => {
  const [loading, setLoading] = useState(true);
  const { title, steps } = servicesData.howItWorks;

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HowItWorksSkeleton />;
  }

  return (
    <>
      <div className="py-10 sm:py-20 bg-black">
        <div className="container">
          <div className="flex flex-col gap-17.5">
            {/* title */}
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-center text-[#DBDBDB]! font-semibold font-playfair-display">
              {title}
            </h1>
            {/* steps cards */}
            <div className="grid grid-cols-12 xl:gap-18.5">
              {steps.map((step, index) => (
                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 mb-6 xl:mb-0">
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <div className="w-17 h-16.5 bg-[#111111] border border-[#C59F26] rounded-full flex items-center justify-center">
                      <span className="text-[#C59F26] text-[32px] font-semibold font-playfair-display">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-gradient-gold text-xl font-medium font-playfair-display">
                      {step.title}
                    </h3>
                    <p className="text-[#DBDBDB] text-xl text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
