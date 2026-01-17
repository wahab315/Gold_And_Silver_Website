import React from "react";
import { contactUsData } from "../../data/contact-us";

const GetInTouch = () => {
  const { title, highlightTitle, description } = contactUsData.getintouch;
  const { contactCards } = contactUsData.getintouch;

  return (
    <>
      <div className="py-8.75 lg:py-17.5 bg-black">
        <div className="container">
          <div className="flex flex-col gap-5 lg:gap-8">
            <h1 className="text-3xl sm:text-5xl md:text-[40px] text-[#DBDBDB]! font-semibold font-playfair-display">
              {title}{" "}
              <span className="text-gradient-gold">{highlightTitle}</span>
            </h1>
            <p className="text-base max-w-160  sm:text-xl text-[#DBDBDB]">
              {description}
            </p>
            {/* GetInTouch Cards */}
            <div className="grid grid-cols-12 gap-6">
              {contactCards.map((card, index) => (
                <div key={index} className="col-span-12 lg:col-span-6">
                  <div className="flex flex-col items-start justify-center gap-2.5 bg-[#111111] rounded-xl w-full h-45 pl-8 xl:pl-12.5">
                    <h3 className="font-playfair-display text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {Array.isArray(card.content) ? (
                        card.content.map((item, itemIndex) => (
                          <p
                            key={itemIndex}
                            className={`text-base ${
                              card.type === "phone" || card.type === "email"
                                ? "text-gradient-gold cursor-pointer"
                                : "text-[#DBDBDB]"
                            }`}
                          >
                            {item}
                          </p>
                        ))
                      ) : (
                        <p
                          className={`text-base ${
                            card.type === "phone" || card.type === "email"
                              ? "text-gradient-gold"
                              : "text-[#DBDBDB]"
                          }`}
                        >
                          {card.content}
                        </p>
                      )}
                    </div>
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

export default GetInTouch;
