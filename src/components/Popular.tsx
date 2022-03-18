import React, { useEffect, useState } from "react";
import { apiManager } from "../io/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "./Styles";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  extendedIngredients: Array<{ id: string; original: string }>;
}

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    (async () => {
      const check = localStorage.getItem("popular");
      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const data = await apiManager.getPopular();
        setPopular(data.recipes);
        localStorage.setItem("popular", JSON.stringify(data.recipes));
      }
    })();
  }, []);

  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((e: Recipe) => (
          <SplideSlide key={e.id}>
            <Card>
              <Link to={"/recipe/" + e.id}>
                <p>{e.title}</p>
                <img src={e.image} alt={e.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

export default Popular;
