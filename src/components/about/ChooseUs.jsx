import React from "react";
import { aboutData } from "@/data/About";

const ChooseUs = () => {
  const { whyChooseUs } = aboutData;
  const { title, highlightTitle, cards } = whyChooseUs;

  return (
    <>
      <div className="bg-black py-10 lg:py-20">
        <div className="container">
          {/* Title Section */}
          <div className="flex flex-col items-center gap-4 mb-10 lg:mb-16">
            <h1
              className="text-2xl md:text-[28px] lg:text-[40px] font-semibold font-playfair-display text-white text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {title}{" "}
              <span
                className="text-gradient-gold animate-fade-in"
                style={{ animationDelay: "0.4s", opacity: 0 }}
              >
                {highlightTitle}
              </span>
            </h1>
          </div>

          {/* Cards Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-center max-w-5xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-[15px] p-6 animate-fade-in-up max-w-[480px] w-full mx-auto md:mx-0"
                style={{
                  animationDelay: `${0.6 + index * 0.2}s`,
                  opacity: 0,
                  minHeight: "161px",
                }}
              >
                <div className="flex items-start gap-5 h-full">
                  {/* Icon - Circular with gold border */}
                  <div className="w-13.25 h-13.25 shrink-0 rounded-xl flex items-center justify-center bg-[#39311D]">
                    <img src={card.icon} alt={card.title} className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h2 className="text-white text-xl font-bold mb-1">
                      {card.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[#DBDBDB] text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
