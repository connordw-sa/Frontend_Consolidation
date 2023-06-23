import { Component } from "react";
import { Card } from "react-bootstrap";

class BookData extends Component {
  render() {
    return (
      <Card
        className="mb-5"
        style={{ width: "20vh" }}
        onClick={() => {
          this.props.selectedBooks(this.props.book.asin);
        }}
      >
        <Card.Img
          style={{ height: "20vh", objectFit: "cover" }}
          src={this.props.book.img}
        />
        <Card.Body>
          <Card.Title className="text-truncate">
            {this.props.book.title}
          </Card.Title>
          <Card.Text>{this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default BookData;
