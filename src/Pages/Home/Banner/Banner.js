import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (     
        <>       
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-50"
                    src={banner3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-75"
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-50"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2><span className="text-success">WHY</span> CHOOSE US</h2>
            </div>

                <div className="row">
                <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                    <div className="icon-box mt-5 mt-lg-0 activityCont">
                        <i className="bx bx-receipt"></i>
                        <h4>Cost Effective</h4>
                        <p>We are very well known that how much you have worked hard for your savings. We provide you the most solid car.</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                        <i className="fas fa-dollar-sign"></i>
                        <h4>No Additional Charges</h4>
                        <p>This is the most commong thing that is suffered by most of the people. Bongo Car Bazar has a policy that says "NO ADDITIONAL CHARGES".</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                    <i className="fas fa-chart-line"></i>
                        <h4>Product Quality</h4>
                        <p>We guarantee that you will satisfy to buy car from us and can use comfortablely. </p>
                    </div>
                </div>
                <div className="image col-lg-6 order-1 order-lg-2" style={{backgroundImage: `url("assets/img/about-1.jpg")`}} data-aos="zoom-in"></div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Banner;