import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Dan from "../images/dan.jpg";
import Logo from '../images/logo.png';
import ServicesCards from "./servicesCards";

class Home extends Component {
  render() {
    const array = [0, 1, 2, 3];
    return (
      <section>
        <Row className="m-2 align-items-center">
          <Col lg="6" md="6" className="svh-col-slide-to-right">
            <Carousel>
              <Carousel.Item className="svh-carousel-item h-50">
                <img
                  className="img-thumbnail"
                  src={Dan}
                  style={{ height: "400px", width: "100vw" }}
                  alt="First slide"
                />
                <Carousel.Caption
                  className="svh-carousel-caption "
                  style={{ top: "50%", bottom: "50%" }}
                >
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="text-right svh-col-slide-to-left" lg="6" md="6">
              <img width="150px" src={Logo} alt=""/>
            <p dir="rtl" className="text-justify ">
              شروع داستان موفقيت ما به اوایل دهه هشتاد برميگردد، در آن سالها
              بنيانگزاران شركت دریافتند که با توجه به افزایش حجم فعاليت هاي شان
              و به دليل درخواست مشتريان و نیز حضور موثرتر در بازار IT كشور،
              ضرورت ادامه فعالیت به صورت حقیقی با محدویت هایی همراه بوده و نیاز
              است که واحدی حقوقی برای ادامه حضور موفق در بازار ایجاد شود لذا
              اقدامات لازم صورت پذیرفته و و اين مهم در اواخر تابستان سال ۱۳۸۲
              واقع و شركت سامانه ورز هزاره متولد شد.
            </p>
            <button className="test">
              Behnam
            </button>
          </Col>
          <ServicesCards itemNumbers={array} />
        </Row>
      </section>
    );
  }
}

export default Home;
