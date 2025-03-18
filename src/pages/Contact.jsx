import React from "react";

import surat from "../images/contact-image.png";
import printer from "../images/printer.svg";
import phone from "../images/phone.svg";
import message from "../images/message.svg";
import map from "../images/map icon.svg";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto bg-white -z-30 rounded-[15px] sm:py-[29px] md:py-[48px] sm:px-4 md:px-[49px] sm:mb-[100px] md:mb-[200px] sm:mt-7 md:mt-[47px] ">
      <div
        style={{ borderBottom: "2px solid #5996C5" }}
        className="w-fit sm:pb-[10px] md:pb-[22px] pr-[32px] mb-10 "
      >
        <p className="sm:text-2xl md:text-[30px] font-[rale-bold] ">Habarlaşmak üçin</p>
      </div>

      <div className="w-full md:flex-row sm:flex-col flex items-start justify-center sm:gap-[56px] md:gap-[30px] lg:gap-[100px] ">
        <form className="sm:w-full md:w-[45%] sm:pt-0 md:pt-10">
          <div className="flex flex-col items-baseline justify-start gap-2 ">
            <label
              htmlFor="name"
              className="text-[#868686] text-[14px] font-[rale-regular] "
            >
              Doly ady
            </label>
            <input
              className="w-full bg-[#F8F8F8] sm:mb-[15px] md:mb-7 border border-[#E2E2E2] rounded-[10px] outline-none text-[#868686] px-4 py-3 text-[16px] font-[rale-medium] "
              type="text"
              name="name"
            />
          </div>

          <div className="flex flex-col items-baseline justify-start gap-2 ">
            <label
              htmlFor="E-poçta"
              className="text-[#868686] text-[14px] font-[rale-regular] "
            >
              E-poçta
            </label>
            <input
              className="w-full bg-[#F8F8F8] sm:mb-[15px] md:mb-7 border border-[#E2E2E2] rounded-[10px] outline-none text-[#868686] px-4 py-3 text-[16px] font-[rale-medium] "
              type="email"
              name="E-poçta"
            />
          </div>

          <div className="flex flex-col items-baseline justify-start gap-2 ">
            <label
              htmlFor="Telefon belgi ( islege bagly )"
              className="text-[#868686] text-[14px] font-[rale-regular] "
            >
              Telefon belgi ( islege bagly )
            </label>
            <input
              className="w-full bg-[#F8F8F8] sm:mb-[15px] md:mb-7 border border-[#E2E2E2] rounded-[10px] outline-none text-[#868686] px-4 py-3 text-[16px] font-[rale-medium] "
              type="number"
              name="Telefon belgi ( islege bagly )"
            />
          </div>

          <div className="flex flex-col items-baseline justify-start gap-2 ">
            <label
              htmlFor="Tekst"
              className="text-[#868686] text-[14px] font-[rale-regular] "
            >
              Tekst
            </label>
            <textarea
              className="w-full min-h-[206px] bg-[#F8F8F8] mb-8 border border-[#E2E2E2] rounded-[10px] outline-none text-[#868686] px-4 py-3 text-[16px] font-[rale-medium] "
              type="tekst"
              name="Tekst"
            />
          </div>

          <button className="w-full bg-[#5996C5] outline-none flex items-center justify-center rounded-[10px] sm:py-3 md:py-4 text-white sm:text-[14px] md:text-[16px] font-[rale-bold] ">
            Ugrat
          </button>
        </form>

        <div className="sm:w-full md:w-[55%] relative pr-10 ">
          <div className="absolute bg-[#5996C5] z-10 sm:w-[95px] md:w-[166px] sm:h-[143px] md:h-[249px] rounded-[11px] sm:top-[-20px] md:top-[-50px] right-0 "></div>

          <div className="w-full sm:h-full md:h-[350px] lg:h-[418px] mb-[35px] ">
            <img src={surat} alt="image" className="-z-20 w-full h-full" />
          </div>

          <p className="text-[20px] font-[rale-semibold] mb-[35px] ">
            Aşgabat şäheri
          </p>

          <div className="w-full flex flex-col items-baseline justify-start sm:gap-[25px] md:gap-[30px] ">
            <div className="w-full flex items-center justify-start gap-3">
              <img src={map} alt="icon" className="w-[20px] h-[20px] " />
              <p className="sm:text-[16px] md:text-[18px] font-[rale-medium]">
                Salgy: Türkmenistan, Aşgabat şäheri, B.Annanow köçesi
              </p>
            </div>

            <div className="w-full flex items-center justify-start gap-3">
              <img src={message} alt="icon" className="w-[20px] h-[20px] " />
              <p className="sm:text-[16px] md:text-[18px] font-[rale-medium]">
                Elektron poçta: ladaturkmen@info
              </p>
            </div>

            <div className="w-full flex items-center justify-start gap-3">
              <img src={phone} alt="icon" className="w-[20px] h-[20px] " />
              <p className="sm:text-[16px] md:text-[18px] font-[rale-medium]">
                Tel: (+993 12) 21-12-21
              </p>
            </div>

            <div className="w-full flex items-center justify-start gap-3">
              <img src={printer} alt="icon" className="w-[20px] h-[20px] " />
              <p className="sm:text-[16px] md:text-[18px] font-[rale-medium]">
                Faks: (+993 12) 65-89-78
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
