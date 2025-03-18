import React from "react";
import ServiceCard from "./ServiceCard";

import surat1 from "../../images/service-card-image1.png";
import surat2 from "../../images/service-card-image2.png";
import surat3 from "../../images/service-card-image3.png";
import surat4 from "../../images/service-card-image4.png";
import surat5 from "../../images/service-card-image5.png";
import surat6 from "../../images/service-card-image6.png";
import icon1 from "../../images/service-card-icon1.svg";
import icon2 from "../../images/service-card-icon2.svg";
import icon3 from "../../images/service-card-icon3.svg";
import icon4 from "../../images/service-card-icon4.svg";
import icon5 from "../../images/service-card-icon5.svg";
import icon6 from "../../images/service-card-icon6.svg";
import wave from "../../images/service-wave.svg";
import ServiceCar from "./ServiceCar";
import AboutMain from "../aboutmain/AboutMain";

const ServiceMain = () => {
  return (
    <div
      id="service"
      className="w-full bg-white relative -z-50 rounded-[8px] pb-[125px] pt-[72px] "
    >
      <div className="w-[90%] mx-auto mb-[100px] ">
        <div className="mb-[75px]">
          <div data-aos="fade-down" className="mb-5">
            <p
              className="text-[40px] font-[rale-bold] pl-5"
              style={{ borderLeft: "3px solid #5996C5" }}
            >
              Hyzmatlarymyz
            </p>
          </div>
          <p
            data-aos="fade-up"
            className="text-[20px] font-[rale-medium] pl-5 "
          >
            Awtoulag hyzmatlarynyň giň gerimini hödürleýäris
          </p>
        </div>

        <div className="w-full gap-9 grid grid-cols-auto-fill-250">
          <ServiceCard
            image={surat6}
            icon={icon6}
            header={"Mator / Abatlaýyş"}
            desc={
              "Awtoulagyňyzyň hereketlendirijisi — onuň ýüregi. Biziň hünärmenlerimiz matoryň abatlaýyş we hyzmat işlerini ýokary hilli ýerine ýetirip, ulagyňyzyň güýjüni we ygtybarlylygyny dikeldýärler."
            }
          />
          <ServiceCard
            image={surat5}
            icon={icon5}
            header={"Karobka hyzmaty"}
            desc={
              "KPP (karobka) ulgamynyň dogry işlemegi ulagyň hereketiniň rahatlygyny üpjün edýär. Biz awtomatiki we mehaniki karobkalary abatlaýarys, ýagyny çalyşýarys we degişli sazlamalary geçirýäris."
            }
          />
          <ServiceCard
            image={surat4}
            icon={icon4}
            header={"Teker"}
            desc={
              "Howpsuz sürüşiň esasy şerti — hil taýdan dogry saýlanan we gurnalan tekerler. Biz tekerleri çalyşmak, balanslamak we abatlamak hyzmatlaryny hödürleýäris."
            }
          />
          <ServiceCard
            image={surat3}
            icon={icon3}
            header={"Boýag hyzmatlary"}
            desc={
              "Ulagyňyz täze ýaly görünsin! Biz ýokary hilli boýag we kosmetiki abatlaýyş hyzmatlaryny ýerine ýetirýäris. Döwrebap tehnologiýalar arkaly ulagyňyzyň daşky görnüşini dikeldýäris."
            }
          />
          <ServiceCard
            image={surat2}
            icon={icon2}
            header={"Diagnostika"}
            desc={
              "Döwürlaýyn diagnostika ulagyňyzyň kynçylyksyz işlemegini üpjün edýär. Biz ýöriteleşdirilen enjamlar arkaly ähli ulgamlary barlap, kemçilikleri wagtynda ýüze çykarýarys."
            }
          />
          <ServiceCard
            image={surat1}
            icon={icon1}
            header={"Tormoz"}
            desc={
              "Howpsuzlyk ilkinji nobatda! Tormoz ulgamyňyz ygtybarly bolmagy üçin biz tormoz padlagalaryny, diskleri we beýleki zerur şaýlary çalyşýarys hem-de abatlaýarys."
            }
          />
        </div>
      </div>
      <img
        src={wave}
        alt="wave"
        className="-z-40 absolute top-[90px] w-full left-0 right-0 "
      />

      <ServiceCar />
      <AboutMain />
    </div>
  );
};

export default ServiceMain;
