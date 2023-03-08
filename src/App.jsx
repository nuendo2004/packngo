import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Item from "./pages/Item";
import React, { Fragment, useEffect } from "react";
import { setSystem } from "./store/OS_Slice";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import Guide from "./pages/Guide";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyAcount from "./pages/MyAcount";

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
    <div>
      <Routes>
        <Route
          element={
            <Fragment>
              <Navbar />
              <Outlet />
            </Fragment>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<Item />} />
          <Route path="/getStart" element={<Guide />} />
          <Route path="/myAccount" element={<MyAcount />} />

          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
