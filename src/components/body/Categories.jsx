import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Category = [
  {
    name: "Casual",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/brevite-gOHBaIl5WRc-unsplash.jpg",
  },
  {
    name: "Commute",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/pexels-malte-luk-2432299.jpg",
  },
  {
    name: "School",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/daiga-ellaby-JZ51o_-UOY8-unsplash.jpg",
  },
  {
    name: "Gear",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/pexels-athena-2962099.jpg",
  },
  {
    name: "Hiking",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/pexels-lalu-fatoni-732632.jpg",
  },
  {
    name: "Tactical",
    image:
      "https://dummy-backpack-store.s3.us-west-1.amazonaws.com/front-end/2-bro-s-media-h59Z9Kor1YY-unsplash.jpg",
  },
];

const Categories = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const renderCards = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.name}
          className="w-[320px] h-[580px] m-auto flex justify-center bg-cover relative overflow-hidden hover:bg-enlarge bg-center
          max-sm:w-[100%] max-sm:h-[390px] "
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="w-[100%] h-[100%] hover:first:bg-slate-50/70 flex justify-center items-center group">
            <div className="absolute w-[100%] h-[100%] top-0 group-hover:border" />
            <button className="px-4 py-1 h-auto rounded-sm text-white shadow-sm box-content font-extrabold border-black group-hover:text-black group-hover:border-[3px] hover:bg-yellow-500 z-10">
              {card.name}
            </button>
          </div>
        </Card>
      );
    });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 max-w-6xl m-auto my-6 box-border max-sm:p-3 max-sm:gap-y-3">
      {renderCards(Category)}
    </div>
  );
};

export default Categories;
