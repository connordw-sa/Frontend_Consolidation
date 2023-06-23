//Create a SingleBook component as a function. The component receives a book object as a prop, and displays the cover and the title of the book.

//Convert your SingleBook component to a class, and create its state containing a selected boolean property.

import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card
        key={this.props.book.asin}
        style={{ width: "18rem" }}
        onClick={() => this.setState({ selected: !this.state.selected })}
        className={this.state.selected ? "bg-dark text-white" : ""}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
