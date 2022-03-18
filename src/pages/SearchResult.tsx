import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "../components/Popular";
import { Card, Grid } from "../components/Styles";
import { apiManager } from "../io/api";

function SearchResult() {
  const params = useParams();
  const search = params?.search || "";
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  const getSearchedItems = async (searched: string) => {
    const data = await apiManager.getSearchedItems(searched);
    setRecipes(data.results);
  };

  useEffect(() => {
    getSearchedItems(search);
  }, [search]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {recipes.map((el) => (
        <Card key={el.id}>
          <Link to={"/recipe/" + el.id}>
            <img src={el.image} />
          </Link>
          <h4>{el.title}</h4>
        </Card>
      ))}
    </Grid>
  );
}

export default SearchResult;
