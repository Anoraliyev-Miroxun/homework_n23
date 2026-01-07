import React from "react";
// import Cokies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  let token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRouter;
