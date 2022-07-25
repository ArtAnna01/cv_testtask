import React from "react";
import { Rating } from "react-simple-star-rating";

function CodeData() {
  return (
    <>
      <div>
        <p className="mb-[14px] text-grey text-xs md:pl-6">
          Includes 3 tasks on coding skills
        </p>
        <div>
          <div className="grid grid-cols-[140px_160px] md:grid-cols-[180px_160px] items-center md:pl-6">
            <p className="subtitle mb-[6px] md:text-base">Sorting algorithm</p>
            <div className="flex flex-row items-center justify-between ">
              <p className="subtitle ml-[10px] md:text-base">4.5</p>
              <div>
                <Rating
                  initialValue={4.5}
                  size={18}
                  fillColor={"#373AF5"}
                  className="top-[-3px] mr-[12px] md:mr-6"
                />
              </div>
            </div>
            <p className="subtitle mb-[6px] md:text-base">Strings and arrays</p>
            <div className="flex flex-row items-center justify-between">
              <p className="subtitle ml-[10px] md:text-base">4.2</p>
              <div>
                <Rating
                  initialValue={4.2}
                  size={18}
                  fillColor={"#373AF5"}
                  className="top-[-3px] mr-[12px] md:mr-6"
                />
              </div>
            </div>
            <p className="subtitle mb-[6px] md:text-base">Complexity</p>
            <div className="flex flex-row items-center justify-between">
              <p className="subtitle ml-[10px] md:text-base">4</p>
              <div>
                <Rating
                  initialValue={4}
                  size={18}
                  fillColor={"#373AF5"}
                  className="top-[-3px] mr-[12px] md:mr-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodeData;
