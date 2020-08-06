import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <ul className="nav justify-content-center bg-blue">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled link</a>
            </li>
        </ul>
    );
  }
}

export default Navbar;
