import React from 'react';
import { Alert, Badge, Card } from 'react-bootstrap';
import books from './books/scifi.json';

export const WarningSign = (props) => {
  return (
    <div>
      <Alert variant="danger">{props.text}</Alert>
    </div>
  );
};

export const MyBadge = (props) => {
  return (
    <Badge variant={props.color} className="m-2">
      {props.text}
    </Badge>
  );
};

export const SingleBook = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export const BookList = () => {
  const fantasy = books.slice(0, 10);
  return (
    <div>
      {fantasy.map((fantasy) => (
        <SingleBook book={fantasy} />
      ))}
    </div>
  );
};
