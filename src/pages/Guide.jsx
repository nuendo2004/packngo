import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/UI/DropDown";
import Button from "../components/UI/Button";

const Guide = () => {
  const list = ["Men", "Women", "LGBTQ+", "Gender Neutral"];
  return (
    <div className="text-left p-10">
      <div></div>
      <input
        type="text"
        placeholder="Are you looking for gender-specific backpack?"
      />
      <DropDown
        list={list}
        default={"I rather not anwsering this one."}
        width={"300px"}
      />
      <Button>
        <Link>Next</Link>
      </Button>
      <Link>Skip, Just Show Me All the Products</Link>
    </div>
  );
};

export default Guide;
