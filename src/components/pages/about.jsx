import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Active from "../../images/12773_orig.svg";
import Behnam from "../../images/behnam1.jpg";
import ICTListGroup from "./../common/ICTListGroup";
import ScrollAnimation from "react-animate-on-scroll";
import { getOurTeamData, getListGroupData } from "../../services/services";
import { useEffect } from "react";
import TitleIconDescription from "../titleIconDescription";

class About extends Component {
  constructor(props){
    super(props);
    this.state={
      team: [],
      listGroupCard: [],
    }
  }
 
  componentDidMount() {
    console.log("did mount");
    this.setState({
      team: getOurTeamData(),
      listGroupCard: getListGroupData(),
    });
  }
  componentWillUnmount() {
    console.log("will unmount");
    this.setState({ team: [], listGroupCard: [] });
  }

  render() {
    const { listGroupCard,team } = this.state;
    return (
      <React.Fragment>
        <section >
          <ScrollAnimation
            animateIn="animate__animated animate__fadeIn"
            delay={200}
          >
            <hr className="w-75" />
            <div className="text-center p-4" >
              <h2>...ما را بیشتر بشناسید</h2>
              <h6 className="text-center">Get to know us better...</h6>

              <p className="text-muted text-justify p-4" dir="rtl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                odio rem dignissimos delectus, et non tempore nesciunt vel
                recusandae doloremque amet in accusantium deleniti, sed velit
                distinctio voluptatum fuga? Molestias. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Repellat aperiam doloribus
                accusantium error, odio blanditiis impedit, magni iure
                temporibus quia aliquid atque accusamus a nostrum explicabo eius
                neque culpa vero.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Alias odio rem dignissimos delectus, et non
                tempore nesciunt vel recusandae doloremque amet in accusantium
                deleniti, sed velit distinctio voluptatum fuga? Molestias. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                aperiam doloribus accusantium error, odio blanditiis impedit,
                magni iure temporibus quia aliquid atque accusamus a nostrum
                explicabo eius neque culpa vero.
              </p>
            </div>
          </ScrollAnimation>

          <hr className="w-75" />
          <Row className="p-4 flex-md-row-reverse">
            <Col lg="6">
              <ScrollAnimation
                animateIn="animate__animated animate__slideInRight"
                delay={200}
              >
                <h3 className="text-right p-4">ارزش ها</h3>
                <ICTListGroup data={listGroupCard} />
              </ScrollAnimation>
            </Col>
            <Col lg="6">
              <img src={Active} alt="" />
            </Col>
          </Row>
          <hr className="w-75" />
          <h2 className="text-center">تیم ما</h2>
          <h6 className="text-center">Our Team</h6>
         <TitleIconDescription data={team}/>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
