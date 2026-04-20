import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
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
    <div>
      <h1>Welcome back {userName} </h1>
    </div>
  );
};

export default Home;
