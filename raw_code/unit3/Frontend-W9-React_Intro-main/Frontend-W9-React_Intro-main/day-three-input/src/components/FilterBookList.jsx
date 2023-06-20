//Create a filterBookList function. By writing into an input field a search query, the BookList should show only the books containing the specified string into the title (hint: save the query into the BookList component state and filter the books accordingly).

import React, { Component } from "react";
import BookList from "./BookList";

class FilterBookList extends Component {
  state = {
    query: ""
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <BookList
          books={this.props.books.filter(
            (book) =>
              book.title &&
              typeof book.title === "string" &&
              book.title.toLowerCase().includes(this.state.query.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default FilterBookList;
