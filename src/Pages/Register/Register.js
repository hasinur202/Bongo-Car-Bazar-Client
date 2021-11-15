import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, registerUser, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (loginData.password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(loginData.password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
    }
    
    return (
        <>
        <Header></Header>
        <section id="appointment" className="appointment section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Please Register</h2>
            </div>

            <form onSubmit={handleRegistration} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="col-md-12 form-group">
                                <input onBlur={handleOnBlur} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleOnBlur} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleOnBlur} type="password" className="form-control" name="password" id="phone" placeholder="Your Password" required />
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-0">
                                <input onBlur={handleOnBlur} type="password" className="form-control" name="password2" id="phone" placeholder="Retype Password" required />
                            </div>
                            <div className="py-3 mt-3 text-danger">{error}</div>
                            <div className="py-3 mt-3 text-danger">{authError}</div>
                        </div>
                    </div>
                </div>
                <div className="text-center"><button className="btn-primary" type="submit">Register</button></div>
                {/* <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm mt-3">Reset Password</button> */}
            </form>
        </div>
        <div className="mt-4">
            <Link to="/login">Already Have an account?</Link>
            <h5>Or</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    </section>
    <Footer></Footer>
    </>
    );
};

export default Register;