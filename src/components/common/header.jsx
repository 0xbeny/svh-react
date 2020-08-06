import React, { Component } from "react";
import InfoHeader from "./infoHeader";
import NavDots from "./navDots";
import Navbar from "./navbar";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <InfoHeader />
        <Navbar />
        <NavDots />
      </React.Fragment>
    );
  }
}

export default Header;
