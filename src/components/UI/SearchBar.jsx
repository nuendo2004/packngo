import React, { useEffect, useRef, useState, useCallback } from "react";
import Input from "./Input";

const SearchBar = () => {
  const inputRef = useRef("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(() => {
    console.log("search " + searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      var time = setTimeout(() => {
        handleSearch();
      }, 380);
    }
    return () => {
      clearTimeout(time);
    };
  }, [searchTerm, handleSearch]);

  const handleInputChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  return (
    <div>
      <Input
        ref={inputRef}
        onInputChange={handleInputChange}
        className="border-b-2 outline-none py-2 w-fit mb-8"
        placeholder="Enter search here..."
      />
    </div>
    
  );
};

export default SearchBar;
