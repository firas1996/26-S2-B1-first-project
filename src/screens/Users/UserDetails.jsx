import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:1236/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser({ name: res.data.data.name, email: res.data.data.email });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  return (
    <>
      <h1>User Name: {user.name} </h1>
      <h1>User Email: {user.email} </h1>
    </>
  );
};

export default UserDetails;
