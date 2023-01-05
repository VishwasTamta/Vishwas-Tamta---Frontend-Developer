import React, { useEffect, useState } from "react";

const ContentList = () => {
  const [rockets, setrockets] = useState([] as any);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((data) => data.json())
      .then((data) => setrockets(data));

    return () => {};
  }, []);

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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContentList;
