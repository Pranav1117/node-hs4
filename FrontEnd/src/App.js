import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Routes2 from "./Utilities/Routes/routes";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes2>
        <Form />
        <Login />
      </Routes2>
    </>
  );
}

export default App;
