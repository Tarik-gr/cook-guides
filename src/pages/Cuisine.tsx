import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { apiManager } from "../io/api";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  console.log(cuisine);
  const { type } = useParams();

  const getCuisine = async (name: string) => {
    const data = await apiManager.getCuisine(name);
    setCuisine(data.results);
  };
  useEffect(() => {
    getCuisine(type as string);
  }, []);

  return <div>Cuisine</div>;
}

export default Cuisine;
