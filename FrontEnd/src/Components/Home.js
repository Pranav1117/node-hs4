import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="container">
      <h1>HomePage </h1>
      <div className="btn-container">
        <Link to="/user/register" className="register-btn">
          Register
        </Link>
        <Link to="/user/login" className="login-btn">
          Login
        </Link>
      </div>
      <div className="info-container">
        <div className="signup-info info">
          <h3>SignUp Api</h3>
          This API is used to create a new User and a User Registration in a
          single request. This is useful if for example you have a main website
          that User's create their account on initially.
        </div>
        <div className="login-info info">
          <h3>Login Api</h3>
          The Login Service API provides endpoints to manage the User Session in
          Conversational Cloud, such as User Login, Application Login, Logout
          and Refresh. Use this API to log into Conversational Cloud as a user
          with credentials or an application with an API key.
        </div>
      </div>
    </div>
  );
};

export default Home;
