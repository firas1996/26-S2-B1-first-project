import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

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
  let uiElem = <Login />;
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
      {uiElem}
      {/* <Login /> */}
    </div>
  );
};

export default App;
