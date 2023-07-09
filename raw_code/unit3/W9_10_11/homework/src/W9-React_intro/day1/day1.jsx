import React from "react";

export default function ButtonComponent(props) {
  return (
    <div>
      <h1>Day 1</h1>
      <button>{props.content}</button>
    </div>
  );
}
