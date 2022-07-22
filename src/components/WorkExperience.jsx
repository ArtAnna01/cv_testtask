import React from "react";
import { Briefcase, Clock } from "react-feather";

const styles = {
  size: "20px",
  strokeWidth: "1px",
};

function WorkExperience() {
  return (
    <>
      <div className=" ml-[14px] mt-[22px] mb-[22px] flex items-center">
        <Briefcase {...styles} />
        <h2 className="ml-[8px] text-lg">Work Experience</h2>
      </div>
      <div>
        <div className="flex ">
          <div>
            <div className="w-[14px] h-[14px] ml-[14px] mr-[8px] mb-[2px] border rounded-full bg-originalBlue"></div>
            <img src="Line.svg" className=" ml-[21px]" />
          </div>
          <div>
            <p>Senior Frontend Developer</p>
            <div className=" mr-[18px] ">
              <p className="text-grey ">Sberbank</p>
              <div className="flex items-center mt-2">
                <Clock {...styles} />
                <p className="subtitle ml-1 mr-1">2 years 2 month</p>
                <p className="subtitle mr-1">|</p>
                <p className="subtitle">June 2019 - October 2021 </p>
              </div>
              <p className=" mt-[11px]">
                Imperdiet tellus neque nunc, etiam vitae risus quis semper.
                Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor
                tellus. Faucibus enim condimentum est adipiscing varius id
                fermentum
              </p>
              <p className="mt-4 mb-2">Languages</p>
              <div className="flex">
                <img src="JS.svg" className=" mr-[6px] w-[22px]" />
                <p>Java Script</p>
                <img
                  src="Spring.svg"
                  className=" mr-[6px] w-[22px] ml-[14px]"
                />
                <p>Java Sping</p>
              </div>
              <p className="mt-4 mb-2">Technologies</p>
              <div className="flex mb-5">
                <img src="React.svg" className=" mr-[6px] w-[22px]" />
                <p>React</p>
                <img src="Node.svg" className=" mr-[6px] w-[22px] ml-[14px]" />
                <p>Node.js</p>
              </div>
            </div>
            <hr className="mt-[22px]  bg-lightGrey w-[266px] "></hr>
          </div>
        </div>
        <div className="flex ">
          <div className="mt-[23px]">
            <div className="w-[14px] h-[14px] ml-[14px] mr-[8px] mb-[2px] border rounded-full bg-originalBlue"></div>
            <img src="Line.svg" className=" ml-[21px]" />
          </div>
          <div className="mt-5">
            <p>Senior Frontend Developer</p>
            <div className=" mr-[18px] ">
              <p className="text-grey ">Sberbank</p>
              <div className="flex items-center mt-2">
                <Clock {...styles} />
                <p className="subtitle ml-1 mr-1">2 years 2 month</p>
                <p className="subtitle mr-1">|</p>
                <p className="subtitle">June 2019 - October 2021 </p>
              </div>
              <p className=" mt-[11px]">
                Imperdiet tellus neque nunc, etiam vitae risus quis semper.
                Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor
                tellus. Faucibus enim condimentum est adipiscing varius id
                fermentum
              </p>
              <p className="mt-4 mb-2">Languages</p>
              <div className="flex">
                <img src="JS.svg" className=" mr-[6px] w-[22px]" />
                <p>Java Script</p>
                <img
                  src="Spring.svg"
                  className=" mr-[6px] w-[22px] ml-[14px]"
                />
                <p>Java Sping</p>
              </div>
              <p className="mt-4 mb-2">Technologies</p>
              <div className="flex">
                <img src="React.svg" className=" mr-[6px] w-[22px]" />
                <p>React</p>
                <img src="Node.svg" className=" mr-[6px] w-[22px] ml-[14px]" />
                <p>Node.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[23px] ml-[14px] bg-lightGrey w-[288px] "></hr>
    </>
  );
}

export default WorkExperience;
