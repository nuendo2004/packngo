import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Header/Hero";
import OnSale from "../components/body/OnSale";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OnSale />
    </div>
  );
};

export default Home;
