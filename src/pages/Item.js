import React from "react";
import ItemListing from "../components/Items/ItemListing";
import ItemDetail from "../components/Items/ItemDetail";
import ItemUpSell from "../components/Items/ItemUpSell";

const Item = () => {
  const item = {
    name: "BACKPACK",
    size: "large",
    color: "black",
    price: 89.99,
    images: [
      "https://www.montblanc.com/variants/images/1647597286298310/A/w2500.jpg",
      "https://www.montblanc.com/variants/images/1647597286298310/B/w2500.jpg",
      "https://www.montblanc.com/variants/images/1647597286298310/C/w2500.jpg",
      "https://www.montblanc.com/variants/images/1647597286298310/D/w2500.jpg",
      "https://www.montblanc.com/variants/images/1647597286298310/E/w2500.jpg",
      "https://www.montblanc.com/variants/images/1647597286298310/F/w2500.jpg",
    ],
    detail: "",
    reviews: [
      { star: 4, comment: "", userName: "" },
      { star: 1, comment: "", userName: "" },
    ],
    averageScore: 3.2,
  };

  return (
    <div>
      <ItemListing item={item} />
      <ItemDetail item={item} />
      <ItemUpSell item={item} />
    </div>
  );
};

export default Item;
