import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  faEye,
  faUserGroup,
  faChartSimple,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import "./CardAnalytics.css";

export default function Card2() {
  return (
    <div className="bg-light mt-2 CardAnalytics py-3">
      <h4 className="AnalyticsContent">Analytics</h4>
      <p className="text-muted">
        <FontAwesomeIcon className="AnalyticsContent" icon={faEye} /> Private to
        you
      </p>
      <Row>
        <Col className="AnalyticsContent ml-3">
          <h5>
            <FontAwesomeIcon className="mr-2" icon={faUserGroup} />
            50 Profile views
          </h5>
          <p className=" w-50">Discover who's viewed your profile</p>
        </Col>
        <Col className="AnalyticsContent">
          <h5 className="w-50">
            <FontAwesomeIcon className="mr-2" icon={faChartSimple} />
            115 post impressions
          </h5>
          <p className="w-50">Check out who's engaging with your posts</p>
        </Col>
        <Col>
          <h5 className="w-75">
            <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />3
            search appearances
          </h5>
          <p className="w-50">See how often you appear in search results</p>
        </Col>
      </Row>
    </div>
  );
}
