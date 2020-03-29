import React from "react";
import myAvatar from "../avatar.png";

const Myintro = (props) => {
  return (
    <div>
      <h1 className="title">Hello my name is {props.name}</h1>
      <p>I live in {props.city}</p>
      <p>My job is {props.job}</p>
      <p id="main">Today is Monday</p>
      <img src={myAvatar} alt="my avatar" />
      <input type="text" placeholder="Insert Your Name" />
    </div>
  );
};

export default Myintro;
