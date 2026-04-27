import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:1236/users`)
        .then((res) => {
          console.log(res);
          setUsersData(
            res.data.data.map((item) => {
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
  const usersItem = usersData.map((item) => {
    return (
      <Link to={`/users/${item.id}`}>
        <li key={item.id}>{item.name}</li>
      </Link>
    );
  });
  return (
    <div>
      <ul>{usersItem}</ul>
    </div>
  );
};

export default Users;
