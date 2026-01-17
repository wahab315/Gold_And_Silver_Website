import React from "react";
import { aboutData } from "@/data/About";

const OurTeam = () => {
  const { meetOurTeam } = aboutData;
  const { title, highlightTitle, subtitle, members } = meetOurTeam;

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
            <p
              className="text-base md:text-xl text-[#DBDBDB] text-center font-pro-display animate-fade-in-up"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              {subtitle}
            </p>
          </div>

          {/* Team Members */}
          <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-16 xl:gap-20">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{
                  animationDelay: `${0.8 + index * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Profile Icon - Circular with gold border */}
                <div className="w-30 h-29 rounded-full border-2 border-[#A08122] flex items-center justify-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-white text-xl lg:text-2xl font-bold font-playfair-display mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-gradient-gold text-sm lg:text-base  uppercase tracking-wider mb-3">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-[#DBDBDB] text-base lg:text-lg max-w-xs">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
