import React from "react";
import { assets } from "@/constants/assets";

const Story = () => {
  const storyData = {
    title: "Our Story",
    paragraphs: [
      "Gold & Silver was born in 2008, at a time when trust and real value mattered more than ever. What began as a simple initiative between two brothers soon became a lifelong commitment to integrity, transparency, and fair business.",
      "We started by buying gold, guided by one clear belief: every client deserves honesty, respect, and the best possible value. From the beginning, our growth was driven not by advertising, but by reputation and word of mouth—clients returned because they trusted our evaluations and our ethics.",
      "By the early 2010s, Gold & Silver expanded into the pawn business, bringing a new standard to the market. Through disciplined valuation practices and deep market knowledge, we became known for offering some of the most competitive rates in the industry, always prioritizing fairness and discretion.",
      "In 2011, our vision grew further as we entered the world of luxury watches. What began with a curated selection quickly evolved into something much larger. Through experience, expertise, and global sourcing, Gold & Silver built what is now recognized as the largest watch inventory in the Dominican Republic, featuring some of the most sought-after timepieces in the market.",
      "Today, Gold & Silver stands as a family-driven company with multiple business divisions, unified by the same values that defined us from the start: trust, professionalism, and long-term relationships. Whether in gold, pawn services, or luxury watches, our mission remains the same—to deliver real value with absolute transparency.",
    ],
    icon: assets.clock_circle,
  };

  return (
    <>
      <div className="bg-black lg:py-20">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-10 items-center">
            {/* left Panel */}
            <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0">
              <div className="">
                <h1 className="text-2xl md:text-[28px] lg:text-[40px] font-semibold font-playfair-display text-white mb-5">
                  Our <span className="text-gradient-gold">Story</span>
                </h1>
                <div className="flex flex-col gap-4">
                  {storyData.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[#DBDBDB] text-base md:text-xl"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* right Panel */}
            <div className="col-span-12 lg:col-span-6 xl:mx-auto my-10 lg:my-0">
              <div className="w-full xl:w-100 h-80 rounded-2xl p-0.5 bg-linear-to-b from-[#A08122] to-[#6F5813]">
                <div className="w-full h-full bg-[#1B170C] rounded-2xl flex items-center justify-center">
                  <div className="">
                    <img
                      src={storyData.icon}
                      alt="clock"
                      className="w-32 h-32"
                    />
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

export default Story;
