import React from "react";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import NavBar from "../components/NavBar";
import video1 from "../assets/weathermoodzrec.mov";
import video2 from "../assets/gigatrecording720.mov";
import video3 from "../assets/Breakingpoprec.mov";

const projects = () => {
  return (
    <div>
      <NavBar />
      <Heroimg2
        heading="gig at"
        text="A one stop shop for your entertainment. Zip search at Gig At get the event information you need and buy your tickets! With the implementation of our message board we have allowed users to inform others of their own events and created a community vibe.
       Created with - JavaScript, - React, - Express - CSS, - Mongodb compass and Postman, for testing. As well as The implementation of CRUD models to create a user experience and be able to dig down deeper in the local scenes.
"
        video={video2}
      />

      <Heroimg2
        heading="weather app"
        text="Created with the purpose of applying wellness and mental health awareness to our weather using - React and Weather APIs. Weather moods is a simple application to unite both. "
        video={video1}
      />

      <Heroimg2
        heading="BreakOut Pop"
        text="A take on the classic 1976 Atari game “Breakout” ,  designed by Steve Wozniak.
        - HTML
        - CSS
        - Vanilla JS 
        - Canvas
"
        video={video3}
      />
      <Footer />
    </div>
  );
};

export default projects;
