import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" Component={About} element={<About />}></Route>
      <Route
        path="/posts"
        Component={Posts}
        element={<Navigate replace to={Posts} />}
      ></Route>
      <Route path="/error" Component={Error}></Route>
    </Routes>
  );
};

export default AppRouter;
