import React from "react";
import { ChevronUp } from "react-feather";
import MainRaiting from "../components/MainRaiting";
import QuizData from "../components/QuizData";
import { styles } from "..";
import QuizResult from "../components/QuizResult";
import useBP from "../hooks/useBP";
import ButtonCode from "../components/ButtonCode";
import CodeData from "../components/CodeData";

function VettedSkills() {
  const { isMobile } = useBP();

  return (
    <>
      <div className="mt-[22px] md:flex md:flex-row md:mt-[28px] md:pr-6 ">
        <div>
          <div className="flex md:justify-start items-center md:w-[194px]">
            <img alt="img" src="Icons.svg" className="mr-[8px]" />
            <h2 className="text-lg md:text-xl">Vetted Skills</h2>
          </div>
        </div>
        <div className="pl-[3px] md:pl-7 w-full">
          <div className="md:pl[27px]">
            <p className="mb-[10px] md:text-base">
              This developer passed 3+ hours of rigorous for the following
              skills
            </p>
            <div className="flex items-start">
              <img alt="img" src="Helps.svg" className="mr-[9.83px]" />
              <p className=" text-grey md:text-base">
                What is a Vetted skill? Learn more about our skill assessment
                methodology
              </p>
            </div>
            <img
              alt="img"
              src="Approved.svg"
              className="mt-[22px] w-[129px] h-[34px] mb-[-14px] md:mt-7"
            />

            <div className="bg-whiteGrey border rounded-[20px] w-full px-[12px] md:px-6 md:pb-[22px]">
              <div className="flex flex-row">
                <MainRaiting />
                <button className="bg-white border rounded-full w-7 h-7 md:w-8 md:h-8 mt-[16px] md:mt-[22px] md:ml-[7px] grid place-content-center">
                  <ChevronUp {...styles} />
                </button>
              </div>

              <div className="flex flex-wrap mt-4 justify-between ">
                <div className="flex flex-col">
                  <p className=" mb-[6px] md:md:internaltitle">Quiz</p>
                  {!isMobile && <QuizResult />}
                </div>
                <QuizData />
              </div>
              {isMobile && <QuizResult />}
              <hr className=" mb-5 bg-lightGrey md:mt-5"></hr>

              <div className="flex flex-wrap mt-4 justify-between ">
                <div className="flex flex-col">
                  <p className="mb-[6px] md:md:internaltitle">
                    Coding Challenge
                  </p>
                  {!isMobile && <ButtonCode />}
                </div>
                <CodeData />
              </div>
              {isMobile && <ButtonCode />}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[28px] md:mt-[32px] bg-lightGrey "></hr>
    </>
  );
}

export default VettedSkills;
