import React from "react";
import { Clock } from "react-feather";
import { styles } from "..";

function Experience() {
  return (
    <>
      <div className="flex items-start">
        <div className="pb-[21px] md:pb-[28px]">
          <div className="w-[14px] h-[14px] mr-[8px] mt-[3px] md:mt-[5px] md:mr-5 mb-[2px] border rounded-full bg-originalBlue"></div>
          <img src="Line.svg" className=" ml-[7px] h-full" />
        </div>
        <div>
          <p className="md:internaltitle">Senior Frontend Developer</p>
          <div>
            <p className="text-grey ">Sberbank</p>
            <div className="flex items-center mt-2 md:mt-[15px]">
              <Clock {...styles} />
              <p className="subtitle ml-1 mr-1 md:text-sm">2 years 2 month</p>
              <p className="subtitle mr-1 md:text-sm">|</p>
              <p className="subtitle md:text-sm">June 2019 - October 2021 </p>
            </div>
            <div className="flex flex-wrap">
              <p className=" mt-[11px] md:mt-[15px] md:w-[596px]">
                Imperdiet tellus neque nunc, etiam vitae risus quis semper.
                Tempus egestas mauris fringilla iaculis feugiat tincidunt auctor
                tellus. Faucibus enim condimentum est adipiscing varius id
                fermentum
              </p>
            </div>
            <p className="mt-4 mb-2">Languages</p>
            <div className="flex">
              <img src="JS.svg" className=" mr-[6px] w-[22px]" />
              <p>Java Script</p>
              <img src="Spring.svg" className=" mr-[6px] w-[22px] ml-[14px]" />
              <p>Java Sping</p>
            </div>
            <p className="mt-4 mb-2 md:mb-5">Technologies</p>
            <div className="flex mb-5">
              <img src="React.svg" className=" mr-[6px] w-[22px]" />
              <p>React</p>
              <img src="Node.svg" className=" mr-[6px] w-[22px] ml-[14px]" />
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
