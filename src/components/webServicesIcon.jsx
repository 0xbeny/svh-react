import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import {Row, Col} from 'react-bootstrap'

const WebServicesIcon = ({webServices}) => {
  return (
    <Row className="ict-web text-light align-items-center">
      {webServices.map((item) => (
        <Col lg="3" className="text-center ict-web-items" key={item.id}>
          <ScrollAnimation animateIn="animate__animated animate__zoomInUp ">
            <ScrollAnimation
              animateIn="animate__animated animate__rotateIn "
              delay={200}
            >
              <i className={item.iconClass} aria-hidden="true"></i>
            </ScrollAnimation>
            <h3>{item.title}</h3>
          </ScrollAnimation>
        </Col>
      ))}
    </Row>
  );
};

export default WebServicesIcon;
