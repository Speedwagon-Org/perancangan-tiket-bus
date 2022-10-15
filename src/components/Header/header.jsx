import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import {Navbar, Nav} from 'react-bootstrap'
import '../../index.css'

export default class HeaderComponent extends Component {
    render() {
        return (
            <> 
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Nama Aplikasi</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#menu1">Menu 1</Nav.Link>
                            <Nav.Link href="#menu2">Menu 2</Nav.Link>
                            <Nav.Link href="#menu3">Menu 3</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
