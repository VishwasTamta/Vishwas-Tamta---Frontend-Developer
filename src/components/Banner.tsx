import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [banners, setbanners] = useState([] as string[]);
  const [index, setindex] = useState(0);
  const timeOutRef = useRef(null);

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  useEffect(() => {
    console.log("asdasd");
    fetch("https://api.spacexdata.com/v4/rockets/?id=5e9d0d95eda69974db09d1ed")
      .then((val) => val.json())
      .then((val) => setbanners(val[1].flickr_images));
  }, []);

  useEffect(() => {
    resetTimeOut();
    //@ts-ignore
    timeOutRef.current = setTimeout(() => {
      setindex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => {
      resetTimeOut();
    };
  }, [index]);

  return (
    <>
      <hr className="mt-[10px] mb-[10px]" />
      <div className="w-full sm:flex justify-center ">
        <div className="font-poppins text-white mr-20 sm:pt-[100px] mb-[10px]">
          <h2 className="text-3xl">Space Exploration Technologies Corp</h2>
          <h3
            className="text-base
          "
          >
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft.
          </h3>
        </div>
        <div className=" overflow-hidden max-w[500px]">
          <div
            className={`sm:w-[700px] whitespace-nowrap transition ease-in duration-1000`}
            style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
          >
            {banners.map((banner, index) => (
              <img
                className=" inline-block h-[400px] w-[100%] rounded-[40px]"
                src={banner}
                key={index}
              />
            ))}
          </div>
          <div className="text-center">
            {banners.map((_, idx) => (
              <div
                key={idx}
                className={`${
                  index === idx ? "bg-[#6a0dad]" : ""
                } inline-block h-[20px] w-[20px] rounded-[50%] cursor-pointer mt-[15px] mr-[7px] bg-[#c4c4c4]`}
                onClick={() => setindex(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-[10px] mb-[10px]" />
    </>
  );
};

export default Banner;
