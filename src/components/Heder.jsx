import React from "react";
import { Briefcase, Clock, CheckCircle, FileText, Share } from "react-feather";

const styles = {
  size: "20px",
  strokeWidth: "1px",
};

function Heder() {
  return (
    <>
      <div className="flex flex-row pt-5 mb-4">
        <img src="Rectangle.png" className="mr-[10px] ml-[14px]" />
        <div className="mt-[5px]">
          <h2 className="mb-0.5">Ivan Ivanov</h2>
          <p>Senior Frontend Developer</p>
        </div>
      </div>
      <div className="grid  grid-cols-2 place-content-stretch ml-[14px] mr-[18px]">
        <Briefcase {...styles} />
        <p>6 years - total work experience</p>
        <Clock {...styles} />
        <p>Overlap with your time zone: XX am - XX pm</p>
        <CheckCircle {...styles} />
        <p>Availability: Ready to start now </p>
        <FileText {...styles} />
        <p>Full time - 40 hours per week</p>
      </div>
      <div className="mr-[18px] ml-3.5 mb-7 mt-4">
        <p>
          Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus
          egestas mauris fringilla iaculis feugiat tincidunt auctor tellus.
          Faucibus enim condimentum est adipiscing varius id fermentum tincidunt
          nisl. Aliquam. Faucibus enim condimentum est adipiscing varius id
          fermentum tincidunt nisl.
        </p>
      </div>
      <div className="flex gap-[18px] ml-[22px]">
        <button className="h-10 w-[111px] border rounded-lg border-originalBlue text-originalBlue flex justify-center items-center gap-[6px]">
          <Share {...styles} />
          Share
        </button>
        <button className="h-10 w-[142px] border rounded-lg bg-originalBlue  border-originalBlue text-white">
          Book a call
        </button>
      </div>
      <hr className="mt-[28px] ml-[14px] bg-lightGrey w-[288px] "></hr>
    </>
  );
}

export default Heder;
