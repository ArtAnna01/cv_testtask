import React from "react";
import { Briefcase, Clock, CheckCircle, FileText } from "react-feather";
import { styles } from "..";

function MainData() {
  return (
    <>
      <div className="grid grid-cols-[20px_minmax(100px,260px)] gap-2 ml-[14px] md:ml-0">
        <Briefcase {...styles} />
        <p>6 years - total work experience</p>
        <Clock {...styles} />
        <p>Overlap with your time zone: XX am - XX pm</p>
        <CheckCircle {...styles} />
        <p>Availability: Ready to start now </p>
        <FileText {...styles} />
        <p>Full time - 40 hours per week</p>
      </div>
      <div className="mr-[18px] md:mr-0 ml-3.5 md:ml-0 mb-7 mt-4">
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
