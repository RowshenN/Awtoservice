import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Home from "../pages/Home";
import PageNotFound from "../components/PageNotFound";
import PageLoading from "../components/PageLoading";

import { About, Contact, Announcements, Shops } from "./lazy";
import Navigation from "../components/Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/about"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <About />
              </Suspense>
            }
          />

          <Route
            path="/announcement"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Announcements />
              </Suspense>
            }
          />

          <Route
            path="/shops"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Shops />
              </Suspense>
            }
          />

          <Route path="*" exact element={<PageNotFound />} />
          <Route path="/loading" exact element={<PageLoading />} />

          <Route
            path="/contact"
            exact
            element={
              <Suspense fallback={<PageLoading />}>
                {" "}
                <Contact />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
};

const ScrollTop = (props) => {
  const { children } = props;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <main className="welcome">{children}</main>;
};

export default Router;
