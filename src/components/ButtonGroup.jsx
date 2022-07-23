import React from "react";
import { Share } from "react-feather";
import { styles } from "..";

export default function ButtonGroup() {
  return (
    <div className="flex gap-[18px] md:gap-[20px] ml-[22px]">
      <button className="h-10 w-[111px] text-base border rounded-lg border-originalBlue text-originalBlue flex justify-center items-center gap-[6px]">
        <Share {...styles} />
        <p className="text-base">Share</p>
      </button>
      <button className="h-10 w-[142px]  text-base border rounded-lg bg-originalBlue  border-originalBlue text-white">
        Book a call
      </button>
    </div>
  );
}
