import React from "react";
import formstyle from "../components/FormStyles.css";

const Form = () => {
  return (
    <div>
      <form
        className="form"
        action="https://formsubmit.co/alfea1983@gmail.com"
        method="POST"
      >
        <label>Your name</label>
        <input type="text" placeholder="First Last"></input>
        <label> Email </label>
        <input type="email" placeholder="Email address" required></input>
        <label>Subject</label>
        <input type="text" placeholder="Job opening"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your msg here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
