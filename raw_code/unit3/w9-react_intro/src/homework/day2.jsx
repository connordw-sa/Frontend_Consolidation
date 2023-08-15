import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import books from './books/scifi.json';

export const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">Browse</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export const MyFooter = () => {
  return (
    <footer>
      <p>This is a footer</p>
    </footer>
  );
};

export const Welcome = () => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export const LatestRelease = () => {
  const limitBooks = books.slice(0, 10);
  return (
    <section>
      <h1>Latest Release</h1>
      <div className="d-flex flex-wrap">
        {limitBooks.map((book) => {
          return (
            <Card className="m-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
