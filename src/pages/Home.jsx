import React from "react";
import HomeMain from "../components/homemain/HomeMain";
import ServiceMain from "../components/servicemain/ServiceMain";
import PartnerShip from "../components/PartnerShip";

const Home = () => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-[44px]">
        <HomeMain />
      </div>
      <ServiceMain />
      <PartnerShip />
    </>
  );
};

export default Home;
