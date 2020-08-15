import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { getContactData } from "../../services/services";
import TitleIconDescription from './../titleIconDescription';

class Contact extends Component {
  constructor(props){
      super(props);
      this.state={
          contactData:[]
      }
  }
  componentDidMount() {
      this.setState({contactData:getContactData()})
  }
  
    render() {

    return (
      <div className="row m-4 justify-content-center">
        <TitleIconDescription data={this.state.contactData}/>
      </div>
    );
  }
}

export default Contact;
