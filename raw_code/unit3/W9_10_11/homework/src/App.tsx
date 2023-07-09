import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Day1 from "./W9-React_intro/Day1";
import Day2 from "./W9-React_intro/Day2";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
