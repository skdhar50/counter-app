import React from 'react';
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbar = () => {
    return (
        <Nav bg="light" variant="light">
            <Container>
                <Nav.Brand href="#">
                    <h2>Navbar</h2>
                </Nav.Brand>
            </Container>
        </Nav>
    );
}

export default Navbar;