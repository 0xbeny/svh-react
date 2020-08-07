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
        <Row className="svh-col-slide-to-up">
          {cardData.map((card) => (
            <Col md="3" lg="3" key={card.id}>
              <Link to={card.href} key={card.id}>
                <Card className="shadow p-4 m-3 text-right svh-card">
                  <i className={card.icon} aria-hidden="true"></i>
                  <Card.Body>
                    <Card.Title>{card.titleFA}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {card.titleEN}
                    </Card.Subtitle>
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
