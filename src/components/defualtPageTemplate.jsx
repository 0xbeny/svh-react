import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CarouselSlides from "./common/carouselSlides";
import ScrollAnimation from "react-animate-on-scroll";

class DefualtPageTemplate extends Component {
  // state = {  }
  render() {
    const { carouselData, description, pageImage, title } = this.props;
    const delay = 200;
    return (
      <Row className="m-2 align-items-center">
        <Col lg="6" md="6" className="svh-col-slide-to-right">
          <CarouselSlides data={carouselData} />
        </Col>
        <Col className="text-right svh-col-slide-to-left" lg="6" md="6 ">
          <img width="150px" src={pageImage} alt="" />
          <h1>{title}</h1>
          <p dir="rtl" className="text-justify ">
            {description}
          </p>
          <button className="test">Behnam</button>
        </Col>
      </Row>
    );
  }
}

export default DefualtPageTemplate;
