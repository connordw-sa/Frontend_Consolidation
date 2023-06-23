import React, { Component } from "react";
import FilterBookList from "./FilterBookList";
import BookList from "./BookList";

class BooksPage extends Component {
  render() {
    return (
      <div>
        <FilterBookList books={this.props.books} />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

export default BooksPage;
