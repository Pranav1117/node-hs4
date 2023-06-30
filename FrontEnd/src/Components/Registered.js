import React from "react";
import { useLocation } from "react-router-dom";
const Registered = () => {
  const location = useLocation();
  console.log(location);
  const status = location.state;
  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default Registered;
