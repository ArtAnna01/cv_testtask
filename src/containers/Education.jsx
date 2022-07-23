import React from "react";
import { Book, Clock } from "react-feather";

const styles = {
  size: "20px",
  strokeWidth: "1px",
};

function Education() {
  return (
    <>
      <div className=" ml-[14px] mt-[22px] mb-[22px] flex items-center">
        <Book {...styles} />
        <h2 className="ml-[8px] text-lg">Education</h2>
      </div>
      <div>
        <div className="flex ">
          <div>
            <div className="w-[14px] h-[14px] ml-[14px] mr-[8px] mb-[2px] border rounded-full bg-lightGreen"></div>
            <img src="LineSmall.svg" className=" ml-[21px] " />
          </div>
          <div>
            <p>Computer science</p>
            <div className=" mr-[18px] ">
              <p className="text-grey ">Boston Academy</p>
              <div className="flex items-center mt-2">
                <Clock {...styles} />
                <p className="subtitle ml-1 mr-1">2 years 2 month</p>
                <p className="subtitle mr-1">|</p>
                <p className="subtitle">June 2019 - October 2021 </p>
              </div>
            </div>
            <hr className="mt-[22px]  bg-lightGrey w-[266px] "></hr>
          </div>
        </div>
        <div className="flex ">
          <div className="mt-[23px]">
            <div className="w-[14px] h-[14px] ml-[14px] mr-[8px] mb-[2px] border rounded-full bg-lightGreen"></div>
            <img src="LineSmall.svg" className=" ml-[21px] " />
          </div>
          <div className="mt-5">
            <p>Computer science</p>
            <div className=" mr-[18px] ">
              <p className="text-grey ">Boston Academy</p>
              <div className="flex items-center mt-2">
                <Clock {...styles} />
                <p className="subtitle ml-1 mr-1">2 years 2 month</p>
                <p className="subtitle mr-1">|</p>
                <p className="subtitle">June 2019 - October 2021 </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[24px] mb-[44px] ml-[14px] bg-lightGrey w-[288px] "></hr>
        <div className="bg-whiteGrey border rounded-[20px] w-[288px] mb-5 ml-[14px] flex flex-col justify-center py-5 px-4 text-center">
          <h2 className="mb-[26px]">
            Would you like to schedule an interview with Ivan Ivanov?
          </h2>
          <button className="h-10 text-base border rounded-lg bg-originalBlue  border-originalBlue text-white">
            Book a call
          </button>
        </div>
      </div>
    </>
  );
}

export default Education;
