import React, { Component } from 'react'

class NavDots extends Component {
    render() { 
        return ( 
            <div className="dotstyle dotstyle-fillup">
            <ul>
              <li className="current">
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
         );
    }
}
 
export default NavDots;