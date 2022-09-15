import React from "react";
import formstyle from "../components/FormStyles.css";

const Form = () => {
  return (
    <div
      className="form"
      action="https://formsubmit.co/alfea1983@gmail.com"
      method="POST"
    >
      <form>
        <label>Your name</label>
        <input type="text"></input>
        <label> email </label>
        <input type="email" placeholder="Email address" required></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="type your msg here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
