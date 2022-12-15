import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Item from "./pages/Item";
import React, { useEffect } from "react";
import { setSystem } from "./store/OS_Slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const system = useSelector((state) => state.system.system);

  useEffect(() => {
    dispatch(
      setSystem({ height: window.innerHeight, width: window.innerWidth })
    );
    window.addEventListener("resize", () => {
      dispatch(
        setSystem({ height: window.innerHeight, width: window.innerWidth })
      );
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [dispatch, system]);
  console.log(system);

  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Item />
    </div>
  );
}

export default App;
