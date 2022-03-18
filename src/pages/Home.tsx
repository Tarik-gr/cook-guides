import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Categories from "../components/Categories";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
