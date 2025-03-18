import React from "react";
import ShopCard from "../components/ShopCard";
// import Pagination from "../components/Pagination";

const Shops = () => {
  return (
    <>
      <div className="w-[90%] mt-[47px] mb-[150px] mx-auto ">
        <p className="sm:text-2xl md:text-[40px] font-[rale-bold] mb-[26px] ">
          Dükanlar
        </p>

        <div className="w-full grid gap-5 grid-cols-auto-fit-150">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>

      {/* <Pagination /> */}
    </>
  );
};

export default Shops;
