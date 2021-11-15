import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Home/Product/Product';
import '../Home/Products/Products.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://bongo-car-bazar.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
        <Header></Header>
        <section id="services" className="doctors section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>All Cars</h2>
                </div>
                {/* products.slice(0, 6).map */}
                <div className="row">
                    {
                        products.length > 0 ? products.map(product => <Product
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
        <Footer></Footer>
        </>
    );
};

export default AllProduct;