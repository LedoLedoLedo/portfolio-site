import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import picMe from "../assets/alevegassmile.JPG";

const About = () => {
  return (
    <div>
      <NavBar />
      <br />
      <div className="aboutSection">
        <div className="aboutPic">
          <img classname="mePic" src={picMe} alt="me" />
        </div>
        <div className="aboutText">
          <h1>Meet Alejandro</h1>
          <p>
            Born in the Dominican Republic but raised in the USA, I graduated
            from Ironhack and became a developer. I'm a programmer with a
            background in music. I'm in love with The Arts and always looking
            for a creative outlet. I am intertested in delivering top notch web
            applications and sites.
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
      <Footer />
    </div>
  );
};

export default About;
