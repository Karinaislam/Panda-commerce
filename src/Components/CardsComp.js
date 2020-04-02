import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import CardDeck from "react-bootstrap/CardDeck";
import shoe1 from "../images/shoes/shoe-1.png";
import shoe2 from "../images/shoes/shoe-2.png";
import shoe3 from "../images/shoes/shoe-3.png";
import "./style.css"


export default function CardsComp() {
  return (
    <div className="container">
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={shoe1}/>
          <Card.Body>
            <Card.Title>Air Max</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <h5>$300</h5>
            <Button variant="danger" >Buy Now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={shoe2} />
          <Card.Body>
            <Card.Title>Supply 350</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <h5>$200</h5>
            <Button variant="danger">Buy Now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={shoe3} />
          <Card.Body>
            <Card.Title>Nike 600</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <h5>$600</h5>
            <Button variant="danger">Buy Now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
