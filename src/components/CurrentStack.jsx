import React from "react";

function CurrentStack() {
  return (
    <>
      <div className=" mt-[14px] flex items-center md:mt-0 ">
        <h2 className="mr-[9.83px] md:text-xl">Current stack</h2>
        <img src="Helps.svg" />
      </div>
      <p className=" mt-[10px] md:text-base">Languages</p>
      <div></div>
      <div className="flex flex-wrap  mt-2 ">
        <div className="w-[140px] mb-[6px] mr-2 h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px] w-[22px]" />
          <p className="md:text-base">Java Script </p>
        </div>
        <div className="w-[140px] mb-[6px] mr-2 h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px]" />
          <p className="md:text-base">Java Script </p>
        </div>
        <div className="w-[140px] mr-2 h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px]" />
          <p className="md:text-base">Java Script </p>
        </div>
        <div className="w-[140px] mr-2 h-9 flex items-center border rounded-xl">
          <img src="JS.svg" className="mr-[6px] ml-[10px]" />
          <p className="md:text-base">Java Script </p>
        </div>
      </div>
      <div>
        <p className=" mt-[10px] md:text-base">Technologies</p>
        <div className="flex flex-wrap mt-2">
          <div className="w-[140px] mr-2 mb-[6px] h-9 flex items-center border rounded-xl">
            <img src="React.svg" className="mr-[6px] ml-[10px]" />
            <p className="md:text-base">React </p>
          </div>
          <div className="w-[140px] mr-2 mb-[6px] h-9 flex items-center border rounded-xl">
            <img src="React.svg" className="mr-[6px] ml-[10px]" />
            <p className="md:text-base">React </p>
          </div>
          <div className="w-[140px] mr-2 h-9 flex items-center border rounded-xl">
            <img src="React.svg" className="mr-[6px] ml-[10px]" />
            <p className="md:text-base">React </p>
          </div>
        </div>
        <div className="flex mt-5">
          <h2 className="mr-[9.83px] text-lg md:text-xl">Has experience in</h2>
          <img src="Helps.svg" />
        </div>
        <div className="flex mt-[10px]">
          <p className=" mr-5 md:text-base">Redux</p>
          <p className="md:text-base">Azure</p>
        </div>
      </div>
    </>
  );
}

export default CurrentStack;
