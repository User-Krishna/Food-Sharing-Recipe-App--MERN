import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthStyles.css';

function RegisterPage() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/register', userData);

      if (response.data.success) {

        navigate('/login'); // Redirect to LoginPage
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${require('../pages/images/log.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="auth-container">
        <div className="auth-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit" className="auth-btn">
              Register
            </button>
          </form>
          <div className="auth-links">
            <a href="/login">Already have an account? Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
