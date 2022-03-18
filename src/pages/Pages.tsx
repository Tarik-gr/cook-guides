import React, { useEffect } from "react";
import Home from "./Home";
import { apiManager } from "../io/api";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResult from "./SearchResult";
import Details from "./Details";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  useEffect(() => {
    (async () => {
      const popular = await apiManager.getPopular();
      console.log(popular);
    })();
  }, []);

  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<SearchResult />} />
        <Route path="/recipe/:name" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
