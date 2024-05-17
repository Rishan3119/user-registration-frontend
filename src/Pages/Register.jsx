import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import validation from './SignupValidation';
function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:4000/register', values)
                .then(res => {
                    navigate('/login')
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='text-center mb-4'>Sign-up</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name' className='form-control rounded' onChange={handleInput} />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
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
                    <button type="submit" className="btn btn-success w-100 rounded">Sign Up</button>
                    <p className='mt-2'>Already have an account? <Link to={'/login'} className='text-decoration-none'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
