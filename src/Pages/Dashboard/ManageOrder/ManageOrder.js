import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState({});
    let sL = 0;

    useEffect(() => {
        const url = 'https://bongo-car-bazar.herokuapp.com/all-orders';
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // Approve Order
    const handleApproveBooking = id => {
    const proceed = window.confirm('Are you sure, you want to approve?');
    if (proceed) {
        const url = `https://bongo-car-bazar.herokuapp.com/approve-order/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved successfully');
                    const remainingBookings = orders.filter(book => book._id !== id);
                    setOrders(remainingBookings);
                }
            });
        }
    }

// Reject Order AN USER
    const handleRejectBooking = id => {
    const proceed = window.confirm('Are you sure, you want to reject?');
    if (proceed) {
        const url = `https://bongo-car-bazar.herokuapp.com/reject-order/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Rejected successfully');
                    const remainBookings = orders.filter(book => book._id !== id);
                    setOrders(remainBookings);
                }
            });
        }
    }

    // DELETE AN USER
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://bongo-car-bazar.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingBookings = orders.filter(book => book._id !== id);
                    setOrders(remainingBookings);
                }
            });
        }
    }

    return (
        <section id="appointment" className="appointment section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Manage Orders</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SL. No.</th>
                                <th scope="col">Order Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orders.length > 0 ? orders.map(order => <tr key={order._id}>
                                    <th scope="row">{sL = sL + 1}</th>
                                    <td>{order.product_id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>
                                    { order.status === 2 ? <span>Pending</span> : <span>Approved</span>}
                                    </td>
                                    <td>
                                        {
                                            order.status === 2 ? <button className="mr-2" onClick={() => handleApproveBooking(order._id)}>Approve</button> : ''
                                        }
                                        {
                                            order.status === 2 ? <button onClick={() => handleRejectBooking(order._id)}>Reject</button> : ''
                                        }
                                        <button onClick={() => handleDeleteBooking(order._id)}><i className="fas fa-trash"></i></button>
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

export default ManageOrder;