import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.gif';
import './navbar.css';

const Navbarx = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Learn">Learn</Nav.Link>
                        <Nav.Link href="#Rarity">Rarity</Nav.Link>
                        <Nav.Link href="#Faq">Faq</Nav.Link>
                        <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
                        <Nav.Link href="https://opensea.io/collection/yoomans">Gallery</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#Mint">Mint</Nav.Link>
                    <Button variant="primary">Stake</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarx
