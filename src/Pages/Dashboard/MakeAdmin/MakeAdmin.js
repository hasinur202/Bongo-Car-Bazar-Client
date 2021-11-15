import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://bongo-car-bazar.herokuapp.com/add-admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Admin Added Successfully');
                    reset();
                }
            })
    };
    return (
        <section className="appointment section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Add a New Admin</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-md-6 m-auto form-group">
                            <input defaultValue="" {...register("email")} type="text" className="form-control" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        { errors.length > 0 &&
                            errors.map(error => <div className="error-message">{error}</div> )
                        }
                        <div className="sent-message">Your added request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><button className="btn-primary px-3 py-2" type="submit">Add Admin</button></div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;