import React from "react";
import { useLocation } from "react-router-dom";
const LoggedIn = () => {
  const location = useLocation();
  const status = location.state;
  return <div>{status}</div>;
};

export default LoggedIn;
