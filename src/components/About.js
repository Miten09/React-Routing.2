import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About</h1>
      <h2>Welcome to About Page</h2>
      <NavLink to="/">Go to Home page</NavLink>
    </>
  );
}

export default About;
