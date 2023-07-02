import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Registered from "./Registered";

const storedData = [];

const Form = () => {
  const nav = useNavigate();
  // const [registerStatus, setRegisterStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData, "in onchange");
  };

  const handleSubmit = (events) => {
    events.preventDefault();
    const tempObj = {
      name: formData.name,
      contactNo: formData.contactNo,
      email: formData.email,
      password: formData.password,
    };

    storedData.push(tempObj);

    setFormData({
      name: "",
      contactNo: "",
      email: "",
      password: "",
    });
    console.log("in submit", formData);

    axios
      .post("http://localhost:8000/user/register", tempObj)
      .then((res) => {
        console.log(res.data);
        const status = res.data;
        console.log("status", status);
        //setRegisterStatus(res.data);
        nav("/user/registered");
        <Registered status={status} />;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="parent-div">
        <div className="form-modal">
          {" "}
          <h1>FORM</h1>
          <form action="/registered" method="post">
            <h2>Register Acount</h2>

            <label>Name :</label>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              onChange={handleOnChange}
              value={formData.name}
              className="input"
            ></input>
            <br />
            <br />

            <label>Phone No :</label>
            <input
              type="number"
              placeholder="enter your number"
              name="contactNo"
              onChange={handleOnChange}
              value={formData.contactNo}
              className="input"
            ></input>
            <br />
            <br />

            <label>Email :</label>
            <input
              type="mail"
              placeholder="enter your mail"
              name="email"
              onChange={handleOnChange}
              value={formData.email}
              className="input"
            ></input>
            <br />
            <br />

            <label>Password :</label>
            <input
              type="password"
              placeholder="enter your password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              className="input"
            ></input>
            <br />
            <br />
            <button className="btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
