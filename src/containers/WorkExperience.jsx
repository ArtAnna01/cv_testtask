import React from "react";
import { Briefcase } from "react-feather";
import { styles } from "..";
import Experience from "../components/Experience";

function WorkExperience() {
  return (
    <>
      <div className="mt-[22px] md:flex md:flex-row md:mt-[28px] pr-[18px] md:pr-6 ">
        <div>
          <div className="flex md:justify-start items-center  md:w-[194px]">
            <Briefcase {...styles} className="mr-2 md:mr-[12px]" />
            <h2 className="text-lg md:text-xl">Work Experience</h2>
          </div>
        </div>
        <div className="md:pl-7">
          <Experience />
          <hr className="ml-9 md:ml-12 mb-5 bg-lightGrey "></hr>
          <Experience />
        </div>
      </div>
      <hr className="mt-[28px] md:mt-[32px] bg-lightGrey "></hr>
    </>
  );
}

export default WorkExperience;
