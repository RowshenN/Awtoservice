import React from "react";

const ServiceCard = ({ image, icon, header, desc }) => {
  return (
    <div data-aos="fade-up" className="w-full shadow-lg bg-white rounded-lg pb-[26px] ">
      <div className="w-full  h-[210px]">
        <img
          src={image}
          alt="image"
          className="w-full h-full   object-contain"
        />
      </div>

      <div className="w-full mt-[-50px] px-10">
        <div className="py-[17px] relative z-[20] px-[18px] mb-[22px] bg-[#5996C5]  rounded-lg w-[80px] h-[80px] ">
          <img
            src={icon}
            alt="icon"
            className="w-[45px] h-[45px] object-cover "
          />
        </div>

        <p className="mb-3 text-[20px] font-[rale-semibold] ">{header}</p>
        <p className="text-[16px] font-[rale-regular] text-[#8A8A8A]">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
