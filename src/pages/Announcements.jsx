import React from "react";
import AnnounceCard from "../components/AnnounceCard";

import arrow from "../images/thin right arrow.svg";
// import Pagination from "../components/Pagination";

const Announcements = () => {
  return (
    <div className="w-[90%] mx-auto bg-white rounded-[15px] sm:py-[29px] md:py-[48px] sm:px-[13px] md:px-[49px] sm:mb-[100px] md:mb-[200px] sm:mt-[29px] md:mt-[47px] ">
      <div
        style={{ borderBottom: "2px solid #5996C5" }}
        className="w-fit sm:pb-[10px] md:pb-[22px] pr-[32px] sm:mb-0 md:mb-3 "
      >
        <p className="sm:text-2xl md:text-[30px] font-[rale-bold] ">Bildirişler</p>
      </div>

      <div className="w-full divide-y divide-[#E6E6E6] mb-7 ">
        <AnnounceCard
          header={
            "Germaniýada ulaglaryň transport logistikasynyň bahalarynyň ýokarlanjakdygy çaklanylýar."
          }
          text={
            "Germaniýanyň ekspeditorlar we logistika assosiasiýasy 2023-nji ýylyň 1-nji dekabryndan ýük ulaglarynyň geçmegi üçin harçlaýan çykdajylarynyň ortaça 81% ýokarlanjakdygyny çaklaýar. Assosiasiýa tarapyndan berlen sargyda laýyklykda, «Forlogic» konsalting kompaniýasysy oňa 2160 baha berdi."
          }
          date={"27.02.2025"}
        />
        <AnnounceCard
          header={
            "Germaniýada ulaglaryň transport logistikasynyň bahalarynyň ýokarlanjakdygy çaklanylýar."
          }
          text={
            "Germaniýanyň ekspeditorlar we logistika assosiasiýasy 2023-nji ýylyň 1-nji dekabryndan ýük ulaglarynyň geçmegi üçin harçlaýan çykdajylarynyň ortaça 81% ýokarlanjakdygyny çaklaýar. Assosiasiýa tarapyndan berlen sargyda laýyklykda, «Forlogic» konsalting kompaniýasysy oňa 2160 baha berdi."
          }
          date={"27.02.2025"}
        />
        <AnnounceCard
          header={
            "Germaniýada ulaglaryň transport logistikasynyň bahalarynyň ýokarlanjakdygy çaklanylýar."
          }
          text={
            "Germaniýanyň ekspeditorlar we logistika assosiasiýasy 2023-nji ýylyň 1-nji dekabryndan ýük ulaglarynyň geçmegi üçin harçlaýan çykdajylarynyň ortaça 81% ýokarlanjakdygyny çaklaýar. Assosiasiýa tarapyndan berlen sargyda laýyklykda, «Forlogic» konsalting kompaniýasysy oňa 2160 baha berdi."
          }
          date={"27.02.2025"}
        />
        <AnnounceCard
          header={
            "Germaniýada ulaglaryň transport logistikasynyň bahalarynyň ýokarlanjakdygy çaklanylýar."
          }
          text={
            "Germaniýanyň ekspeditorlar we logistika assosiasiýasy 2023-nji ýylyň 1-nji dekabryndan ýük ulaglarynyň geçmegi üçin harçlaýan çykdajylarynyň ortaça 81% ýokarlanjakdygyny çaklaýar. Assosiasiýa tarapyndan berlen sargyda laýyklykda, «Forlogic» konsalting kompaniýasysy oňa 2160 baha berdi."
          }
          date={"27.02.2025"}
        />
        <AnnounceCard
          header={
            "Germaniýada ulaglaryň transport logistikasynyň bahalarynyň ýokarlanjakdygy çaklanylýar."
          }
          text={
            "Germaniýanyň ekspeditorlar we logistika assosiasiýasy 2023-nji ýylyň 1-nji dekabryndan ýük ulaglarynyň geçmegi üçin harçlaýan çykdajylarynyň ortaça 81% ýokarlanjakdygyny çaklaýar. Assosiasiýa tarapyndan berlen sargyda laýyklykda, «Forlogic» konsalting kompaniýasysy oňa 2160 baha berdi."
          }
          date={"27.02.2025"}
        />
      </div>

      <div className="w-full sm:hidden md:flex items-center justify-center">
        <button className="outline-none flex items-center justify-center gap-[10px] border border-[#EBEBEB] rounded-[33px] px-[26px] py-3 text-[16px] font-[rale-medium] ">
          Dowamyny gör <img src={arrow} alt="arrow" />
        </button>
      </div>

      {/* <Pagination /> */}
    </div>
  );
};

export default Announcements;
