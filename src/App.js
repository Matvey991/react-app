import React from "react";
import './styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
<Routes>
<Route path="/about" Component={About}>
  </Route>
<Route path="/posts" Component={Posts}>
</Route>
</Routes>
  )
}

export default App;
