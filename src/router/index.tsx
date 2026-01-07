import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import PrivateRouter from "./private-router";

const RouteProviderConf = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default RouteProviderConf;
