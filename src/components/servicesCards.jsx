import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
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
      <Row>
        <Col md="3" lg="3">
          <ServiceCard cardData={this.state.cardData} />
        </Col>
      </Row>
    );
  }
}

export default ServicesCards;
