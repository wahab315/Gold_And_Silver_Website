import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YourItemsSkeleton from "../skeletions/YourItemsSkeleton";

const YourItems = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading - you can replace this with actual data fetching logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <YourItemsSkeleton />;
  }

  if (!data) return null;

  const { header, title, description, features, button, icon, tickIcon } = data;

  return (
    <>
      <div className="bg-black py-20">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-10 items-center">
            {/* left Panel */}
            <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0 order-2">
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

                {/* features List */}
                {features.length > 0 ? (
                  <ul className="flex flex-col gap-3.5 mt-5">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        {tickIcon && (
                          <div className="">
                            <img src={tickIcon} alt="tick" className="" />
                          </div>
                        )}
                        <p className="text-[#DBDBDB]! text-base">{feature}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-[#DBDBDB] font-pro-display mt-8">
                    No features available.
                  </p>
                )}
                {/* Button */}
                {button && (
                  <div className="mt-8">
                    <Link
                      to={button.link}
                      className="inline-flex items-center justify-center bg-[linear-gradient(256.9deg,#B18325_6.41%,#D7BF75_98.66%)]! rounded-[50px] text-xl w-full sm:w-84.5 h-14.5 text-black font-semibold!"
                    >
                      {button.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {/* right Panel */}
            <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0 order-1">
              <div className="w-full xl:w-100 h-80 rounded-2xl p-0.5 bg-linear-to-b from-[#A08122] to-[#6F5813]">
                <div className="w-full h-full bg-[#1B170C] rounded-2xl flex items-center justify-center">
                  <div className="">
                    <img src={icon} alt="shield" className="w-32 h-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourItems;
