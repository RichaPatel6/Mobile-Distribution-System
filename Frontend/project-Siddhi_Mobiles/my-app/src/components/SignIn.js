import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../SignUp.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ form: '' }); 
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = email.current.value;
    const pass = password.current.value;

    try {
      const response = await axios.post('http://localhost:9540/loginUser', { email: mail, password: pass });
      console.log(response.data);
      const [role, userId] = response.data.split('-');
      const uId = parseInt(userId);
      console.log(role);
      Cookies.set('UserId', uId, { expires: 7 });

      if(role === 'USER') {
        Cookies.set('isUser', true);
        Cookies.set('authenticated', true);
        navigate('/home');
        window.location.reload();
      } else if (role === 'ADMIN'){
        Cookies.set('isAdmin', true, { expires: 7 });
        Cookies.set('authenticated', true, { expires: 7 });
        navigate('/home1');
        window.location.reload();
      }else{
        alert(response.status);
      }
      
    } catch (error) {
      console.error('Error occurred:', error);
      if(mail === null || mail === ""){
        alert("Email and password is require");
      }else{
      setErrors(prev => ({ ...prev, form: "Incorrect username or password" }));}
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 right-box">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Sign-In</h2>
              </div>
              {errors.form && (
                <div className="alert alert-danger" role="alert">
                  {errors.form}
                </div>
              )}
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6" type="button">
                  <img src="/images/google.png" alt="Google sign-in" style={{ width: 20 }} className="me-2" />
                  <small>Sign In with Google</small>
                </button>
              </div>
              &nbsp;
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="email"
                  ref={email}
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  required=""
                />
              </div>

              <div className="input-group mb-1">
                <input
                  type="password"
                  name="password"
                  ref={password}
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  required=""
                />
              </div>
              &nbsp;

              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>

              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                  Sign In
                </button>
              </div>
              <br />
              <div className="row">
                <small>
                  Not a member?
                  <Link to="/signup">Create account</Link>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
