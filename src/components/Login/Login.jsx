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
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <div id="container">
      <div className="imp">
        <label>Email</label>
        <input
          name="email"
          type="text"
          onChange={inputHandler}
          value={userData.email}
        />
      </div>
      <div className="imp">
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={inputHandler}
          value={userData.password}
        />
      </div>
      <div className="btn">
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
