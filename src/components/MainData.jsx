import React from "react";
import { Briefcase, Clock, CheckCircle, FileText } from "react-feather";
import { styles } from "..";

function MainData() {
  return (
    <>
      <div className="grid grid-cols-[20px_minmax(100px,260px)] md:grid-cols-[20px_minmax(100px,460px)]  gap-2 ">
        <Briefcase {...styles} />
        <p className="text-sm md:text-base">6 years - total work experience</p>
        <Clock {...styles} />
        <p className="text-sm md:text-base">
          Overlap with your time zone: XX am - XX pm
        </p>
        <CheckCircle {...styles} />
        <p className="text-sm md:text-base">
          Availability: Ready to start now{" "}
        </p>
        <FileText {...styles} />
        <p className="text-sm md:text-base">Full time - 40 hours per week</p>
      </div>
      <div className="mr-[18px] md:mr-0 mb-7 mt-4">
        <p>
          Imperdiet tellus neque nunc, etiam vitae risus quis semper. Tempus
          egestas mauris fringilla iaculis feugiat tincidunt auctor tellus.
          Faucibus enim condimentum est adipiscing varius id fermentum tincidunt
          nisl. Aliquam. Faucibus enim condimentum est adipiscing varius id
          fermentum tincidunt nisl.
        </p>
      </div>
    </>
  );
}

export default MainData;
