import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { servicesData } from "../data/services";
import YourItems from "../components/services/YourItems";
import LuxuryItems from "../components/services/LuxuryItem";
import PawnServices from "../components/services/PawnServices";
import LuxuryWatches from "../components/services/LuxuryWatches";
import Brands from "../components/home/Brands";
import HowItWorks from "../components/services/HowItWorks";
import GetStarted from "../components/services/GetStarted";

const Services = () => {
  const { title, highlightTitle, description } = servicesData.hero;
  const sellYourItemsData = servicesData.sellYourItems;

  return (
    <>
      <SectionTitle
        mainTitle="Our"
        highlightTitle="Services"
        description="Buy, sell, or pawn luxury watches and fine jewelry with complete confidence"
      />
      {/* Services Top */}
      <div className="bg-black py-14 flex flex-col gap-8">
        <h1
          className="text-3xl sm:text-5xl md:text-[40px] text-center text-[#DBDBDB]! font-semibold font-playfair-display animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          {title}{" "}
          <span
            className="text-gradient-gold animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {highlightTitle}
          </span>
        </h1>
        <p
          className="text-base text-center max-w-220 mx-3 md:mx-auto sm:text-xl text-[#DBDBDB] font-pro-display animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          {description}
        </p>
      </div>
      {/* YourItems */}
      <YourItems data={sellYourItemsData} />
      {/* LixuryItems */}
      <LuxuryItems data={servicesData.buyLuxuryItems} />
      {/* PawnServices */}
      <PawnServices data={servicesData.pawnServices} />
      {/* LuxuryWatches */}
      <LuxuryWatches />
      {/* Brands */}
      <Brands />
      {/* HowItWorks */}
      <HowItWorks />
      {/* GetStared */}
      <GetStarted />
    </>
  );
};

export default Services;
