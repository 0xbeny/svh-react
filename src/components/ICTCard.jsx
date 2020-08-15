import React, { Component } from "react";
import { ListGroup, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

class ICTCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((item) => (
          <Col key={item.id} lg="4" className="mt-3 mb-3">
            {/* <ScrollAnimation animateIn="animate__animated animate__slideInUp"> */}
              <Card className="text-center shadow-lg rounded-lg">
                <Card.Img variant="top" src={item.image.src} />
                <Card.Body>
                  <Card.Title>{item.caption.title}</Card.Title>
                  <p>{item.caption.subTitle}</p>
                  <Card.Text>{item.caption.description}</Card.Text>
                </Card.Body>
              </Card>
            {/* </ScrollAnimation> */}
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ICTCard;
