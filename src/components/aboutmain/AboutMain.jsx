import React from "react";
import { useNavigate } from "react-router-dom";

import surat1 from "../../images/about.png";
import surat2 from "../../images/about2.png";
import icon from "../../images/aboutmainicon.svg";
import arrow from "../../images/arrow-left.svg";

const AboutMain = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white">
      <div className="w-[80%] -z-20 pl-[76px] pr-[96px] pt-[107px] pb-[126px] flex items-start justify-center gap-[100px] mx-auto rounded-lg shadow-xl ">
        <div className="w-full">
          <p
            style={{ borderLeft: "3px solid #5996C5" }}
            className="text-[40px] font-[rale-bold] pl-5"
          >
            Biz barada
          </p>
          <p className="text-[20px] my-7 font-[rale-medium] ">
          "Köpetdag-Lada" AGPJ awtoserwisi — siziň awtoulagyňyzy hyzmat etmekde we 
        abatlamakda ygtybarly hyzmatdaş. Biz giň gerimli hyzmatlary hödürleýäris: 
        diagnoz goýmakdan we tekerleri çalyşmakdan başlap, hereketlendirijini, KPP-ni 
        bejermäge hem-de boýag işlerine çenli. Tejribeli ussalarymyz döwrebap enjamlar 
        we ýokary hilli ätiýaçlyk şaýlary ulanyp, ulagyňyzyň uzak we bökdençsiz işlemegini 
        üpjün edýärler. Biz aýratyn çemeleşmegi, elýeterli bahalary we işleriň çalt ýerine 
        ýetirilmegini kepillendirýäris. Hünärmenlere ynanyň — siziň awtoulagyňyz ygtybarly ellerde!
          </p>
          <div
            onClick={() => navigate("/about")}
            className="flex cursor-pointer w-fit items-center justify-start gap-1"
          >
            <p className="text-[#5996C5] text-[16px] font-[rale-medium] ">
              Giňişleýin
            </p>{" "}
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center relative">
          <img
            src={surat1}
            className="w-[363px] z-10 h-[413px] object-cover rounded-[6px]"
            alt="surat"
          />
          <img
            className="w-[150px] z-20 h-[175px] object-cover rounded-[6px] top-[-50px] right-0 absolute"
            src={surat2}
            alt="surat"
          />
          <img
            src={icon}
            alt="icon"
            className="absolute z-0 top-[-50px] bottom-[-100px] left-0 right-0 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutMain);
