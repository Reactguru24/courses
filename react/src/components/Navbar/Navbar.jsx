import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LoginModal from '../../components/LoginModal/LoginModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [user, setUser] = useState(null); // State to hold the logged-in user's info (e.g., username)
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user token exists in localStorage when the component mounts
    const userToken = localStorage.getItem('userToken');
    const adminToken = localStorage.getItem('adminToken');
    const loggedInUsername = localStorage.getItem('username'); // Store the username for display

    if (userToken || adminToken) {
      setUser(loggedInUsername || 'Admin');
    }
  }, []);

  const toggleModal = (registerMode = false, adminMode = false) => {
    setIsRegister(registerMode);
    setIsAdminMode(adminMode);
    setIsModalOpen(true);
  };

  const handleClientLoginClick = () => {
    toggleModal(false); // Open login modal for clients
  };

  const handleClientRegisterClick = () => {
    toggleModal(true); // Open registration modal for clients
  };

  const handleAdminLoginClick = () => {
    toggleModal(false, true); // Open admin login modal
  };

  const handleLogout = () => {
    // Remove the user/admin token from localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('username'); // Clear username from localStorage
    setUser(null); // Reset the user state
    navigate('/'); // Redirect to the homepage or login screen
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">EduOnline</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Homepage</Link></li>
          <li className="dropdown">
            <Link to="/listing">Courses</Link>
            <ul className="dropdown-menu">
              <li><Link to="/Allcourses">All Courses</Link></li>
              <li><Link to="/free-courses">Free Courses</Link></li>
              <li><Link to="/premium-courses">Premium Courses</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/checkout">Events</Link>
            <ul className="dropdown-menu">
              <li><Link to="/event1">Event 1</Link></li>
              <li><Link to="/event2">Event 2</Link></li>
            </ul>
          </li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="navbar-auth">
          {user ? (
            <>
              <span className="navbar-username">Welcome, {user}</span>
              <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn register-btn" onClick={handleClientRegisterClick}>Register</button>
              <button className="btn login-btn" onClick={handleClientLoginClick}>Login</button>
              <button className="btn admin-login-btn" onClick={handleAdminLoginClick}>Admin Login</button>
            </>
          )}
        </div>
      </nav>

      {/* Login Modal for Clients and Admin */}
      <LoginModal
        isOpen={isModalOpen}
        toggleModal={() => setIsModalOpen(false)}
        isRegister={isRegister}
        isAdminMode={isAdminMode}
        setIsRegister={setIsRegister}
      />
    </>
  );
};

export default Navbar;
