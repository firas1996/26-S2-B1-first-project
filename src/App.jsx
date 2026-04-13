import { useEffect, useState } from "react";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    console.log("effect");
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    }
    // else {
    //   setIsLoggedin(false);
    // }
  }, []);
  console.log("outside");

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
      <Login />
    </div>
  );
};

export default App;
