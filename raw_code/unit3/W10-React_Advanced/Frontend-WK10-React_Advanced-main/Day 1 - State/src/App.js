import "./App.css";

import BookList from "./components/BookList";
import Comments from "./components/Comments";
import HorrorBooks from "./books/horror.json";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  state = {
    asin: ""
  };
  selectedBooks = (newBook) => {
    this.setState({
      asin: newBook
    });
  };
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md={8}>
              <BookList
                books={HorrorBooks}
                selectedBooks={this.selectedBooks}
              />
            </Col>
            <Col md={4}>
              <Comments asin={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
