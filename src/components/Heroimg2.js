import "./Heroimg2Styles.css";
import React, { Component } from "react";

class Heroimg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="video-wrapper">
          {/* <video width="320" height="240" controls> */}
          <video controls>
            <source src={this.props.video} />
          </video>
        </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p> {this.props.text}</p>
          {/* <p> {this.props.video1}</p> */}
        </div>
      </div>
    );
  }
}

export default Heroimg2;
