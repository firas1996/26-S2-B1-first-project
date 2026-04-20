import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";

const Login = ({ setIsLoggedin }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  ///////////////////////////////
  // useEffect(() => {
  //   console.log("effect");
  //   const timer = setTimeout(() => {}, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //     console.log("clean");
  //   };
  // }, [userData]);
  //////////////////////////////
  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = () => {
    console.log("a");
    axios
      .post("http://localhost:1236/signin", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setIsLoggedin(true);
        setUserData({
          email: "",
          password: "",
        });
      })
      .catch((e) => {
        console.log("b");
        console.log(e);
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
