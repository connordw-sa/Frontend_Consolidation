import React, { useState } from 'react';
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

/*export const SingleBook = (props) => {
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
/8*/

export class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: '18rem' }}
          onClick={() => this.setState({ selected: !this.state.selected })}
          className={this.state.selected ? 'bg-primary' : ''}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export const filterBooks = (title) => {
  const slicedBooks = books.slice(0, 10);
  const filteredBooks = slicedBooks.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );
  return filteredBooks;
};

export const BookList = () => {
  const [book, setBook] = useState('');

  return (
    <div className="d-flex flex-wrap">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setBook(e.target.value)}
      />
      {filterBooks(book).map((book) => (
        <SingleBook book={book} />
      ))}
    </div>
  );
};
