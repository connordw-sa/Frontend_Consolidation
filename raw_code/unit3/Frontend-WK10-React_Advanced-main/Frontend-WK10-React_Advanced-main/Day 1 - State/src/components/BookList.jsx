import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookInfo from "./BookInfo";

class BookList extends Component {
  render() {
    return (
      <Container>
        <h1>List of Books</h1>
        <Row>
          {this.props.books.slice(0, 12).map((singleBook) => (
            <Col key={singleBook.asin}>
              <BookInfo
                book={singleBook}
                selectedBooks={this.props.selectedBooks}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
