import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.svg";
// import message from "../images/message.svg";
import Temperature from "../images/Temperature.svg";
// import map from "../images/map icon.svg";
// import phone from "../images/phone.svg";
// import printer from "../images/printer.svg";
import turkmen_flag from "../images/turkmen flag.svg";
import burger from "../images/burger-button.svg";
import down from "../images/down arrow.svg";
import { SebedimContext } from "../context/Context";
import { Drawer } from "antd";

const Navigation = () => {
  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  let day = currentDate.getDate();
  day = day < 10 ? "0" + day : day;

  let month = currentDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <>
      <div className="w-full md:block sm:hidden bg-[#FAFAFA] py-2">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <p>{formattedDate}</p>
            <div className="flex items-center justify-center">
              <img src={Temperature} alt="temperrature" />
              <p>+ 28°C Aşgabat</p>
            </div>
          </div>

          <div
            onClick={() => setLang(!lang)}
            className="flex px-2 relative cursor-pointer items-center justify-center gap-2"
          >
            <img src={turkmen_flag} alt="flag" />
            <p>
              {dil === "tk" ? "Türkmen" : dil === "ru" ? "Russian" : "English"}
            </p>

            <div
              onMouseLeave={() => setLang(false)}
              className={
                (lang === true ? "flex " : " hidden ") +
                "absolute px-1 rounded-lg left-0 right-0 w-full top-[120%] bg-white flex flex-col items-center justify-center gap-2"
              }
            >
              <div className="flex cursor-pointer items-center justify-start w-full gap-2">
                <img src={turkmen_flag} alt="flag" />
                <p onClick={() => ChangeDil("en")}>English</p>
              </div>

              <div className="flex cursor-pointer items-center justify-start w-full gap-2">
                <img src={turkmen_flag} alt="flag" />
                <p onClick={() => ChangeDil("tk")}>Türkmen</p>
              </div>

              <div className="flex cursor-pointer items-center justify-start w-full gap-2">
                <img src={turkmen_flag} alt="flag" />
                <p onClick={() => ChangeDil("ru")}>Russian</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white sm:py-[17px] md:py-9">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer justify-center gap-5"
          >
            <img
              src={logo}
              alt="logo"
              className="sm:w-[61px] md:w-[75px] md:h-[49px] sm:h-[39px] object-contain "
            />
            <p className="text-[#5996C5] md:block sm:hidden text-[18px] font-[rale-bold] ">
              Kopetdag <br /> Awto Serwis
            </p>
          </div>

          <div className="sm:hidden md:flex items-center justify-center text-[16px] font-[rale-semibold] md:gap-5 lg:gap-8">
            <p
              onClick={() => navigate("/announcement")}
              className="cursor-pointer text-[#636363] "
            >
              Bildirişler
            </p>
            <a href="/#service" className="cursor-pointer text-[#636363]">
              Hyzmatlar
            </a>
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

            <div
              onClick={() => navigate("/contact")}
              className="text-white bg-[#5996C5] text-[16px] font-[rale-bold]  rounded-[6px] px-5 py-[10px] cursor-pointer "
            >
              <p>Habarlaşmak</p>
            </div>
          </div>

          <div className="sm:flex md:hidden items-center justify-center gap-[26px]">
            <div className="flex cursor-pointer items-center justify-center gap-1">
              <p className="text-[#5996C5] text-[14px] font-[rale-medium] ">
                TM
              </p>
              <img src={down} alt="arrow" />
            </div>

            <div onClick={() => setOpen(true)} className="cursor-pointer">
              <img src={burger} alt="burger" />
            </div>
          </div>

          {/* Drawer div */}
          <div className="hidden">
            <Drawer
              placement="top"
              closable={false}
              onClose={() => setOpen(false)}
              open={open}
              key={"placement"}
            >
              <div className="flex items-center text-[14px] font-[rale-medium] justify-center gap-4">
                <div className="flex flex-col py-[10px] px-5 rounded-[29px] w-full items-start justify-start gap-5">
                  <p
                    onClick={() => navigate("/announcement")}
                    className="cursor-pointer "
                  >
                    Bildirişler
                  </p>
                  <p
                    onClick={() => navigate("/service")}
                    className="cursor-pointer"
                  >
                    Hyzmatlar
                  </p>
                  <p
                    onClick={() => navigate("/shops")}
                    className="cursor-pointer"
                  >
                    Dükanlar
                  </p>
                  <p
                    onClick={() => navigate("/about")}
                    className="cursor-pointer"
                  >
                    Biz barada
                  </p>
                  <p
                    onClick={() => navigate("/contact")}
                    className="cursor-pointer w-full"
                  >
                    {dil === "tk"
                      ? "Habarlaşmak üçin"
                      : dil === "ru"
                      ? "Обращайтесь к нам"
                      : dil === "tr"
                      ? "Bizimle iletişime geçin"
                      : "Contact us"}
                  </p>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
