import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { apiManager } from "../io/api";
import { CardCuisine, Grid } from "../components/Styles";
import { Recipe } from "../components/Popular";

function Cuisine() {
  const [cuisine, setCuisine] = useState<Array<Recipe>>([]);
  const { type } = useParams();

  const getCuisine = async (name: string) => {
    const data = await apiManager.getCuisine(name);
    setCuisine(data.results);
  };
  useEffect(() => {
    getCuisine(type as string);
  }, [type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.length &&
        cuisine.map((el) => (
          <CardCuisine key={el.id}>
            <Link to={"/recipe/" + el.id}>
              <img src={el.image} />
            </Link>
            <h4>{el.title}</h4>
          </CardCuisine>
        ))}
    </Grid>
  );
}

export default Cuisine;
