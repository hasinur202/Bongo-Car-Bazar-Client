import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
    return ( 
        <footer id="footer">
            <div className="footer-top bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-info">
                                <h3 className="text-white">BONGO CAR BAZAR</h3>
                                <p className="text-white">
                                   Ring Road <br/>
                                    Mohammadpur-1207, Dhaka<br/><br/>
                                    <strong>Phone:</strong> +88 0177 XXXXX XXX<br/>
                                    <strong>Email:</strong> test@gmail.com<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href="www.twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="www.facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="www.instagrm.com" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="www.google.com" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="www.linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links text-white">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link className="text-info" as={HashLink} to="/home#home">Home</Nav.Link></li>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link className="text-info" as={HashLink} to="/all-products">Explore</Nav.Link></li>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link className="text-info" as={HashLink} to="/home#team">Our Team</Nav.Link></li>
                                <li><i className="bx bx-chevron-right"></i><Nav.Link className="text-info" as={HashLink} to="/home#contact">Contact</Nav.Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-6 footer-newsletter">
                            <h4 className="text-white">Our Newsletter</h4>
                            <p className="text-white">Subsribe us by your valid email address</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>BONGO CAR BAZAR</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <Link to="#">Sadia Mahmuda</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;