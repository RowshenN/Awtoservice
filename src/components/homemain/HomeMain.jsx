import React from "react";
import HomeShops from "./HomeShops";
import HomeAddress from "./HomeAddress";
import HomeAnnouncements from "./HomeAnnouncements";

const HomeMain = () => {
  return (
    <div className="w-full flex items-start justify-center gap-[17px] mb-[87px] ">
      <div className="w-full flex items-start justify-between gap-[17px] ">
        <HomeShops />
        <HomeAddress />
      </div>
      <HomeAnnouncements />
    </div>
  );
};

export default HomeMain;
