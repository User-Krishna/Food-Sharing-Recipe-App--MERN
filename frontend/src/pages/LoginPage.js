import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthStyles.css';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/login', loginData);

      if (response.data.success) {
        navigate('/home'); // Redirect to homepage
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${require('../pages/images/back.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'  // Darker background to contrast with a white image
      }}
    >
      <div className="auth-container">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
          <div className="auth-links">
            <a href="/register">Don't have an account? Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
