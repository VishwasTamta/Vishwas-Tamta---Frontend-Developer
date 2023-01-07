import React, { useEffect, useState } from "react";
import { RocketData } from "../App";
import Pagination from "./Pagination";

const ContentList = ({
  rockets,
  setrockets,
  indexOfFirstRecord,
  indexOfLastRecord,
  recordsPerPage,
  setCurrentPage,
  currentPage,
}: {
  rockets: RocketData[];
  setrockets: React.Dispatch<React.SetStateAction<RocketData[]>>;
  indexOfFirstRecord: number;
  indexOfLastRecord: number;
  recordsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  // Records to be displayed on the current page
  const nPages = Math.ceil(rockets.length / recordsPerPage);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((data) => data.json())
      .then((data) => {
        const currentRecords = data.slice(
          indexOfFirstRecord,
          indexOfLastRecord
        );
        console.log(currentRecords, "currentRecords");
        setrockets(currentRecords);
      });
    return () => {};
  }, []);

  console.log(rockets, "akjsdjkasld");
  return (
    <div>
      {rockets.map((rocket: any) => (
        <div key={rocket.id} className="flex flex-wrap max-sm:justify-center">
          {rocket.flickr_images.map((img: any, idx: number) => (
            <div key={idx} className="mr-[10px] mt-[10px]">
              <img
                className=" rounded border w-[300px] h-[300px]"
                src={img}
                alt={"image"}
              />
              <h3 className="text-xl font-poppins text-white text-center">
                {rocket.name}
              </h3>
              <h3 className="text-xl font-poppins text-white text-center">
                Status: {String(rocket.active)}
              </h3>
              <h3 className="text-xl font-poppins text-white text-center">
                First Flight: {rocket.first_flight}
              </h3>
            </div>
          ))}
        </div>
      ))}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ContentList;
