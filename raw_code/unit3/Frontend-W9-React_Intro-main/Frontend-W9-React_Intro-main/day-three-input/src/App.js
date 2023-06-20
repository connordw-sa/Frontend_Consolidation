import React from "react";
import WarningSign from "./components/WarningSign.jsx";
import MyBadge from "./components/MyBadge.jsx";
import BookList from "./components/BookList.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <WarningSign variant="danger" text="warning" />
      <MyBadge text="badge" variant="primary" />
      <BookList />
    </div>
  );
}

export default App;
