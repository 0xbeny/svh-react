import React, { Component } from 'react';
import { Col,Row } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const TitleIconDescription = ({data}) => {
    return ( 
        <Row className="justify-content-center">
        {data.map((item) => (
          <Col
            lg="3"
            md="4"
            sm="6"
            xs="12"
            className="text-center "
            key={item.id}
          >
            <ScrollAnimation
              animateIn="animate__animated animate__slideInRight"
              delay={200}
            >
              <div className="team-img">
               <i class={item.iconClass} aria-hidden="true"></i>
                <h4>{item.title}</h4>
                <h6>{item.description}</h6>
              </div>
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
     );
}
 
 
export default TitleIconDescription;