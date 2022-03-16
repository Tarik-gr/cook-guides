import React, { useEffect, useState } from "react";
import { apiManager } from "../io/api";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await apiManager.getPopular();
      setPopular(data.recipes);
    })();
  }, []);

  return (
    <Wrapper>
      {popular.map((e) => (
        <Card key={e.id}>
          <p>{e.title}</p>
          <img src={e.image} alt={e.title} />
        </Card>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  padding: 2rem;
  overflow: hidden;
  border-radius: 2rem;
  background-color: pink;
`;

export default Popular;
