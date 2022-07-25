import React from "react";
import { Rating } from "react-simple-star-rating";

function MainRaiting() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="flex items-center ">
          <img
            alt="img"
            src="React.svg"
            className="mt-[19px] mr-[6px] w-6 h-[21.37px]"
          />
          <h2 className="text-originalBlue mr-[163px] mt-[18px] md:reacttitle">
            React
          </h2>
        </div>
        <div className="bg-white border rounded-[20px] w-[144px] mt-[6px] md:mt-[22px] flex justify-start items-center text-center">
          <p className="ml-[10px]  mr-[6px] md:internaltitle ">4.8</p>
          <div>
            <Rating
              initialValue={4.8}
              size={20}
              fillColor={"#373AF5"}
              className="top-[-3px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRaiting;
