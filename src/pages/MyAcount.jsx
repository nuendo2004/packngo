import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MyAcount = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>{isLoggedIn ? <div>MyAcount</div> : <Navigate to={"/login"} />}</div>
  );
};

export default MyAcount;
