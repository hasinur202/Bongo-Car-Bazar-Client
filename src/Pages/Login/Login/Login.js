import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();

    const { user, signInUsingGoogle, loginUser, isLoading, authError } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <>
        <Header></Header>
        <section id="appointment" className="appointment section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Please Login</h2>
            </div>

            <form onSubmit={handleLogin} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleOnChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleOnChange} type="password" className="form-control" name="password" id="phone" placeholder="Your Password" required />
                            </div>
                        </div>
                        {isLoading && <Spinner animation="border" variant="danger" />}
                        {user?.email && <div className="py-3 mt-3 text-danger bg-success">Login successfully!</div>}
                        {authError && <div className="py-3 mt-3 text-danger">{authError}</div>}
                    </div>
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div className="text-center"><button className="btn-primary" type="submit">Login</button></div>
            </form>
        </div>
        <div className="mt-4">
            <Link to="/register">Don't have account?</Link>
            <h5>Or</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    </section>
    <Footer></Footer>
    </>
    );
};

export default Login;