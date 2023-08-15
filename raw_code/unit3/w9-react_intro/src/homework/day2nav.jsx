//Create a MyNav component which will render a bootstrap navigation bar with the following links: Home, About and Browse.
//Note: we don’t know how to perform navigation yet, so for now just put “#” as the href property for each one on them.

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function MyNav ()  {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Browse</Nav.Link>
            </Nav>
        </Navbar>
    );
}