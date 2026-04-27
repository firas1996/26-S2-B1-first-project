import { useEffect, useState } from "react";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import { Route, Routes } from "react-router-dom";
import Users from "./screens/Users/Users";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    // console.log("effect");
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    }
    // else {
    //   setIsLoggedin(false);
    // }
  }, []);
  // console.log("outside");
  let uiElem = <Login setIsLoggedin={setIsLoggedin} />;
  if (isLoggedin) {
    uiElem = <Home />;
  }

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
      {/* {uiElem} */}
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
