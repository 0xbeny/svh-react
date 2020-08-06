import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

class ServiceCard extends Component {
  render() {
      const {cardData}=this.props;
    return (
     <React.Fragment>
         {cardData.map(card=>
             <Link to={card.href} key={card.id}>
             <Card className="shadow p-4 m-3 text-right">
               <i className={card.icon} aria-hidden="true"></i>
               <Card.Body>
                 <Card.Title>{card.titleFA}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">{card.titleEN}</Card.Subtitle>
               </Card.Body>
             </Card>
         </Link>
            
            )}
     </React.Fragment>
    );
  }
}

export default ServiceCard;
