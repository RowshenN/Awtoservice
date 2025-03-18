import React from "react";

import HomeAnnounceCard from "./HomeAnnounceCard";
import { useNavigate } from "react-router-dom";

const HomeAnnouncements = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] bg-white rounded-[8px] pt-5 pb-8 px-[23px] ">
      <div className="w-full">
        <div className="w-full flex items-end justify-between">
          <p
            data-aos="fade-right"
            style={{ borderBottom: "2px solid #5996C5" }}
            className="text-[22px] font-[rale-semibold] pb-[15px] "
          >
            Bildirişler
          </p>
          <p
            data-aos="fade-left"
            onClick={() => navigate("/announcement")}
            className="text-[14px] cursor-pointer text-[#5996C5] font-[rale-semibold]"
          >
            Ählisini gör
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center divide-y divide-[#E6E6E6]">
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
          <HomeAnnounceCard
            desc={
              "Lorem ipsum dolor sit amet consectetur. Sit est justo nec interdum est condimentum at facilisi tempus. "
            }
            name={"Lorem ipsum dolar sit"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAnnouncements;
