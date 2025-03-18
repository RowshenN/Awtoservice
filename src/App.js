import React from "react";

import SebedimContextProvider from "./context/Context";
import Router from "./routes/Router";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ duration: 800, delay: 150 });
  return (
    <div className="max-w-[2000px] mx-auto">
      <SebedimContextProvider>
        <Router />
      </SebedimContextProvider>
    </div>
  );
}
export default App;
