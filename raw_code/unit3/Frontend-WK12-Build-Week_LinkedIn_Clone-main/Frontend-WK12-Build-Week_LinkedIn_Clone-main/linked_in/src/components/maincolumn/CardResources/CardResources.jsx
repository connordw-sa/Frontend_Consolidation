import React from "react";
import { Col } from "react-bootstrap";
import "./CardResources.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Card3() {
  return (
    <div className="bg-light mt-2 CardResources py-3">
      <Col className="ResourcesContent">
        <h3>Resources</h3>
        <p className="text-muted">
          <FontAwesomeIcon icon={faEye} />
          Private to you
        </p>
        <h3>Creator mode Off</h3>
        <p>
          Get discovered, showcase content on your profile, and get access to
          creator tools
        </p>
        <hr />
        <h3>My network</h3>
        <p>See and manage your connections and interests.</p>
        <hr />
        <h3>Show all 5 resources ----</h3>
      </Col>
    </div>
  );
}
