import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="item">
        <h3>Home</h3>
      </Link>

      <ul className="navList">
        <li>
          <Link to="/Projects" className="item">
            <h3>Projects</h3>
          </Link>
        </li>
        <li>
          <Link to="./Articles" className="item">
            <h3>Articles</h3>
          </Link>
        </li>
        <li>
          <Link to="./About" className="item">
            <h3>About</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
