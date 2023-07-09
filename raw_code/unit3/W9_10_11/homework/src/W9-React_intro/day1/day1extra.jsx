import React, { Component } from "react";

export default class Day1extra extends Component {
  render() {
    return (
      <img
        className="w-25 h-25"
        src={this.props.image}
        alt={this.props.alt}
      ></img>
    );
  }
}
