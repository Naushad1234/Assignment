import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="relative bg-white flex items-center border border-black rounded-md max-w-xl w-full">
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
        className="flex-grow px-4 py-2 border-none focus:outline-none rounded-md pr-12"
      />
      <FaArrowRight size={16} className="absolute right-3 text-black" />
    </div>
  );
};

export default SearchBar;
