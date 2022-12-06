import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchPopUp from "./SearchPopUp";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <React.Fragment>
      <div className="bg-color-light h-12 flex justify-between items-center flex-nowrap border-b">
        <div className="px-8">
          <h2>Pack'n Go</h2>
        </div>
        <div className="flex">
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
          <div className="flex items-center">
            <img
              className="w-6 m-6"
              src="../../../icons/search.svg"
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
          className="fixed w-screen h-screen bg-neutral-700 opacity-80 z-10"
          onClick={() => setShowSearch(false)}
        />
      )}
      {showSearch && <SearchPopUp />}
    </React.Fragment>
  );
};

export default Navbar;
