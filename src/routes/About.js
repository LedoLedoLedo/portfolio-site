import React from "react";
import picMe from "../assets/alevegassmile.JPG";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutPic">
        <img classname="mePic" src={picMe} alt="me" />
      </div>
      <div className="aboutText">
        <h1>Meet Alejandro</h1>
        <p>
          Born in the Dominican Republic and raised in the USA. I'm a programmer
          and Ironhack graduate with a background in music and Audio Visuals.
          I'm in love with The Arts and always looking for a creative outlet. I
          am interested in mobile apps, interactive installations and delivering
          top notch web applications and sites.
        </p>
        <br />
        <section id="techList">
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>JavaScript</li>
            <li>Express</li>
            <li>Nodejs</li>
            <li>HTML</li>
            <li>CCS</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
