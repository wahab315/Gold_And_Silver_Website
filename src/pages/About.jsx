import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/common/SectionTitle";
import GetStarted from "@/components/services/GetStarted";
import CountDown from "@/components/about/CountDown";
import { servicesData } from "@/data/services";
import Story from "@/components/about/Story";
import OurTeam from "@/components/about/OurTeam";
import ChooseUs from "@/components/about/ChooseUs";

const About = () => {
  const sellYourItemsData = servicesData.sellYourItems;
  return (
    <>
      <SectionTitle
        mainTitle="About"
        highlightTitle="Gold & Silver"
        description="Gold & Silver is more than a business.It is the result of two brothers, one vision, and years of earned confidence. "
      />
      <Story data={servicesData.sellYourItems} />
      <CountDown />
      <OurTeam />
      <ChooseUs />
      <GetStarted />
    </>
  );
};

export default About;
