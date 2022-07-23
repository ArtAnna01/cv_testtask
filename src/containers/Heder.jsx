import React from "react";
import Avatar from "../components/Avatar";
import ButtonGroup from "../components/ButtonGroup";
import MainData from "../components/MainData";
import PersonalData from "../components/PersonalData";
import useBP from "../hooks/useBP";

function Heder() {
  const { isTablet, isDesktop, isMobile } = useBP();
  return (
    <>
      <div className="flex flex-col md:flex-row pt-[18px] md:pt-7 md:pr-6 w-full">
        {!isMobile && <Avatar />}
        <div className="flex flex-row w-full md:justify-between mb-4 md:mb-0">
          {isMobile && <Avatar />}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full md:mb-4">
              <PersonalData />
              {!isMobile && <ButtonGroup />}
            </div>
            {!isMobile && <MainData />}
          </div>
        </div>
        {isMobile && <MainData />}
      </div>
      {isMobile && <ButtonGroup />}
      <hr className="mt-[28px] md:mt-[32px] bg-lightGrey ml-[14px] mr-[18px] md:mx-6"></hr>
    </>
  );
}

export default Heder;
