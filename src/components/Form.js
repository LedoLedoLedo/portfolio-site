import React from "react";
import formstyle from "../components/FormStyles.css";

const Form = () => {
  return (
    <div>
      <form
        className="form"
        action="https://formsubmit.co/e09f62f1cc217cffef3964a06408c0e9"
        method="POST"
      >
        <label>Your name</label>
        <input type="text" name="name" placeholder="First Last" required></input>
        <label> Email </label>
        <input type="email" name="email" placeholder="Email address" required></input>
        <label>Subject</label>
        <input type="text" name="subject" placeholder="Subject here"></input>
        <label>Message</label>
        <textarea name="textarea" rows="6" placeholder="Type your msg here" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
