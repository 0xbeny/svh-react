import React, { Component } from "react";
import { Carousel } from "react-bootstrap";


class CarouselSlides extends Component {
  render() {
    const { data} = this.props;
    return (
      <Carousel>
        {data.map((dataItem) => (
          <Carousel.Item key={dataItem.id} className="svh-carousel-item h-50">
            <img
              className="img-thumbnail"
              src={dataItem.image.src}
              style={{ height: "400px", width: "100vw" }}
              alt={dataItem.image.alt}
            />
            <Carousel.Caption
              className="svh-carousel-caption "
              style={{ top: "50%", bottom: "50%" }}
            >
              <h3>{dataItem.caption.title}</h3>
              <p>{dataItem.caption.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CarouselSlides;
