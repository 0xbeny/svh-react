import React, { Component } from "react";
import { ListGroup, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

class ICTListGroup extends Component {
  render() {
    return (
      <ListGroup variant="flush" className="align-items-end text-justify">
        {this.props.data.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="list-flush d-inline-flex align-items-center">
              <h6>{item.title}</h6>
              <i className={item.iconClass} aria-hidden="true"></i>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default ICTListGroup;
