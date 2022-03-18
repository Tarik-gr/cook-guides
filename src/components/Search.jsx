import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: Event) => {
    e.preventDefault();
    navigate("/searched/" + text);
  };
  return (
    <FormStyle onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <FaSearch />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem;
  position: relative;
  width: 70%;
  margin: auto;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 30%;
    left: 1%;
    color: white;
    font-size: 1.5rem;
  }
`;

export default Search;
