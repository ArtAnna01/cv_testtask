import React from "react";
import { ChevronUp } from "react-feather";
import { Rating } from "react-simple-star-rating";

const styles = {
  size: "20px",
  strokeWidth: "1px",
};

function VettedSkills() {
  return (
    <>
      <div className="mt-[22px] ml-[14px] mb-[14px] flex items-center">
        <img src="Icons.svg" className="mr-[8px]" />
        <h2 className="text-lg">Vetted Skills</h2>
      </div>
      <p className="ml-[14px] mr-[18px] mb-[10px]">
        This developer passed 3+ hours of rigorous for the following skills
      </p>
      <div className="flex items-start">
        <img src="Helps.svg" className="ml-[15.83px] mr-[9.83px]" />
        <p className="mr-[14px] text-grey">
          What is a Vetted skill? Learn more about our skill assessment
          methodology
        </p>
      </div>
      <img
        src="Approved.svg"
        className="mt-[22px] ml-[14px] w-[129px] h-[34px] mb-[-14px]"
      />
      <div className="bg-whiteGrey border rounded-[20px] mr-[18px] ml-[14px] w-[288px]">
        <div className="flex items-center ">
          <img
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
        <div className=" pl-[12px] grid grid-cols-[140px_160px] items-center">
          <p className="subtitle">DOM</p>
          <div className="flex flex-row items-center">
            <p className="subtitle ml-[10px] mr-[6px]">4.5</p>
            <div>
              <Rating
                initialValue={4.5}
                size={18}
                fillColor={"#373AF5"}
                className="top-[-3px]"
              />
            </div>
          </div>
          <p className="subtitle mb-[6px]">HTML</p>
          <div className="flex flex-row items-center">
            <p className="subtitle ml-[10px] mr-[6px]">4.5</p>
            <div>
              <Rating
                initialValue={4.5}
                size={18}
                fillColor={"#373AF5"}
                className="top-[-3px]"
              />
            </div>
          </div>
          <p className="subtitle mb-[6px]">CSS</p>
          <div className="flex flex-row items-center">
            <p className="subtitle ml-[10px] mr-[6px]">4.5</p>
            <div>
              <Rating
                initialValue={4.5}
                size={18}
                fillColor={"#373AF5"}
                className="top-[-3px]"
              />
            </div>
          </div>
          <p className="subtitle mb-[6px]">JavaScript</p>
          <div className="flex flex-row items-center">
            <p className="subtitle ml-[10px] mr-[6px]">4.5</p>
            <div>
              <Rating
                initialValue={4.5}
                size={18}
                fillColor={"#373AF5"}
                className="top-[-3px]"
              />
            </div>
          </div>
          <p className="subtitle ">React Components</p>
          <div className="flex flex-row items-center">
            <p className="subtitle ml-[10px] mr-[6px]">4.5</p>
            <div>
              <Rating
                initialValue={4.5}
                size={18}
                fillColor={"#373AF5"}
                className="top-[-3px]"
              />
            </div>
          </div>
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
      <hr className="mt-[22px] ml-[14px] bg-lightGrey w-[288px] "></hr>
    </>
  );
}

export default VettedSkills;
