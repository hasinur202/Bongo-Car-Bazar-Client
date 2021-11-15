import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar variant="light" className="py-2 mainNav" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <h1 className="logo"><Link style={{fontSize: '25px', color: 'white'}} as={HashLink} to="/home#home">BONGO CAR BAZAR</Link></h1>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-white">
                        {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/all-products">Explore</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#team">Our Team</Nav.Link>
                        {/* {user.email &&
                            <Nav.Link as={HashLink} to="/add-tour">Add New Tour</Nav.Link>
                        }
                        {user.email &&
                            <Nav.Link as={HashLink} to="/my-booking">My Booking</Nav.Link>
                        }
                        {user.email &&
                            <Nav.Link as={HashLink} to="/manage-all-booking">Manage Booking</Nav.Link>
                        } */}
                        <Nav.Link style={{marginRight: '5px'}} as={HashLink} to="/home#contact">Contact</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/manage-tour"><span className="btn btn-success btn-sm d-md-inline">Manage <b>Tour</b></span></Nav.Link> */}
                        {user?.email ?
                            <Button onClick={logOut} className="btn-sm px-2" variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        { user.displayName && 
                            <span className="mt-4"> Signed In as <div className="text-success"> {user?.displayName}</div></span>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;