import React from "react";
import MyNavbar from "./day2/Navbar";
import Footer from "./day2/Footer";
import { Card } from "react-bootstrap";
import scifibooks from "./day2/scifi.json";
export default function Day2() {
  return (
    <div className="h-100">
      <h1>Day 2</h1>
      <h2>Book store</h2>
      <MyNavbar />

      <h3>Latest Releases</h3>
      <div className="d-flex row">
        {scifibooks.map((book) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={book.img} />
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
