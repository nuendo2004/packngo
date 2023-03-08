import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductThumbNail from "../components/UI/ProductThumbNail";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //fetch()

    console.log("Fetching content...");
  }, [cart]);

  return <div></div>;
};

export default Cart;
