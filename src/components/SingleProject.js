import "./SingleProjectStyles.css";
import React, { Component } from "react";

class SingleProject extends Component {
  render() {
    return (
      <div className="SingleProject">
        <div className="video-wrapper">
          <video controls>
            <source src={this.props.video} />
          </video>
        </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p> {this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default SingleProject;
