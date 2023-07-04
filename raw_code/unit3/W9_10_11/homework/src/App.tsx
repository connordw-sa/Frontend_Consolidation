import React from "react";
import Page1 from "./W9-React_intro/Page1";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Page1 />
    </div>
  );
}

export default App;
