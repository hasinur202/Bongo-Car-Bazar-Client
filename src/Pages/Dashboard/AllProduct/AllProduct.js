import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllProduct = () => {
    const [products, setProducts] = useState({});
    let sL = 0;

    useEffect(() => {
        const url = 'https://bongo-car-bazar.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // DELETE AN USER
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://bongo-car-bazar.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingProducts = products.filter(book => book._id !== id);
                    setProducts(remainingProducts);
                }
            });
        }
    }

    return (
        <section id="appointment" className="appointment section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Manage Products</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SL. No.</th>
                                <th scope="col">Booking Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            products.length > 0 ? products.map(product => <tr key={product._id}>
                                    <th scope="row">{sL = sL + 1}</th>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteBooking(product._id)}><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                            :
                            <Spinner className="text-center" animation="border" variant="danger" />
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllProduct;