import React from "react";

const ProductThumbNail = (props) => {
  const redirect = () => {
    console.log("to " + props.url);
  };

  const style = {
    pic: `${props.size === "mini" ? "h-20 w-20" : "h-44 w-44"} m-3 m-auto`,
    price: `${props.size === "mini" ? "text-xs" : ""}`,
    name: `${
      props.size === "mini" ? "mt-2 mb-1 text-base" : "mt-5 mb-1 text-lg"
    }`,
  };

  const getSalePrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  const renderDiscountedPrice = props.discount > 0 && (
    <div className=" m-auto">
      <h3 className="inline text-xs font-bold text-gray-700">{"NOW "}</h3>
      <span className="text-red-600 font-bold">
        $ {getSalePrice(props.price, props.discount).toFixed(2)}
      </span>
    </div>
  );

  return (
    <div
      onClick={redirect}
      className={`${props.className} hover:cursor-pointer`}
    >
      <img className={style.pic} src={props.img} alt="" />
      <h3 className={style.name}>{props.name}</h3>
      <p
        className={`${style.price} ${
          props.discount > 0 ? "line-through text-gray-600" : ""
        }`}
      >
        $ {props.price.toFixed(2)}
      </p>
      {props.discount > 0 && (
        <p className="text-red-600 text-sm">{`${props.discount}% off`}</p>
      )}
      {renderDiscountedPrice}
    </div>
  );
};

export default ProductThumbNail;
