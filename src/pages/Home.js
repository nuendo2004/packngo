import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import OnSale from "../components/body/OnSale";
import Story from "../components/body/Story";
import Categories from "../components/body/Categories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OnSale />
      <Story />
      <Categories />
    </div>
  );
};

export default Home;
