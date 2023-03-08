import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchPopUp from "./SearchPopUp";
import searchIcon from "../../static/icons/search.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const screenSize = useSelector((state) => state.system.system);

  const navContent = (
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
  );

  return (
    <React.Fragment>
      <div className="sticky overflow-hidden top-0 bg-white py-4 grid nav-cols-temp items-center flex-nowrap border-b shadow-md z-20">
        {screenSize !== "PC" && <div className="">=</div>}
        <div className="px-8 flex justify-start max-md:justify-center">
          <Link to="/">
            <h2>Pack'n Go</h2>
          </Link>
        </div>
        {screenSize === "PC" && navContent}
        <div>
          <div className="flex justify-end items-center">
            <img
              className="w-6 md:mx-6 cursor-pointer"
              src={searchIcon}
              alt=""
              onClick={() => setShowSearch(!showSearch)}
            />
            {screenSize === "PC" && (
              <div className="px-4">
                <Link to="/myAccount">Account</Link>
              </div>
            )}
            <div className="md:px-8 max-md:px-3">
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
