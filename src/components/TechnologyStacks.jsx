import React from "react";
import { Tool } from "react-feather";

const styles = {
  size: "20px",
  strokeWidth: "1px",
};

function TechnologyStacks() {
  return (
    <>
      <div className=" ml-[16.5px] mt-[22px] flex items-center">
        <Tool {...styles} className="mr-[9.66px] "></Tool>
        <h2>Technologies stack</h2>
      </div>
      <div className=" ml-[17px] mt-[14px] flex items-center">
        <h2 className="mr-[9.83px]">Current stack</h2>
        <img src="Helps.svg" />
      </div>
      <p className="ml-[17px] mt-[10px]">Languages</p>
      <div></div>
      <div className="grid grid-cols-2 mt-2">
        <div className="w-[140px] h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px] w-[22px]" />
          <p>Java Script </p>
        </div>
        <div className="w-[140px] h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px]" />
          <p>Java Script </p>
        </div>
        <div className="w-[140px] h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px]" />
          <p>Java Script </p>
        </div>
        <div className="w-[140px] h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px]" />
          <p>Java Script </p>
        </div>
      </div>
      <div>
        <p className="ml-[17px] mt-[10px]">Technologies</p>
        <div className="grid grid-cols-2 mt-2">
          <div className="w-[140px] h-9 flex items-center border rounded-xl">
            <img src="React.svg" className="mr-[6px] ml-[10px]" />
            <p>React </p>
          </div>
          <div className="w-[140px] h-9 flex items-center border rounded-xl">
            <img src="React.svg" className="mr-[6px] ml-[10px]" />
            <p>React </p>
          </div>
          <div className="w-[140px] h-9 flex items-center border rounded-xl">
            <img src="React.svg" className="mr-[6px] ml-[10px]" />
            <p>React </p>
          </div>
        </div>
        <div className="flex ml-[17px] mt-5">
          <h2 className="mr-[9.83px]">Has experience in</h2>
          <img src="Helps.svg" />
        </div>
        <div className="flex mt-[10px]">
          <p className="ml-[17px] mr-5 ">Redux</p>
          <p>Azure</p>
        </div>
      </div>
      <hr className="mt-[22px] ml-[14px] bg-lightGrey w-[288px] "></hr>
    </>
  );
}

export default TechnologyStacks;
