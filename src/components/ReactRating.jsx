import React from "react";
import { ChevronUp } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { styles } from "..";
import Quiz from "./Quiz";

function ReactRating() {
  return (
    <>
      <div className="md:pl[27px]">
        <p className="mb-[10px]">
          This developer passed 3+ hours of rigorous for the following skills
        </p>
        <div className="flex items-start">
          <img alt="img" src="Helps.svg" className="ml-[15.83px] mr-[9.83px]" />
          <p className=" text-grey">
            What is a Vetted skill? Learn more about our skill assessment
            methodology
          </p>
        </div>
        <img
          alt="img"
          src="Approved.svg"
          className="mt-[22px] w-[129px] h-[34px] mb-[-14px] md:mt-7"
        />
        <div className="bg-whiteGrey border rounded-[20px] w-full">
          <div className="flex items-center ">
            <img
              alt="img"
              src="React.svg"
              className="ml-3 mt-[19px] mr-[6px] w-6 h-[21.37px]"
            />
            <h2 className="text-originalBlue mr-[163px] mt-[18px]">React</h2>

            <button className="bg-white border rounded-full w-7 h-7 mt-[16px] grid place-content-center">
              <ChevronUp {...styles} />
            </button>
          </div>
          <div className="bg-white border rounded-[20px] w-[144px] ml-[12px] mt-[6px] flex justify-start items-center text-center">
            <p className="ml-[10px]  mr-[6px]">4.8</p>
            <div>
              <Rating
                initialValue={4.8}
                size={18}
                fillColor={"#373AF5"}
                className="top-[-3px]"
              />
            </div>
          </div>
          <p className="ml-[12px] mb-[6px] mt-4">Quiz</p>
          <p className="ml-[12px] mb-[14px] text-grey text-xs">
            Includes 15 questions on the following topics
          </p>
          <div>
            <Quiz />
          </div>
          <div className="flex justify-center ">
            <div className=" h-10 w-[264px] mt-5 mb-[22px]  text-base border rounded-lg border-originalBlue text-originalBlue flex items-center justify-center  ">
              <p className="text-base">See Quiz results</p>
            </div>
          </div>
          <hr className="ml-[12px] bg-lightGrey w-[264px] "></hr>
          <p className="ml-[12px] mb-[6px] mt-[22px]">Coding Challenge</p>
          <p className="ml-[12px] mb-[14px] text-grey text-xs">
            Includes 3 tasks on coding skills
          </p>
          <div className="ml-[12px]">
            <p className="subtitle mb-[6px]">Sorting algorithm</p>
            <p className="subtitle mb-[6px]">Strings and arrays</p>
            <p className="subtitle ">Complexity</p>
          </div>
          <div className="flex justify-center ">
            <div className="h-10 w-[264px] mt-5 mb-[22px]  text-base border rounded-lg border-originalBlue text-originalBlue flex items-center justify-center  ">
              <p className="text-base">See Code</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactRating;
