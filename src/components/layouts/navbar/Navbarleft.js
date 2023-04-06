import React from "react";
import Navbarright from "./Navbarright";
import { Link } from 'react-router-dom';

const Navbarleft = (props) => {
  const {counter}=props
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/calculator">
              Calculator <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/todolist">
              TodoList <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/filterproducts">
              Filtered Products
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/cart">
                Cart
              </Link>
              <Link className="dropdown-item" to="/addproduct">
                add product
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/showdata">
                All Products
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <>
          <Navbarright counter={counter}/>
        </>
      </div>
    </div>
  );
};

export default Navbarleft;
