import React from "react";
import SearchBar from "../UI/SearchBar";
import ProductThumbNail from "../UI/ProductThumbNail";
import closeIcon from "../../static/icons/close.svg";

const SearchPopUp = (props) => {
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
          // size="mini"
        />
      );
    });
  };

  const mostSearched = (
    <div>
      <p className="py-2 text-gray-500">Top selling products</p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        {bestSellTop3()}
      </div>
    </div>
  );

  const renderResult = (
    <div>
      <p className="py-2 text-gray-500">Are you looking for these goodies ?</p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        {bestSellTop3()}
      </div>
    </div>
  );

  return (
    <div className="p-8 w-screen shadow-lg bg-white z-30 fixed">
      <img
        className="w-5 absolute right-8 cursor-pointer"
        src={closeIcon}
        alt="close button"
        onClick={() => props.setShowSearch(false)}
      />
      <SearchBar />
      {renderResult && mostSearched}
    </div>
  );
};

export default SearchPopUp;
