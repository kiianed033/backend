import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand to="/">Logo</Navbar.Brand>
                <Nav className="me-auto">
                        
                    <Link to='/' >Home</Link>
                        
                    <Link to='/about'>
                        
                        </Link>
                </Nav>
            </Container>
        </Navbar>  
    );
}