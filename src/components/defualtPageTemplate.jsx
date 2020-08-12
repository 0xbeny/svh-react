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
        <Col lg="6" md="6">
          <ScrollAnimation
            animateIn="animate__animated animate__slideInLeft"
            delay={delay}
          >
            <CarouselSlides data={carouselData} />
          </ScrollAnimation>
        </Col>
        <Col className="text-right" lg="6" md="6">
          <ScrollAnimation
            animateIn="animate__animated animate__slideInRight"
            delay={delay}
          >
            <img width="150px" src={pageImage} alt="" />
            <h1>{title}</h1>
            <p dir="rtl" className="text-justify ">
              {description}
            </p>
            <button className="test">Behnam</button>
          </ScrollAnimation>
        </Col>
      </Row>
    );
  }
}

export default DefualtPageTemplate;
