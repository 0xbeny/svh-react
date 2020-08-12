import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class ServiceCard extends Component {
  render() {
    const { cardData } = this.props;
    return (
      <React.Fragment>
        {/* {cardData.map} */}
        <Row className="svh-col-slide-to-up">
          {cardData.map((card) => (
            <Col md="3" lg="3" key={card.id} >
              <Link to={card.href} key={card.id} className="text-decoration-none">
                <Card
                  className="shadow  m-3 text-right svh-card"
                  style={card.color}

                >
                  <Card.Body >
                    <Row className="text-light align-items-center " >

                    <Col lg="10" >
                      <Card.Title className="text-decoration-none">{card.titleFA}</Card.Title>
                      <Card.Subtitle className="mb-2 text-light">
                        {card.titleEN}
                      </Card.Subtitle>
                    </Col>
                    <Col lg="2">
                  <i className={card.icon+" fa-2x"} aria-hidden="true"></i>

                    </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
          
        </Row>
      </React.Fragment>
    );
  }
}

export default ServiceCard;
