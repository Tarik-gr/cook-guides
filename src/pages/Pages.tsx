import React, { useEffect } from "react";
import Home from "./Home";
import { apiManager } from "../io/api";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

const Pages = () => {
  useEffect(() => {
    (async () => {
      const popular = await apiManager.getPopular();
      console.log(popular);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
