import React from "react";
import SearchBar from "../UI/SearchBar";
import ProductThumbNail from "../UI/ProductThumbNail";

const SearchPopUp = () => {
  const bestSelling = [
    {
      id: 1,
      profilePic:
        "https://www.montblanc.com/variants/images/19325877437076262/A/w570.jpg",
      name: "BackPack A",
      price: 73,
      url: "",
    },
    {
      id: 2,
      profilePic:
        "https://www.montblanc.com/variants/images/17411127376657523/A/w570.jpg",
      name: "BackPack B",
      price: 64,
      url: "",
    },
    {
      id: 3,
      profilePic:
        "https://media.dior.com/couture/ecommerce/media/catalog/product/A/U/1600868701_1VOBA088YKY_H00N_E01_GH.jpg",
      name: "BackPack C",
      price: 54.5,
      url: "",
    },
  ];

  const bestSellTop3 = () => {
    const top3 = bestSelling.slice(0, 3);
    return top3.map((item) => {
      return (
        <ProductThumbNail
          key={item.id}
          img={item.profilePic}
          name={item.name}
          price={item.price}
          url={item.url}
          size="mini"
        />
      );
    });
  };
  const mostSearched = () => {};

  const renderResult = () => {};

  return (
    <div className="p-8 w-screen shadow-lg bg-white z-20 fixed">
      <SearchBar />
      <div>
        <div className="flex justify-center">{bestSellTop3()}</div>
      </div>
    </div>
  );
};

export default SearchPopUp;
