import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Posts from "../../../pages/Posts";

const Navbar = () => {
  const Navigate = useNavigate("/posts");
  return (
    <div className="navbar">
      <div className="navbar__links"></div>
      <Link to="/about">О сайте</Link>
      <Link to="/posts">Посты</Link>
    </div>
  );
};

export default Navbar;
