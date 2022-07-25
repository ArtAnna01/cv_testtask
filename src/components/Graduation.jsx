import React from "react";
import { Clock } from "react-feather";
import { styles } from "..";
import ButtonCall from "./ButtonCall";

function Graduation() {
  return (
    <>
      <div className="flex items-start ">
        <div className="pb-[21px] md:pb-[28px]">
          <div className="w-[14px] h-[14px] mr-[8px] mt-[3px] md:mt-[5px] md:mr-5 mb-[2px] border rounded-full bg-lightGreen"></div>
          <img src="LineSmall.svg" className=" ml-[7px] h-full" />
        </div>
        <div>
          <p className="md:internaltitle">Computer science</p>
          <div className="">
            <p className="text-grey ">Boston Academy</p>
            <div className="flex items-center mt-2 md:mt-[15px]">
              <Clock {...styles} />
              <p className="subtitle ml-1 mr-1 md:text-sm">2 years 2 month</p>
              <p className="subtitle mr-1 md:text-sm">|</p>
              <p className="subtitle md:text-sm">June 2019 - October 2021 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graduation;
