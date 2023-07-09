import React from "react";
import { Nav, Navbar } from "react-bootstrap";
export default function MyNavbar() {
  return (
    <Navbar className="w-100 justify-content-between">
      <Nav>Home</Nav>
      <Nav>About</Nav>
      <Nav>Browse</Nav>
    </Navbar>
  );
}
