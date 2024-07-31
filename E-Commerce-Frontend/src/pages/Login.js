import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [password, setPassword] = useState('');
  const [user_id, setUser_id] = useState('');
  const [ifLogged, setIfLogged] = useState(false)
  const Navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        user_id,
        password,
        ifLogged,
      });
      if (response.status === 200) {
        const data = response.data;
        setIfLogged(true);
        Navigate('/userpage');
        console.log(data); // Token or other data from the server
        // Perform any redirection or further actions
      }
    } catch (error) {
      console.error("Login error:", error);
      Navigate('/home')
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleLogin}>
              <div className="my-3">
                <label htmlFor="floatingInput">Username or Email</label>
                <input
                  type="username"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                  onChange={(e) => setUser_id(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
