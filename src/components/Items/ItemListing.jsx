import React, { useState, useRef } from "react";
import Slider from "../Slider";
import Stars from "../UI/Stars";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../store/userSlice";

const ItemListing = (props) => {
  const { item } = props;
  const [current, setCurrent] = useState(0);
  const { isLoggedIn, location } = useSelector((state) => state.user);
  const [changeLocation, setChangeLocation] = useState(false);
  const dispatch = useDispatch();
  const loc = useRef("");

  const renderContent = (array) => {
    return array.map((item) => {
      const highlight =
        array.indexOf(item) === current && "border-2 border-orange-400";
      const hover = array.indexOf(item) !== current && "hover:border";
      return (
        <img
          className={`${highlight} w-[100px] m-1 ${hover} max-md:w-[50px]`}
          key={item}
          src={item}
          alt=""
          onClick={() => {
            setCurrent(array.indexOf(item));
          }}
        />
      );
    });
  };

  const defaultLocation = (
    <div className="">
      <span>
        <p>{`Shop Locally in ${location.city}, ${location.state}`}</p>
      </span>
      <span>
        <p
          className="underline font-bold"
          onClick={() => setChangeLocation(true)}
        >
          Change
        </p>
      </span>
    </div>
  );

  const setNewLocation = (
    <div className="flex justify-between">
      <input
        ref={loc}
        className="p-1 mr-3 rounded-md w-[100%]"
        placeholder={`${location.city},${location.state}`}
        type="text"
      />
      <Button
        className="bg-yellow-400"
        onClick={() => {
          setChangeLocation(true);
          dispatch(setLocation(loc.current.value));
        }}
      >
        Change
      </Button>
    </div>
  );

  return (
    <section className="grid grid-cols-10 bg-slate-300 m-auto text-left max-w-[1020px]">
      <div className="col-span-10 px-5 mt-5">Home / item</div>
      <div className="col-span-6 w-[100%] max-sm:col-span-10">
        <figure className="w-[500px] w-[100%] p-5">
          <a href="">
            <img className="w-[100%]" src={item.images[current]} alt="" />
          </a>
          <Slider
            className="my-5 max-sm:mb-0"
            maxWidth={500}
            arrowSize="h-12 w-8"
            scrollSpeed={90}
          >
            {renderContent(item.images)}
          </Slider>
        </figure>
      </div>

      <div className="p-5 w-[100%] col-span-4 max-sm:col-span-10">
        <div className="flex flex-col">
          <div className="max-sm:order-3">
            <h1 className="tracking-wide text-2xl font-extrabold text-slate-800 lg:pt-4">
              {item.name}
            </h1>
            <h2 className="text-xl font-bold text-slate-600 py-2">
              {item.color}
            </h2>
            <div className="flex items-center justify-between">
              <Stars score={item.averageScore} />
              <a href="" className="text-sm tracking-tight underline">
                {`${item.reviews.length} reviews`}
              </a>
            </div>
          </div>

          <hr className="my-5 order-2" />

          <div className="items-center max-sm:order-1">
            <h1 className="font-extrabold text-2xl mr-6">{`$ ${item.price}`}</h1>
            <div className="my-4">
              <span className="text-sm">
                {`or make ${5} interest free payment of $${(
                  item.price / 5
                ).toFixed(2)} with Affirm. `}
              </span>
              <span className="underline">Learn More</span>
            </div>
          </div>
        </div>

        <Button className="bg-yellow-500 w-[100%] my-4 text-slate-800 hover:bg-yellow-400">
          Add to cart
        </Button>

        {/* arrival time */}
        <div>
          <div className="my-8">
            <span>
              <img src="" alt="" />
            </span>
            <p className="font-bold">Arrives before {} for FREE</p>
            <p className="">Shipping options to {}</p>
          </div>

          {!isLoggedIn && (
            <div className="my-8">
              <span></span>
              <p className="font-bold">Member Gets Free 2-day shipping</p>
              <div>login or don't have acount yet? sign up</div>
            </div>
          )}

          <div className="my-8">
            <span></span>
            <p className="font-bold">Free Return Within 30 Days</p>
          </div>
        </div>

        <hr />
        <div className="py-6">
          <h1 className="font-bold">PICK UP IN STORE</h1>
          <div className="py-4">
            {!changeLocation ? defaultLocation : setNewLocation}
          </div>
          <p>Unfortunately, this item is not in stock near you.</p>
          <a className="text-slate-700" href="">
            Click to see store near you
          </a>
        </div>
      </div>
    </section>
  );
};

export default ItemListing;
