import React, { useState } from 'react';
import '../SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs'; // Import bcryptjs instead of bcrypt

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER', 
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(), 
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(formData.password)) newErrors.password = 'Password must include uppercase, lowercase, number, and special character';
    if (!['USER', 'ADMIN'].includes(formData.role)) newErrors.role = 'Invalid role selected';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        // Hash the password using bcryptjs
        const hashedPassword = await bcrypt.hash(formData.password, 10);

        // Update the form data with the hashed password
        const formDataWithHashedPassword = {
          ...formData,
          password: hashedPassword
        };

        // Send the hashed password to the server
        const response = await axios.post('http://localhost:9540/regUser', formDataWithHashedPassword);
        
        alert('User registered successfully');
        console.log('Form submitted successfully:', response.data);
        navigate('/signin');
      } catch (error) {
        alert('There was an error submitting the form');
        console.error('There was an error submitting the form:', error);
        if (error.response && error.response.data) {
          setErrors({ form: error.response.data.message });
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>    
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 right-box">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Sign Up</h2>
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Name"
                />
                {errors.name && <div className="error" style={{color:'red'}}>{errors.name}</div>}
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Email"
                />
                {errors.email && <div className="error" style={{color:'red'}}>{errors.email}</div>}
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Password"
                />
                {errors.password && <div className="error" style={{color:'red'}}>{errors.password}</div>}
              </div>
              <div className="form-group mb-3">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              <div className="form-group">
                <Link to='/signin'><button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
