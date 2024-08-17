import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import SearchBar from "./SearchBar";

function Header({ onSearch }) {
  return (
    <header className="bg-purple-200 h-[300px] relative p-6">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-full absolute top-0 left-0 right-0 space-y-8 pt-20">
        <Title />
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
