import { useEffect } from "react";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Users from "./screens/Users/Users";
import UserDetails from "./screens/Users/UserDetails";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "inherit",
        height: "inherit",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
