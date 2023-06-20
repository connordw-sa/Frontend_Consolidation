// Create a BookList component. This component receives by props a list of books and displays them using the SingleBook component.

import React from "react";
import SingleBook from "./SingleBook";
import books from "../books/fantasy.json";
import { Row } from "react-bootstrap";

const BookList = () => {
  return (
    <div>
      <Row>
        {books.map((book) => (
          <SingleBook book={book} />
        ))}
      </Row>
    </div>
  );
};

export default BookList;
