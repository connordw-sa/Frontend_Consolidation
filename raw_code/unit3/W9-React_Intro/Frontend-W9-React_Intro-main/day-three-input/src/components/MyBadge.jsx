//Create a component called MyBadge which receives a string of text and a color as props.
//This component should render a Badge component with those properties.

import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <div>
      <Badge variant={props.variant}>{props.text}</Badge>
    </div>
  );
};

export default MyBadge;
