import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>Welcome to my home page</h2>
      <NavLink to="about">Go to About page</NavLink>
    </>
  );
}

export default Home;
