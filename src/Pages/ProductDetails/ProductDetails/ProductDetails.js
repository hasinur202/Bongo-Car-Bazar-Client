import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        const url = `https://bongo-car-bazar.herokuapp.com/products/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [_id]);
    
    return (
        <>
        <Header></Header>
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Product Details</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={product.img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning py-2 bx-tada-hover">Order {product.name}</button>
                        </Link>
                        <h3 className="text-left">{product.name}</h3>
                        <p className="fst-italic text-left">
                            {product.short_description}
                        </p>
                        <ul>
                            <li><i className="text-left bi bi-check-circle"></i>Price: {product.price}</li>
                        </ul>
                        <p className="text-justify">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    );
};

export default ProductDetails;