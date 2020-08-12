import React, { Component } from "react";
import { ListGroup, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

class ICTListGroup extends Component {
  render() {
    return (
      <ListGroup variant="flush" className="align-items-end text-justify" dir="rtl">
        <ListGroup.Item>
        <div className="list-flush d-inline-flex align-items-center">
            <i className="fa fa-check-circle p-1 fa-2x" aria-hidden="true"></i>
            <h6>سابقه بالا در امر پشتیبانی و نگهداری انواع سرور</h6>
          </div>
        </ListGroup.Item>{" "}
        <ListGroup.Item>
          <div className="list-flush d-inline-flex align-items-center">
            <i className="fa fa-check-circle p-1 fa-2x" aria-hidden="true"></i>
            <h6>سابقه بالا در امر پشتیبانی و نگهداری انواع سرور</h6>
          </div>
        </ListGroup.Item>{" "}
        <ListGroup.Item>
        <div className="list-flush d-inline-flex align-items-center">
            <i className="fa fa-check-circle p-1 fa-2x" aria-hidden="true"></i>
            <h6>سابقه بالا در امر پشتیبانی و نگهداری انواع سرور</h6>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
        <div className="list-flush d-inline-flex align-items-center">
            <i className="fa fa-check-circle p-1 fa-2x" aria-hidden="true"></i>
            <h6>سابقه بالا در امر پشتیبانی و نگهداری انواع سرور</h6>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
        <div className="list-flush d-inline-flex align-items-center">
            <i className="fa fa-check-circle p-1 fa-2x" aria-hidden="true"></i>
            <h6>سابقه بالا در امر پشتیبانی و نگهداری انواع سرور</h6>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}

export default ICTListGroup;
