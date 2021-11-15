import React from 'react';
import { Link } from 'react-router-dom';

const Member = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                    <img src={img} className="img-fluid" alt="" />
                    <div className="social">
                    <Link to="#"><i className="bi bi-twitter"></i></Link>
                    <Link to="#"><i className="bi bi-facebook"></i></Link>
                    <Link to="#"><i className="bi bi-instagram"></i></Link>
                    <Link to="#"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{expertize}</span>
                </div>
            </div>
        </div>
    );
};

export default Member;