import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = () => {
    console.log(userData);
  };
  return (
    <div id="container">
      <div>
        <label>Email</label>
        <input name="email" type="text" onChange={inputHandler} />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" onChange={inputHandler} />
      </div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
