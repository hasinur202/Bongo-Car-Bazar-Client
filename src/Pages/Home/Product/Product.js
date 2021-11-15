import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // const {product} = props;
    const { _id, name, short_description, img, price, rating } = product;
    return (
        <>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                    <img src={img} className="img-fluid serviceImg" alt="" />
                    <div className="social">
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning py-2 bx-tada-hover">Order Now <i className="fas fa-suitcase-rolling"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="member-info">
                    <h3 className="title">{name}</h3>
                    <p className="description">{short_description}</p>
                    <div className="d-flex p-3 bg-light border-bottom Price">
                        <div className="col-lg-6 text-left">
                           <h4> Price: <sup>TK. </sup>{price}</h4>
                        </div>
                        <div className="col-lg-6 text-right">
                            <h4>Rating: {rating} / 5</h4>
                        </div>
                    </div>

                    <Link to={`/product-details/${_id}`}>
                        <button className="btn btn-success mt-3">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
    );
};

export default Product;