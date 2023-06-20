import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function Card5() {
  return (
    <div className="bg-light mt-5">
      <Col>
        <Row>
          <h3>Activity</h3>
          <Button>Start a post</Button>
        </Row>
        <p>135 followers</p>

        <p>Connor Wehmeyer posted this * 2mo</p>
        <Row>
          <h3>Sun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, officiis!
          </p>
        </Row>
        <hr />
        <h3>Show all activity -----</h3>
      </Col>
    </div>
  );
}
