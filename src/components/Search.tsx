import React, { useEffect, useState } from "react";
import { RocketData } from "../App";
interface SearchInterface {
  type: string;
  active: string;
  originalLaunch: string;
}

const Search = ({
  rockets,
  setrockets,
}: {
  rockets: RocketData[];
  setrockets: React.Dispatch<React.SetStateAction<RocketData[]>>;
}) => {
  const [searchValues, setSearchValues] = useState({
    type: "Rockets",
    active: "",
    originalLaunch: "",
  } as SearchInterface);

  async function handelOnSearch() {
    if (searchValues.type === "Rockets") {
      const response = await fetch("https://api.spacexdata.com/v4/rockets", {});
      const data = await response.json();

      let newRockets;

      if (searchValues.active === "") {
        newRockets = await data;
      } else if (searchValues.active === "true") {
        newRockets = await data.filter((rocket: any) => rocket.active === true);
      } else {
        newRockets = await data.filter(
          (rocket: any) => rocket.active === false
        );
      }

      if (!!searchValues.originalLaunch) {
        newRockets = await newRockets.filter(
          (rocket: any) => rocket.first_flight === searchValues.originalLaunch
        );
      }

      setrockets(newRockets);
    } else {
      const response = await fetch("https://api.spacexdata.com/v4/dragons", {});
      const dragons = await response.json();
      let newDragons;
      if (searchValues.active === "") {
        newDragons = await dragons;
      } else if (searchValues.active === "true") {
        newDragons = await dragons.filter(
          (dragon: any) => dragon.active === true
        );
      } else {
        newDragons = await dragons.filter(
          (dragon: any) => dragon.active === false
        );
      }

      if (!!searchValues.originalLaunch) {
        newDragons = await dragons.filter(
          (dragon: any) => dragon.first_flight === searchValues.originalLaunch
        );
      }
      setrockets(newDragons);
    }
  }
  return (
    <div className="max-md:flex flex-col items-center">
      <div>
        <h1 className="font-poppins text-3xl text-white max-sm:flex">
          Search Form
        </h1>
      </div>
      <div className=" mt-5 max-sm:flex flex-col items-center">
        <select
          placeholder="type"
          className=" rounded w-[190px] font-poppins text-xl"
          onChange={(e) =>
            setSearchValues({ ...searchValues, type: e.target.value })
          }
        >
          <option>Rockets</option>
          <option>Dragons</option>
        </select>
        <label className="font-poppins text-white mt-1 ml-10">Active:</label>
        <select
          onChange={(e) =>
            setSearchValues({
              ...searchValues,
              active: e.target.value,
            })
          }
          placeholder="Active"
          className="mt-5 p-1 sm:ml-2 font-poppins rounded text-xl w-[190px]"
        >
          <option value={""}>All</option>
          <option value={"true"}>True</option>
          <option value={"false"}>False</option>
        </select>
      </div>
      <div className="items-center max-sm:flex flex-col">
        <label className="font-poppins text-white mt-1 mr-2">
          Initial Launch:
        </label>
        <input
          onChange={(e) =>
            setSearchValues({ ...searchValues, originalLaunch: e.target.value })
          }
          type={"date"}
          placeholder="Original Launch"
          className="sm:mr-10 p-1 font-poppins text-xl w-[190px] rounded mt-5"
        />

        <button
          onClick={handelOnSearch}
          className="mt-5 font-poppins bg-green-500 rounded p-1 w-[190px]"
        >
          Search
        </button>
      </div>
      <hr className="mt-5 mb-5" />
    </div>
  );
};

export default Search;
