import React from "react";
import AboutForm from "../components/about-form";
import CardText from "../components/card-text";
import blue from '../components/images/blue.jpg'

const About = () => {
  return (
    <>
    <CardText cardImg = {blue} h2text = {"ABOUT US"}
    moreInfo = {"We provide and recommend the greatest hit around the world for your listening pleasure and we are a non-profit ogranisation that seeks world peace"}
     />
    <AboutForm />
    </>

  );
};

export default About;
