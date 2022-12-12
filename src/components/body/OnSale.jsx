import React, { useState, useRef } from "react";
import ProductThumbNail from "../UI/ProductThumbNail";
import styles from "./onSale.module.css";
import arrow from "../../static/icons/arrow.png";

const onSale = [
  {
    id: 1,
    profilePic:
      "https://www.montblanc.com/variants/images/19325877437076262/A/w570.jpg",
    name: "BackPack A",
    price: 73,
    discount: 10,
    url: "",
  },
  {
    id: 2,
    profilePic:
      "https://www.montblanc.com/variants/images/17411127376657523/A/w570.jpg",
    name: "BackPack B",
    price: 64,
    discount: 20,
    url: "",
  },
  {
    id: 3,
    profilePic:
      "https://media.dior.com/couture/ecommerce/media/catalog/product/A/U/1600868701_1VOBA088YKY_H00N_E01_GH.jpg",
    name: "BackPack C",
    price: 54.5,
    discount: 30,
    url: "",
  },
  {
    id: 4,
    profilePic:
      "https://www.montblanc.com/variants/images/19325877437076262/A/w570.jpg",
    name: "BackPack A",
    price: 73,
    discount: 30,
    url: "",
  },
  {
    id: 5,
    profilePic:
      "https://www.montblanc.com/variants/images/17411127376657523/A/w570.jpg",
    name: "BackPack B",
    price: 64,
    discount: 30,
    url: "",
  },
  {
    id: 6,
    profilePic:
      "https://media.dior.com/couture/ecommerce/media/catalog/product/A/U/1600868701_1VOBA088YKY_H00N_E01_GH.jpg",
    name: "BackPack C",
    price: 54.5,
    discount: 30,
    url: "",
  },
];

const OnSale = () => {
  const [currentX, setX] = useState(0);
  const slider = useRef(0);

  const renderProducts = onSale.map((item) => {
    return (
      <ProductThumbNail
        key={item.id}
        className="mx-2"
        name={item.name}
        img={item.profilePic}
        price={item.price}
        discount={item.discount}
        color={item.color}
      />
    );
  });

  const rightScrollStoper =
    currentX < 0 && Math.abs(currentX) > slider.current.clientWidth
      ? "hidden"
      : "";
  const leftScrollStoper =
    currentX > slider.current.clientWidth ? "hidden" : "";

  return (
    <section className="py-20">
      <h1 className="py-8 font-extrabold text-2xl space-x-2 tracking-wider text-gray-700">
        PEOPLE ARE LOOKING AT
      </h1>
      <div className={styles.slider_frame}>
        <div
          className={`${styles.arrows} ${leftScrollStoper} absolute w-10 h-20 top-[31%] rounded-sm flex items-center left-0 z-10 bg-white opacity-70 shadow-sm`}
          onClick={() => setX(currentX + 300)}
        >
          <img className="h-12 rotate-180 cursor-pointer" src={arrow} alt="" />
        </div>

        <div
          className={styles.carousel}
          style={{
            transform: `translateX(${currentX}px)`,
            transition: "all 0.3s ease-in",
          }}
        >
          {renderProducts}
        </div>

        <div
          ref={slider}
          className={`${styles.arrows} ${rightScrollStoper} absolute w-10 h-20 top-[31%] rounded-sm flex items-center right-0 z-10 bg-white opacity-70 shadow-sm`}
          onClick={() => setX(currentX - 300)}
        >
          <img className="h-12 cursor-pointer " src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OnSale;
