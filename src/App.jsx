import "./App.css";
import Home from "./pages/Home";
import React, { useEffect } from "react";
import { setSystem } from "./store/OS_Slice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const system = useSelector((state) => state.system.system);

  useEffect(() => {
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
      <Home />
    </div>
  );
}

export default App;
