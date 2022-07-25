import React from "react";
import useBP from "../hooks/useBP";

export default function Avatar() {
  const { isDesktop, isTablet, isMobile } = useBP();
  return (
    <>
      {isMobile && <img alt="img" src="PhotoSM.png" className="mr-[10px]" />}
      {isTablet && <img alt="img" src="PhotoMD.png" className="mr-[26px]" />}
      {isDesktop && <img alt="img" src="PhotoLG.png" className="mr-[28px]" />}
    </>
  );
}
