import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchPopUp from "./SearchPopUp";
import searchIcon from "../../static/icons/search.svg";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <React.Fragment>
      <div className="sticky top-0 bg-white py-4 grid nav-cols-temp items-center flex-nowrap border-b shadow-md z-20">
        <div className="px-8 flex justify-start">
          <h2>Pack'n Go</h2>
        </div>
        <div className="flex justify-center">
          <div className="px-8">
            <Link>New Arrivals</Link>
          </div>
          <div className="px-8">
            <Link>Hot On Sale</Link>
          </div>
          <div className="px-8">
            <Link>About</Link>
          </div>
        </div>

        <div>
          <div className="flex justify-end items-center">
            <img
              className="w-6 mx-6 cursor-pointer"
              src={searchIcon}
              alt=""
              onClick={() => setShowSearch(!showSearch)}
            />
            <div className="px-4">
              <Link>Account</Link>
            </div>
            <div className="px-8">
              <Link>Cart</Link>
            </div>
          </div>
        </div>
      </div>
      {showSearch && (
        <div
          className="fixed w-screen h-screen bg-neutral-700 opacity-80 z-30"
          onClick={() => setShowSearch(false)}
        />
      )}
      {showSearch && <SearchPopUp setShowSearch={setShowSearch} />}
    </React.Fragment>
  );
};

export default Navbar;
