import React, { useState } from "react";

import main from "../../images/main.png";
import phone from "../../images/phone.svg";
import printer from "../../images/printer.svg";
import country from "../../images/country-image.png";
import Popup from "../Popup";

const HomeAddress = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleMouseEnter = (id) => {
    setActivePopup(id);
  };

  const handleMouseLeave = () => {
    setActivePopup(null);
  };

  const locations = [
    {
      id: 1,
      name: "Location 1",
      coords: { top: "38.2%", left: "20%" }, //Balkan
      popupContent: <Popup />,
    },
    {
      id: 2,
      name: "Location 2",
      coords: { top: "57%", left: "39%" }, //Ahal left
      popupContent: <Popup />,
    },
    {
      id: 3,
      name: "Location 3",
      coords: { top: "63.2%", left: "45%" }, //Ahal right
      popupContent: <Popup />,
    },
    {
      id: 4,
      name: "Location 4",
      coords: { top: "55%", left: "67%" }, //Lebap
      popupContent: <Popup />,
    },
    {
      id: 5,
      name: "Location 5",
      coords: { top: "73.6%", left: "60%" }, //Mary
      popupContent: <Popup />,
    },
    {
      id: 6,
      name: "Location 6",
      coords: { top: "9%", left: "45.5%" }, //Dasoguz
      popupContent: <Popup />,
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg pt-5 px-4 pb-9 ">
      <div
        data-aos="fade-down"
        className="w-full flex flex-col items-center justify-center gap-5"
      >
        <p className="text-[22px] font-[rale-semibold] text-center ">
          Kopetdag-Lada Awtoulag Hyzmatlar Merkezi
        </p>
        <div className="w-[50%] h-[2.5px] bg-[#5996C5]"></div>
      </div>

      <div className="w-full mt-5 mb-10">
        <img
          data-aos="fade-up"
          src={main}
          alt="main"
          className="w-full object-cover"
        />
      </div>

      <div
        data-aos="fade-down"
        className="w-full mb-[60px] flex flex-col items-center justify-center gap-5"
      >
        <p className="text-[22px] font-[rale-semibold] text-center ">
          Biziň salgylarymyz
        </p>
        <div className="w-[50%] h-[2.5px] bg-[#5996C5]"></div>
      </div>

      <div className="w-full mb-[37px] h-[350px] relative">
        <img
          data-aos="fade-up"
          src={country}
          alt="country"
          className="w-full h-full object-contain"
        />
        {locations.map((location) => (
          <div
            key={location.id}
            style={{
              position: "absolute",
              top: location.coords.top,
              left: location.coords.left,
            }}
            onMouseEnter={() => handleMouseEnter(location.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                width: "10px", // Adjust marker size as needed
                height: "10px", // Adjust marker size as needed
                transform: "translate(-50%, -50%)", // Center the marker
                cursor: "pointer",
              }}
            >
              {activePopup === location.id && (
                <div
                  data-aos="fade-up"
                  style={{
                    position: "absolute",
                    zIndex: 10,
                    transform:
                      location.id == 6
                        ? "translate(7%, -50px)"
                        : "translate(-5%, -104%)",
                  }}
                >
                  {location.popupContent}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-4 text-[18px] font-[rale-medium] ">
          <img src={phone} alt="phone" />
          <p>Tel: (+993 12) 21-12-21 </p>
        </div>

        <div className="flex items-center justify-center gap-4 text-[18px] font-[rale-medium] ">
          <img src={printer} alt="printer" />
          <p>Faks: (+993 12) 65-89-78</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAddress;
