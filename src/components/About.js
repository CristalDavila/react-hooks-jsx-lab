import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>
      Nooow, this is a story all about how
      My life got flipped, Turned upside down!
      And I'd like to take a minute
      Just sit right there,
      I'll tell you how I became the Prince of a town called Bel Air...
    </p>
    <img src={image} alt="I made this" />
  </div>
};

export default About;
