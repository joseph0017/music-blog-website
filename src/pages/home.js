import React from "react";
import Hero from "../components/hero";
import butterfly from '../components/images/butterfly.png'
import ColumnArticles from '../components/column-articles'
import CardText from "../components/card-text";

const Home = () => {
  return (
    <>
      <Hero />
      <CardText />
      <ColumnArticles />

    </>
  );
};

export default Home;
