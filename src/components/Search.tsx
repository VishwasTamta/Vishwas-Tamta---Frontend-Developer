import React, { useEffect, useState } from "react";
import { RocketData } from "../App";
interface SearchInterface {
  type: string;
  active: boolean;
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
    active: true,
    originalLaunch: "",
  } as SearchInterface);

  async function handelOnSearch() {
    if (searchValues.type === "Rockets") {
      const response = await fetch("https://api.spacexdata.com/v4/rockets", {});
      const data = await response.json();

      const newRockets = data.filter((rocket: any) => {
        if (
          rocket.active === searchValues.active ||
          rocket.first_flight === searchValues.originalLaunch
        ) {
          return rocket;
        }
      });
      setrockets(newRockets);
    } else {
      const response = await fetch("https://api.spacexdata.com/v4/dragons", {});
      const dragons = await response.json();
      const newDragons = dragons.filter((dragon: any) => {
        if (
          dragon.active === searchValues.active ||
          dragon.first_flight === searchValues.originalLaunch
        ) {
          return dragon;
        }
      });
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
              active: !!e.target.value,
            })
          }
          placeholder="Active"
          className="mt-5 p-1 sm:ml-2 font-poppins rounded text-xl w-[190px]"
        >
          <option value={"true"}>True</option>
          <option value={""}>False</option>
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
