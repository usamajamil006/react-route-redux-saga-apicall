import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/">Karachi</Link>
    <Link to="/lahore">Lahore</Link>
    <Link to="/islamabad">Islamabad</Link>
  </div>
);

export default NavBar;
