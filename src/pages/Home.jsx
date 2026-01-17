import React from "react";
import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import Services from "../components/home/Services";
import FeaturedCollections from "../components/home/FeaturedCollections";
import ChooseUs from "../components/home/ChooseUs";
import GetQuote from "../components/home/GetQuote";
import Experience from "../components/home/Experience";

const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <Services />
      <FeaturedCollections />
      <ChooseUs />
      <GetQuote />
      <Experience />
    </>
  );
};

export default Home;
