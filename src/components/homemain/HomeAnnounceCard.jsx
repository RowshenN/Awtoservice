import React from "react";

const HomeAnnounceCard = ({ name, desc }) => {
  return (
    <div data-aos="fade-left" className="w-full cursor-pointer py-6">
      <p className="mb-[11px] text-[16px] font-[rale-semibold] ">{name}</p>
      <p className=" text-[14px] font-[rale-regular] text-[#8A8A8A] line-clamp-3">
        {desc}
      </p>
    </div>
  );
};

export default HomeAnnounceCard;
