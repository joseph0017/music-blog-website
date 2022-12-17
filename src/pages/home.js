import React from "react";
import Hero from "../components/hero";
import ColumnArticles from '../components/column-articles'
import CardText from "../components/card-text";
import guy from '../components/images/guy.jpg'

const Home = () => {
  return (
    <>
      <Hero />
      <CardText cardImg = {guy} h2text = {"The Secret to a happy life"}
      moreInfo = {"It's been proven scientifically that music, enhances and brightens our mood, and listening to good music can also enhance productivity. So checkout our music page and kick back and relax and enjoy the best music around, Enjoy."}
       />
      <ColumnArticles />

    </>
  );
};

export default Home;
