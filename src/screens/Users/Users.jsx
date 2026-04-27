import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:1236/users`)
        .then((res) => {
          console.log(res);
          setUsersData(
            res.data.data.users.map((item) => {
              return { id: item._id, name: item.name };
            }),
          );
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(usersData);
  return (
    <div>
      <ul>
        <li>User1</li>
        <li>User2</li>
        <li>User3</li>
      </ul>
    </div>
  );
};

export default Users;
