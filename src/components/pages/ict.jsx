import React, { Component } from "react";
import DefualtPageTemplate from "../defualtPageTemplate";
import {
  getCarouselItemData,
  getICTCardServices,
} from "../../services/services";
import ICTSec from "../../images/12818_orig.svg";
import { ListGroup, Row, Col, Card } from "react-bootstrap";
import ICTCard from "./../ICTCard";
import Logo from "../../images/logo.png";
import Active from "../../images/12773_orig.svg";
import ICTListGroup from "../common/ICTListGroup";
import ScrollAnimation from "react-animate-on-scroll";

class ICT extends Component {
  state = {
    carousel: [],
    ICTCards: [],
  };
  componentDidMount() {
    this.setState({
      carousel: getCarouselItemData(),
      ICTCards: getICTCardServices(),
    });
  }
  componentWillUnmount(){
    this.setState({carousel:[],ICTCards:[]})
  }

  render() {
    const { carousel, ICTCards } = this.state;
    const ict = "";
    const delay = 1;
    // const [key, setKey] = useState("home");
    return (
      <section className="container-fluid">
        <section>
          <DefualtPageTemplate
            carouselData={carousel}
            pageImage={Logo}
            description="ict"
          />
        </section>

        <hr />
        <Row className="align-items-center m-4">
          <Col lg="6" className="svh-col-slide-to-right">
            <img src={Active} alt="" />
          </Col>
          <Col lg="6" className="text-right ">
            <ScrollAnimation
              animateIn="animate__animated animate__slideInRight"
              delay={delay}
            >
              <h3 className="text-right">چرا سامانه ورز هزاره؟</h3>
              <ICTListGroup />
            </ScrollAnimation>
          </Col>
        </Row>
        <hr className="w-75" />
        <h2 className="text-center">طراحی سایت</h2>
        <h6 className="text-center">Web Design</h6>
        <Row className="ict-web text-light align-items-center">
          <Col lg="3" className="text-center ict-web-items">
            <ScrollAnimation animateIn="animate__animated animate__zoomInUp ">
              <ScrollAnimation
                animateIn="animate__animated animate__rotateIn "
                delay={300}
              >
                <i className="fa fa-building-o fa-3x " aria-hidden="true"></i>
              </ScrollAnimation>
              <h3>طراحی سایت شرکتی</h3>
            </ScrollAnimation>
          </Col>
          <Col lg="3" className="text-center ict-web-items">
            <ScrollAnimation animateIn="animate__animated animate__zoomInUp ">
              <ScrollAnimation
                animateIn="animate__animated animate__rotateIn "
                delay={300}
              >
                <i className="fa fa-newspaper-o fa-3x " aria-hidden="true"></i>
              </ScrollAnimation>
              <h3>طراحی سایت خبری</h3>
            </ScrollAnimation>
          </Col>
          <Col lg="3" className="text-center ict-web-items">
            <ScrollAnimation animateIn="animate__animated animate__zoomInUp ">
              <ScrollAnimation
                animateIn="animate__animated animate__rotateIn "
                delay={300}
              >
                <i className="fa fa-shopping-basket fa-3x " aria-hidden="true"></i>
              </ScrollAnimation>
              <h3>طراحی فروشگاه اینترنتی</h3>
            </ScrollAnimation>
          </Col>
          <Col lg="3" className="text-center ict-web-items">
            <ScrollAnimation animateIn="animate__animated animate__zoomInUp ">
              <ScrollAnimation
                animateIn="animate__animated animate__rotateIn "
                delay={300}
              >
                <i className="fa fa-user-o fa-3x " aria-hidden="true"></i>
              </ScrollAnimation>
              <h3>طراحی سایت شخصی</h3>
            </ScrollAnimation>
          </Col>
        </Row>
        <hr className="w-75" />
        <h2 className="text-center">اکتیو و پسیو شبکه</h2>
        <h6 className="text-center">Active And Passive Network</h6>
        <Row>
          <ICTCard data={ICTCards} />
        </Row>
      </section>
    );
  }
}

export default ICT;
