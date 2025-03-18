import React from "react";

import surat from "../images/popup image.png";
import triangle from "../images/popup triangle.svg";
import message from "../images/message.svg";
import phone from "../images/phone.svg";
import printer from "../images/printer.svg";
import map from "../images/map icon.svg";

const Popup = () => {
  return (
    <div className="bg-white relative w-[234px] rounded-[11px] px-[10px] pt-[11px] pb-[15px] ">
      <div className="w-full h-[131px] mb-3">
        <img src={surat} alt="surat" className="w-full rounded-[7px] h-full" />
      </div>

      <p className="text-[13px] font-[rale-bold] mb-4">Aşgabat şäheri</p>

      <div className="w-full text-[10px] font-[rale-medium] flex flex-col items-baseline justify-start gap-[10px] ">
        <div className="w-full flex items-center justify-start gap-2">
          <img src={map} alt="icon" className="w-[12px] h-[12px] " />
          <p>Salgy: Türkmenistan, Aşgabat şäheri, B.Annanow köçesi</p>
        </div>

        <div className="w-full flex items-center justify-start gap-3">
          <img src={phone} alt="icon" className="w-[12px] h-[12px] " />
          <p>Tel: (+993 12) 21-12-21</p>
        </div>

        <div className="w-full flex items-center justify-start gap-3">
          <img src={printer} alt="icon" className="w-[12px] h-[12px] " />
          <p>Faks: (+993 12) 65-89-78</p>
        </div>

        <div className="z-30 w-full flex items-center justify-start gap-3">
          <img src={message} alt="icon" className="w-[12px] h-[12px] " />
          <p>Elektron poçta: ladaturkmen@info</p>
        </div>
      </div>

      <img
        src={triangle}
        alt="triangle"
        className="absolute z-10 bottom-[-10px] left-3"
      />
    </div>
  );
};

export default Popup;
