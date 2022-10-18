import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

import './App.css';
import './assets/files/custom-css.css'

import Home from './pages/Home/home'
import About from './pages/About/about'
import Tujuan from './pages/Tujuan/tujuan'
import {Navbar, Nav} from 'react-bootstrap'

import {Container, Row} from "react-bootstrap"

function App() {
    return (
        <> <Router>
            {/* Navbar */}
            <div className='bg-menu bg-color-primary'>
                <Navbar collapseOnSelect="collapseOnSelect" expand="lg" sticky="top" className='no-padding'>
                    <Container className='menu bg-menu bg-color-primary p-3'>
                        <Navbar.Brand className='text-white'>Nama Aplikasi</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav className='float-right'>
                                <Link to="/" className='navs1'>Home</Link>
                                <Link to="/tujuan" className='navs1'>Tujuan</Link>
                                <Link to="/about" className='navs1'>About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            {/* Tampil Halaman */}
            <Routes >
                <Route exact="exact" path='/' element={<Home/>}/>
                <Route path="/tujuan" element={<Tujuan/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes >
            {/* Footer */}
            <Container className='p-container float-bottom'>
                <Row>
                    Copyright &copy; 2022
                </Row>
            </Container>
        </Router>
</>
    );
}

export default App;