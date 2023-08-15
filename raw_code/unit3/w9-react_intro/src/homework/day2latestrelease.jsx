import React from 'react';
import books from './books/scifi.json';
import { Card } from 'react-bootstrap';

export default function LatestRelease() {
  const limitBooks = books.slice(0, 10);
  return (
    <section>
      <h1>Latest Release</h1>
      <div className="latest-release d-flex flex-wrap">
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
}
