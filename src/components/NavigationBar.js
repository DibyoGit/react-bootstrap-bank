import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#"><i class="fa fa-bank"></i> Reactive Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/apply">Apply</Nav.Link>
                <Nav.Link href="/deposit">Deposit</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="#">Account</Nav.Link>
            <Nav.Link href="/login">
                Logout
            </Nav.Link>
        </Nav>
    </Navbar>
)
