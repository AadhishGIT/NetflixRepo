import React, { BaseSyntheticEvent, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const [expandedSearch, setExpandedSearch] = useState<boolean>(false);
  const [name, setName] = useState("");
  const onSearchClicked = () => {
    setExpandedSearch(!expandedSearch);
    setName("");
  };
  const onSearchStart = (e: BaseSyntheticEvent) => {
    setName(e.currentTarget.value);
  };
  return (
    <div>
      {expandedSearch ? (
        <div
          className="flex
        flex-row
        bg-transparent
        border-2 
        items-center 
        p-1 
        px-2 
        gap-1 
        cursor-pointer 
        transition: duration-300
        border-gray-300"
        >
          <div className="text-gray-200">
            <FaSearch />
          </div>
          <input
            onChange={onSearchStart}
            value={name}
            type={"movieName"}
            className="
            block
            px-2
            w-full
            text-md
        text-white
        bg-transparent
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            invalid:border-b-1
            "
            placeholder=" "
          />
          <div onClick={onSearchClicked} className="text-gray-200">
            <FaTimes />
          </div>
        </div>
      ) : (
        <div
          onClick={onSearchClicked}
          className="text-gray-200 hover:text-gray-300 cursor-pointer transition: duration-200"
        >
          <FaSearch />
        </div>
      )}
    </div>
  );
};

export default Search;
