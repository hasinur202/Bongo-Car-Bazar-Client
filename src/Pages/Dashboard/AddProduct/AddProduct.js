import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://bongo-car-bazar.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })
    };
    return (
        <section id="appointment" className="appointment section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Add a New Product</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input defaultValue="" {...register("name")} type="text" className="form-control" placeholder="Product Name" required />
                        </div>
                        <div className="col-md-6 form-group">
                            <input defaultValue="" {...register("price")} type="number" className="form-control" placeholder="Price (ex. 5000)" required />
                        </div>
                        <div className="col-md-12 form-group mt-md-0">
                            <input defaultValue="" {...register("img")} type="text" className="form-control" placeholder="Image Url" required />
                        </div>
                        {/* <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input defaultValue="" {...register("time")} type="text" className="form-control" placeholder="Time (ex. 2 Days)" required />
                        </div> */}
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                            <input defaultValue="" {...register("short_description")} type="text" className="form-control" placeholder="Short Description" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea defaultValue="" {...register("description")} className="form-control" rows="5" placeholder="Description"></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        { errors.length > 0 &&
                            errors.map(error => <div className="error-message">{error}</div> )
                        }
                        <div className="sent-message">Your added request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><button className="btn-primary px-3 py-2" type="submit">Add Now</button></div>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;