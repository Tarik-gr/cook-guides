import React from "react";
import Pages from "./pages/Pages";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <Router>
      <Categories />
      <Pages />
    </Router>
  );
}

export default App;
