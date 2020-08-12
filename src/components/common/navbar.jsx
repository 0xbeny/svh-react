import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light sticky-top svh-col-slide-to-down shadow"
        dir="rtl"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="#">
          <img src={Logo} width="100px" height="100px" alt="" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home#">
                صفحه اصلی<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about#">
                درباره ما
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ict#">
                فناوری اطلاعات و ارتباطات
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pmp#">
                مدیریت پروژه
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/babok#">
                تحیلی کسب و کار
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/instrument#">
                برق و ابزار دقیق
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact#">
                تماس با ما
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
