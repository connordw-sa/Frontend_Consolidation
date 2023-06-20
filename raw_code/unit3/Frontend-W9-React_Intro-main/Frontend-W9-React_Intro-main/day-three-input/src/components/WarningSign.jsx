//Create a component called WarningSign which receives a string as a prop.
//This text should be presented inside an Alert react-bootstrap component of type danger.

import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return (
    <div>
      <Alert variant={props.variant}>{props.text}</Alert>
    </div>
  );
};

export default WarningSign;
