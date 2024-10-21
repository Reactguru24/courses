import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';

const LoginModal = ({ isOpen, toggleModal, isRegister, isAdminMode, setIsRegister }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(''); // State for success/error message
  const [messageType, setMessageType] = useState(''); // State for message type (error/success)
  const navigate = useNavigate();

  useEffect(() => {
    setForm({ username: '', email: '', password: '' });
    setMessage(''); // Clear message on form open/reset
    setMessageType(''); // Clear message type on reset
  }, [isRegister, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setMessageType(''); // Reset message type

    try {
      const url = isRegister
        ? 'http://localhost:5000/api/users/register'
        : 'http://localhost:5000/api/users/login';

      const payload = isRegister
        ? { username: form.username, email: form.email, password: form.password }
        : { email: form.email, password: form.password };

      const response = await axios.post(url, payload);

      if (isRegister) {
        setMessage('Registration successful! Redirecting to homepage...');
        setMessageType('success');
        setTimeout(() => {
          navigate('/homepage'); // Redirect to homepage after successful registration
          toggleModal(); // Close the modal
        }, 1500);
      } else {
        const token = response.data.token;
        localStorage.setItem(isAdminMode ? 'adminToken' : 'userToken', token);
        setMessage(isAdminMode ? 'Admin Login successful!' : 'Login successful! Redirecting to homepage...');
        setMessageType('success');
        setTimeout(() => {
          navigate(isAdminMode ? '/admin-panel' : '/homepage'); // Navigate to admin panel or homepage
          toggleModal(); // Close the modal after successful login
        }, 1500);
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
      setMessageType('error');
    }
  };

  const toggleMode = () => {
    setMessage(''); // Clear message when switching mode
    setMessageType(''); // Reset message type
    if (isAdminMode) {
      toggleModal(false, false); // Close the modal
    } else {
      setIsRegister((prev) => !prev); // Use setIsRegister to toggle registration mode
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={toggleModal}>&times;</span>
        <h2>{isAdminMode ? 'Admin Login' : isRegister ? 'Register' : 'Login'}</h2>

        {/* Display Success/Error Message */}
        {message && (
          <p className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {isAdminMode ? (
            <>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your admin email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </>
          ) : (
            <>
              {isRegister && (
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              )}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </>
          )}
          <button type="submit" className="submit-button">
            {isAdminMode ? 'Login' : isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="toggle-message">
          {isAdminMode ? (
            <button onClick={toggleMode} className="toggle-button">
              Switch to User Login
            </button>
          ) : isRegister ? (
            <>
              <span>Already have an account? </span>
              <button onClick={toggleMode} className="toggle-button">
                Sign In
              </button>
            </>
          ) : (
            <>
              <span>Don't have an account? </span>
              <button onClick={toggleMode} className="toggle-button">
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
