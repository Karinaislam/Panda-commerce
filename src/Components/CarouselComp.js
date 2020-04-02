import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button'
import headphoneImg from "../images/banner-images/headphone.png";
import tvImg from "../images/banner-images/tv.png";
import xboxImg from "../images/banner-images/xbox.png";
import "./style.css"

export default function CarouselComp() {
  return (
    <div>
      <div className="container">
        <Carousel>
          
          <Carousel.Item>
          <div className="row">
            <div className="col-md-7">
            <Carousel.Caption>
            <h1>Mega LCD TV</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <h1>$1200</h1>
              <Button variant="warning">Buy Now</Button>
            </Carousel.Caption>
            </div>
            <div className="col-md-5">
              <img
                className="d-block w-100"
                src={headphoneImg}
                alt="First slide"
              />
            </div>
          </div>
            
          </Carousel.Item>
          <Carousel.Item>
          <div className="row">
            <div className="col-md-7">
            <Carousel.Caption>
              <h1>Mega LCD TV</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <h1>$1200</h1>
              <Button variant="warning">Buy Now</Button>
            </Carousel.Caption>
            </div>
            <div className="col-md-5">
              <img
                className="d-block w-100"
                src={tvImg}
                alt="First slide"
              />
            </div>
          </div>
            
          </Carousel.Item>
          <Carousel.Item>
          <div className="row align-item-center">
            <div className="col-md-7">
            <Carousel.Caption>
            <h1>Mega LCD TV</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <h1>$1200</h1>
              <Button  variant="warning">Buy Now</Button>
            </Carousel.Caption>
            </div>
            <div className="col-md-5">
              <img
                className="d-block w-100"
                src={xboxImg}
                alt="First slide"
              />
            </div>
          </div>
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
