import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiManager } from "../io/api";
import { Recipe } from "./Popular";
import { Card, Gradient, Wrapper } from "./Styles";

const Veggie = () => {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    (async () => {
      const check = localStorage.getItem("veggies");
      if (check) {
        setVeggies(JSON.parse(check));
      } else {
        const data = await apiManager.getVeggies();
        setVeggies(data.recipes);
        localStorage.setItem("veggies", JSON.stringify(data.recipes));
      }
    })();
  }, []);

  return (
    <Wrapper>
      <h3>Our Veggies</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggies.map((e: Recipe) => (
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
};

export default Veggie;
