import React, { useState } from "react";

import arrow from "../images/arrow-left.svg";
import logo from "../images/toyota logo.svg";
import phone from "../images/phone.svg";
import map from "../images/map icon.svg";
import { useLocation } from "react-router-dom";

const ShopCard = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div
      data-aos="fade-right"
      data-aos-ease="ease"
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: location.pathname == "/shops" ? "white" : "#FAFAFA",
      }}
      className="w-full cursor-pointer rounded-[6px] pt-[11px] px-[11px]"
    >
      <div className="w-full pb-[14px] flex items-center justify-start gap-4 ">
        <div
          style={{
            backgroundColor:
              location.pathname == "/shops" ? "#FAFAFA" : "white",
          }}
          className="h-full py-7 px-[7px] rounded-[5px] "
        >
          <img src={logo} alt="logo" />
        </div>

        <div className="flex flex-col items-baseline justify-start gap-2">
          <p className="text-[14px] font-[rale-semibold] ">
            Toyoto Awtoşaýlar dükany
          </p>
          <p className="cursor-pointer flex items-center justify-start gap-1 text-[12px] font-[rale-medium] text-[#5996C5] ">
            Giňişleýin <img src={arrow} alt="arrow" />
          </p>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#F2F2F2] pt-5 pb-3 flex flex-col items-baseline justify-start gap-4 ">
          <div className="w-full flex items-center justify-start gap-3 ">
            <img src={map} alt="icon" />
            <p className="text-[14px] font-[rale-medium]">
              Salgy: Türkmenistan, Aşgabat şäheri, B.Annanow köçesi
            </p>
          </div>

          <div className="w-full flex items-center justify-start gap-3 ">
            <img src={phone} alt="icon" />
            <p className="text-[16px] font-[rale-medium]">
              Tel: (+993 12) 21-12-21
            </p>
          </div>

          <div className="w-full flex items-center justify-start gap-3 ">
            <img src={phone} alt="icon" />
            <p className="text-[16px] font-[rale-medium]">
              Tel: (+993 12) 21-12-21
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopCard;
