import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://bongo-car-bazar.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <>
        <section id="services" className="doctors section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Popular Cars</h2>
                <p>The below Cars are very popular in Bongo Car Bazar..</p>
                </div>
                {/* products.slice(0, 6).map */}
                <div className="row">
                    {
                        products.length > 0 ? products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                        :
                        <div className="text-center">
                            <Spinner animation="border" variant="danger" />
                        </div>
                    }
                </div>
            </div>
        </section>
        </>
    );
};

export default Products;