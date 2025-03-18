import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

import surat1 from "../images/aboutswiper1.png";
import surat2 from "../images/aboutswiper2.png";
import surat3 from "../images/aboutswiper3.png";

const ImageSwiper = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative w-full">
      {" "}
      {/* Swiper container */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100px",
          height: "100%",
          background: "linear-gradient(to right, white, transparent)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "100px",
          height: "100%",
          background: "linear-gradient(to left, white, transparent)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2.3,
          },
          760: {
            slidesPerView: 2.7,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex + 1);
        }}
        centeredSlides={false}
        scrollbar={false}
        className="!w-full !flex !h-fit !justify-center !items-end "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: index === activeIndex ? "341px" : "259px",
                borderRadius: "15px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const AboutUs = () => {
  const imageList = [surat1, surat2, surat3, surat1, surat2, surat3];
  return (
    <div className="w-[90%] mx-auto bg-white rounded-[15px] pt-[45px] pb-[77px] mb-[200px] mt-[47px] ">
      <div
        style={{ borderBottom: "2px solid #5996C5" }}
        className="w-fit pb-[22px] pr-[20px] mb-[37px] ml-[50px] "
      >
        <p className="text-[30px] font-[rale-bold] ">Biz barada</p>
      </div>

      <div className="w-full mb-[56px]">
        <ImageSwiper images={imageList} />
      </div>

      <div className="w-[90%] mx-auto text-[20px] font-[rale-medium] ">
        <p className="mb-3">
        "Köpetdag-Lada" AGPJ awtoserwisi — siziň awtoulagyňyzy hyzmat etmekde we 
        abatlamakda ygtybarly hyzmatdaş. Biz giň gerimli hyzmatlary hödürleýäris: 
        diagnoz goýmakdan we tekerleri çalyşmakdan başlap, hereketlendirijini, KPP-ni 
        bejermäge hem-de boýag işlerine çenli. Tejribeli ussalarymyz döwrebap enjamlar 
        we ýokary hilli ätiýaçlyk şaýlary ulanyp, ulagyňyzyň uzak we bökdençsiz işlemegini 
        üpjün edýärler. Biz aýratyn çemeleşmegi, elýeterli bahalary we işleriň çalt ýerine 
        ýetirilmegini kepillendirýäris. Hünärmenlere ynanyň — siziň awtoulagyňyz ygtybarly ellerde!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
