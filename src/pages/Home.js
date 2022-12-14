import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import OnSale from "../components/body/OnSale";
import Story from "../components/body/Story";
import Categories from "../components/body/Categories";
import Recommand from "../components/body/Recommand";
import LifeStyleBanner from "../components/body/LifeStyleBanner";
import ItemOfTheDay from "../components/body/ItemOfTheDay";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OnSale />
      <Story />
      <Categories />
      <LifeStyleBanner />
      <ItemOfTheDay />
      <Recommand />
    </div>
  );
};

export default Home;
