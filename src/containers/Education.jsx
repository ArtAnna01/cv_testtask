import React from "react";
import { Book } from "react-feather";
import { styles } from "..";
import ButtonCall from "../components/ButtonCall";
import Graduation from "../components/Graduation";

function Education() {
  return (
    <>
      <div className="pr-[18px] md:pr-6">
        <div className="mt-[22px] md:flex md:flex-row md:mt-[28px]  pb-11 md:pb-10 ">
          <div className="">
            <div className="flex md:justify-start items-center md:w-[194px]">
              <Book {...styles} className="mr-2 md:mr-[12px]" />
              <h2 className="text-lg md:text-xl">Education</h2>
            </div>
          </div>
          <div className="md:pl-7">
            <Graduation />
            <hr className="ml-9 md:ml-12 mb-5 bg-lightGrey "></hr>
            <Graduation />
          </div>
          <hr className=" md:mt-[32px] bg-lightGrey "></hr>
        </div>
        <ButtonCall />
      </div>
    </>
  );
}

export default Education;
