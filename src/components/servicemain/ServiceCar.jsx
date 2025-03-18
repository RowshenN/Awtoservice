import React from "react";

import car from "../../images/service-car.png";
import shadow from "../../images/car-shadow.png";
import lines from "../../images/service-car-lines.svg";

const ServiceCar = () => {
  return (
    <div className="w-full mb-[167px] relative flex items-center justify-center">
      <div className="w-[60%] pt-[30px] z-20 relative ">
        <img
          src={lines}
          alt="lines"
          className="absolute h-[90%] top-[70px] left-0 right-0 bottom-0 w-full"
        />
        <div className="w-full mb-[-50px] text-[24px] font-[rale-bold] flex items-start justify-between">
          <p className="ml-[-50px] mt-[90px] ">Mator / Abatlaýyş</p>
          <p className="mt-[50px] ml-[-30px]">Diagnostika</p>
          <p className="mr-[-70px] mt-[70px]">Boýag hyzmatlary</p>
        </div>
        <img src={car} alt="car" className="w-full h-[531px] object-contain" />
        <div className="w-full text-[24px] font-[rale-bold] mt-[0px] flex items-start justify-between">
          <p className="ml-[-70px] mt-[-55px] ">Tormoz</p>
          <p className="mt-[-30px] ml-[-30px] ">Karobka hyzmatlary</p>
          <p className="mt-[-50px]">Teker </p>
        </div>
        <img
          src={shadow}
          alt="shadow"
          className="absolute left-0 right-0 bottom-[15%] "
        />
      </div>
      <div className="absolute bottom-[20%] right-0 left-0 h-[91px] bg-[#5996C533] z-10  "></div>
    </div>
  );
};

export default ServiceCar;
