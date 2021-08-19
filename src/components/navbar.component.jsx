import React from 'react';
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

const Navbar = (props) => {
    return (
        <Nav bg="light" variant="light">
            <Container>
                <Nav.Brand href="#">
                    <h2>
                        Navbar <Badge bg="secondary">{props.nonZeroInputs}</Badge>
                    </h2>
                </Nav.Brand>
            </Container>
        </Nav>
    );
}

export default Navbar;