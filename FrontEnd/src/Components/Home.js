import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home
      <Link to="/user/register">Register</Link>
      <Link to="/user/login">Login</Link>
    </div>
  );
};

export default Home;
