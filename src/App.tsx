import React from "react";
import Pages from "./pages/Pages";
import "./index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Categories from "./components/Categories";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <Router>
      <Nav>
        <Logo to="/">
          <GiKnifeFork /> Smart Recipes
        </Logo>
      </Nav>
      <Search />
      <Categories />
      <Pages />
    </Router>
  );
}

const Logo = styled(Link)`
text-decoration : none;
font-size ; 1.5rem;
font-weight : 400rem;
font-family : 'Lobster Two', cursive;
`;
const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
