import React from "react";

import "./Hero.css"
import Button from "./Button.js"

function Hero() {
  return (
    <div className="hero-container">
      <h1>Adventure Awaits!</h1>
      <p>What are your waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started!</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Our Trailer!</Button>
      </div>
    </div>
  );
}

export default Hero;