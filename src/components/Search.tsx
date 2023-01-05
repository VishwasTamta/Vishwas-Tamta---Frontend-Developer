import React from "react";

const Search = () => {
  return (
    <div className="max-md:flex flex-col items-center">
      <div>
        <h1 className="font-poppins text-3xl text-white max-sm:flex">
          Search Form
        </h1>
      </div>
      <div className=" mt-5 max-sm:flex flex-col items-center">
        <select className=" rounded w-[190px] font-poppins text-xl">
          <option>Rockets</option>
          <option>Capsules</option>
        </select>
        <input
          type={"search"}
          placeholder="Search Id"
          className="mt-5 p-1 sm:ml-10 font-poppins rounded text-xl w-[190px]"
        />
      </div>
      <div className="items-center max-sm:flex flex-col">
        <input
          type={"search"}
          placeholder="Search by name"
          className="sm:mr-10 p-1 font-poppins text-xl w-[190px] rounded mt-5"
        />

        <button className="mt-5 font-poppins bg-green-500 rounded p-1 w-[190px]">
          Search
        </button>
      </div>
      <hr className="mt-5 mb-5" />
    </div>
  );
};

export default Search;
