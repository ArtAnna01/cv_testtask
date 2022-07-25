import React from "react";
import { Tool } from "react-feather";
import CurrentStack from "../components/CurrentStack";
import { styles } from "..";

function TechnologyStacks() {
  return (
    <>
      <div className="mt-[22px] md:flex md:flex-row md:mt-[28px] ">
        <div>
          <div className="flex md:justify-start items-center  md:w-[194px] ">
            <Tool {...styles} className="mr-2 md:mr-[12px] "></Tool>
            <h2 className="md:text-xl">Technologies stack</h2>
          </div>
        </div>
        <div className="md:pl-7">
          <CurrentStack />
        </div>
      </div>
      <hr className="mt-[28px] md:mt-[32px] bg-lightGrey "></hr>
    </>
  );
}

export default TechnologyStacks;
