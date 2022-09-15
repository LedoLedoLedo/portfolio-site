import React from "react";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import NavBar from "../components/NavBar";
import video1 from "../assets/weathermoodzrec.mov";
import video2 from "../assets/gigatrecording.mov"
import video3 from '../assets/Breakingpoprec.mov'

const projects = () => {
  return (
    <div>
      <NavBar />
      <Heroimg2 heading="weather app" text="Some of my most recent work" video={video1}/>
      <Heroimg2 heading="CHANGE" text="Some of my most recent work"  video={video2}/>
      <Heroimg2 heading="ALL THESE" text="Some of my most recent work" video={video3} />
      <Footer />
    </div>
  );
};

export default projects;
