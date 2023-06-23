import { Container, Row, Col, Card } from "react-bootstrap";

import scifiArray from "../books/scifi.json";

const LatestRelease = () => {
  return (
    <Container fluid>
      <Col>
        <Col>
          <h2>Latest Releases</h2>
        </Col>
        <Col>
          <Row className="p-0 m-0">
            <Col className="" md={2} sm={6}>
              {scifiArray.slice(0, 6).map((book) => (
                <Card key={book.asin} className="my-5 mx-5">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    className="imgTop card-image"
                    style={{
                      height: "50vh",
                      objectFit: "fill"
                    }}
                  />
                  <Card.Body>
                    <Card.Header className="text-truncate">
                      {book.title}
                    </Card.Header>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    ${book.price}
                  </Card.Footer>
                </Card>
              ))}
            </Col>
          </Row>
        </Col>
      </Col>
    </Container>
  );
};

export default LatestRelease;
