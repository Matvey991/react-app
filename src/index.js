import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./componets/UI/Navbar/Navbar";
import AppRouter from "./componets/AppRouter";

ReactDOM.render(
  <BrowserRouter>
    <Navigate />
    <Navbar />
    <AppRouter />
  </BrowserRouter>,
  document.getElementById("root")
);
