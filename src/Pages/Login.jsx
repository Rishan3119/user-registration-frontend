import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:4000/login', values)
                .then(res => {
                    if (res.data.success) {
                        navigate('/home', { state: { user: res.data.user } });
                    } else {
                        alert("No records existed");
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='text-center mb-4 mt-3'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' className='form-control rounded' onChange={handleInput} />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password' className='form-control rounded' onChange={handleInput} />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded">Login</button>
                    <p className='mt-2'>New User? <Link to={'/'} className='text-decoration-none'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
