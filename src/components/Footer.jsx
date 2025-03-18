import React from "react";

import logo from "../images/footer-logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-[38px] ">
      <div className="w-full mb-5 flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[75px] object-cover " />
      </div>

      <div className="w-full flex sm:mb-[39px] md:mb-[42px] items-center justify-center">
        <p className="sm:text-[16px] md:text-[18px] font-[rale-medium] text-[#5996C5] ">
          Köpetdag Lada” awto serwis AGPJ
        </p>
      </div>

      <div className="flex w-full sm:mb-[39px] md:mb-[42px] items-center flex-wrap justify-center sm:text-[12px] md:text-[16px] font-[rale-semibold] gap-8">
        <p
          onClick={() => navigate("/announcement")}
          className="cursor-pointer text-[#636363] "
        >
          Bildirişler
        </p>
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-[#636363]"
        >
          Habarlar
        </p>
        <p
          onClick={() => navigate("/service")}
          className="cursor-pointer text-[#636363]"
        >
          Hyzmatlar
        </p>
        <p
          onClick={() => navigate("/shops")}
          className="cursor-pointer text-[#636363]"
        >
          Dükanlar
        </p>
        <p
          onClick={() => navigate("/about")}
          className="cursor-pointer text-[#636363]"
        >
          Biz barada
        </p>
      </div>

      <div className="w-full text-center flex items-center justify-center sm:text-[12px] md:text-[14px] font-[rale-regular] text-[#989898] ">
        <p>© 2025 kopetdagladaagpj.com. Ähli hukuklary goraglydyr.</p>
      </div>
    </div>
  );
};

export default Footer;
