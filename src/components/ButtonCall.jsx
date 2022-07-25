import React from "react";

function ButtonCall() {
  return (
    <>
      <div className="bg-whiteGrey border rounded-[20px] w-full mb-5  flex flex-wrap justify-center py-5 px-4 items-center md:justify-between md:px-8">
        <h2 className="mb-[26px] md:mb-0 text-center md:text-xl">
          Would you like to schedule an interview with Ivan Ivanov?
        </h2>
        <button className="h-10 text-base border rounded-lg bg-originalBlue  border-originalBlue text-white w-[256px] md:w-[142px]">
          Book a call
        </button>
      </div>
    </>
  );
}

export default ButtonCall;
