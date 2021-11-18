import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h3>LOGO</h3>
      <ul className="nav-links">
        <Link className="link-navbar" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-navbar" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link-navbar" to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
