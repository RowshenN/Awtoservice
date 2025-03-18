import React from "react";

import slogan from "../../images/slogan.png";
import ShopCard from "../ShopCard";
import { useNavigate } from "react-router-dom";

const HomeShops = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[45%] bg-white rounded-[8px] pt-8 pb-5 px-[23px] ">
      <div className="w-full mb-9 ">
        <img
          data-aos="fade-left"
          src={slogan}
          className="w-full object-cover"
          alt="slogan"
        />
      </div>

      <div className="w-full">
        <div className="w-full flex items-end justify-between mb-5">
          <p
            data-aos="fade-right"
            style={{ borderBottom: "2px solid #5996C5" }}
            className="text-[22px] font-[rale-semibold] pb-[15px] "
          >
            Dükanlar
          </p>
          <p
            data-aos="fade-left"
            onClick={() => navigate("/shops")}
            className="text-[14px] cursor-pointer text-[#5996C5] font-[rale-semibold]"
          >
            Ählisini gör
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-[15px]">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </div>
  );
};

export default HomeShops;
