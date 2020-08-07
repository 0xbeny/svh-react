import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";
import Logo from '../../images/logo.png'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light svh-col-slide-to-left" dir="rtl">
       
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
          <img src={Logo} width="100px" height="100px" alt=""/>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                 main<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ict">
                Rentals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pmp">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
          
      </nav>
    );
  }
}

export default Navbar;
