import React, { Component } from "react";
import InfoHeader from "./infoHeader";
import NavDots from "./navDots";
import Navbar from "./navbar";
import ScrollAnimation from "react-animate-on-scroll";

class Header extends Component {
  render() {
    const delay = 200;
    return (
      <React.Fragment>
       
       
          <InfoHeader />
        
          <Navbar />
    
        {/* <NavDots /> */}
      </React.Fragment>
    );
  }
}

export default Header;
