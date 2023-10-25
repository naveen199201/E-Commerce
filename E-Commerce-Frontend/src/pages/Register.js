import React from 'react'
import { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email ,setEmail]=useState('');
    const Navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/addUser/', {
                username,
                email,
                password,
            });
            
            console.log('Registration successful');
            console.log('Token:', response.data.token);
            Navigate('/login');
        } catch (error) {
            console.error(error.response.data.error);
        }
    };
    return (
        <>
            <Navbar />gpt
            
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="Username">Username</label>
                                <input  
                                    type="text"
                                    className="form-control"
                                    id="Username"
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-info" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register