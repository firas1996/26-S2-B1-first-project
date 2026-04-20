import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyFragment from "../../components/MyFragment";

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
    try {
      const decode = jwtDecode(token);
      axios
        .get(`http://localhost:1236/users/${decode.id}`)
        .then((res) => {
          setUserName(res.data.data.name);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <MyFragment>
      <h1>Welcome back {userName} </h1>
      <h1>Welcome back {userName} </h1>
    </MyFragment>
  );
};

export default Home;
