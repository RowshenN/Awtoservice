import React from "react";

import partner1 from "../images/partner1.svg";
import partner2 from "../images/partner2.svg";
import partner3 from "../images/partner3.svg";
import partner4 from "../images/partner4.svg";
import partner5 from "../images/partner5.svg";
// import partner6 from '../images/partner6.svg'

const PartnerShip = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto pt-[167px] pb-[149px] flex items-center gap-[100px] justify-center ">
        <p className="text-[40px] font-[rale-bold] w-[70%]">
          Biziň işleşýän hyzmatdaşlarymyz
        </p>

        <div className="w-full grid grid-cols-auto-fit-250 gap-[30px] ">
          <img
            src={partner1}
            alt="partner"
            className="w-full h-[63px] object-contain"
          />
          <img
            src={partner2}
            alt="partner"
            className="w-full h-[63px] object-contain"
          />
          <img
            src={partner3}
            alt="partner"
            className="w-full h-[63px] object-contain"
          />
          <img
            src={partner4}
            alt="partner"
            className="w-full h-[63px] object-contain"
          />
          <img
            src={partner5}
            alt="partner"
            className="w-full h-[63px] object-contain"
          />
          <img
            src={partner5}
            alt="partner"
            className="w-full h-[63px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
