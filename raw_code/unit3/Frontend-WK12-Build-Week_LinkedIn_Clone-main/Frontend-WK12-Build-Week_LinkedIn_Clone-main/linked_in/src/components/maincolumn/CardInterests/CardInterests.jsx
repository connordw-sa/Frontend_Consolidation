import React from "react";
import { Row, Col } from "react-bootstrap";
export default function CardInterests() {
  return (
    <div className="bg-light mt-5">
      <Col>
        <h3>Interests</h3>
        <Row>
          <h4>Companies</h4>
          <h4>Schools</h4>
        </Row>
        <hr />
        <Row>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Row>
      </Col>
    </div>
  );
}
