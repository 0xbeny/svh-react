import React, { Component } from "react";

import ServiceCard from "./serviceCard";
import { getCardData } from "../services/services";

class ServicesCards extends Component {
  state = {
    cardData: [],
  };
  componentDidMount() {
    this.setState({
      cardData: getCardData(),
    });
  }

  render() {
    return (
      
          <ServiceCard  cardData={this.state.cardData} />
        
    );
  }
}

export default ServicesCards;
