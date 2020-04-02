import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Subcribs() {
  return (
    <div className="container">
      <Jumbotron className="subscribe">
        <h1>LETS STAY IN TOUCH</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <input type="text" />
          <br/>
          <Button className="subsBtn" variant="danger">Buy Now</Button>
        </p>
      </Jumbotron>
    </div>
  );
}
