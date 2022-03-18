import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Recipe } from "../components/Popular";
import { apiManager } from "../io/api";

function Details() {
  const params = useParams();
  const id = params?.name || "";
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);

  const [activeTab, setActiveTab] = useState("instructions");

  const fetchRecipe = async (id: string) => {
    const data = await apiManager.fetchRecipe(id);
    setRecipe(data);
  };
  useEffect(() => {
    fetchRecipe(id);
  }, [id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} />
      </div>
      <Info>
        <Button
          className={activeTab == "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab == "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab == "instructions" ? (
          <>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </>
        ) : (
          <ul>
            {recipe.extendedIngredients.map((e) => (
              <li key={e.id}>{e.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 5rem;
`;

export default Details;
