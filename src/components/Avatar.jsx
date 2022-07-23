import React from "react";
import useBP from "../hooks/useBP";

export default function Avatar() {
  const { isDesktop, isTablet, isMobile } = useBP();
  return (
    <>
      {isMobile && <img src="PhotoSM.png" className="mr-[10px] ml-[14px]" />}
      {isTablet && <img src="PhotoMD.png" className="mr-[26px] ml-[25px]" />}
      {isDesktop && <img src="PhotoLG.png" className="mr-[28px] ml-[32px]" />}
    </>
  );
}
