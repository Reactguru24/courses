import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import LoginModal from '../../components/LoginModal/LoginModal';
import axios from 'axios';

const AdminPanel = () => {
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    lessons: '',
    weeks: '',
    type: 'Paid',
    slug: '', // Ensure slug is also handled
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('adminToken'));
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [activeTab, setActiveTab] = useState('dashboard'); // Track which tab is active

  // Load courses from localStorage on initial render
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('courses'));
    if (savedCourses) {
      setCourses(savedCourses);
    }
  }, []);

  const addCourse = async (e) => {
    e.preventDefault();
    console.log('Add Course button clicked'); // Ensure the button triggers the function

    // Validate all required fields before sending the request
    if (courseData.title && courseData.description && courseData.price && courseData.lessons && courseData.weeks && courseData.slug) {
      try {
        const adminToken = localStorage.getItem('adminToken');
        console.log("Admin Token:", adminToken); // Log token to ensure it's valid

        // Log the course data being sent
        console.log("Sending course data to backend:", courseData);

        const response = await axios.post('http://localhost:5000/api/courses', courseData, {
          headers: {
            Authorization: `Bearer ${adminToken}`  // Add token in header
          }
        });

        // Log the response from the backend
        console.log("Response from backend:", response.data);

        // Update courses and reset form on success
        const updatedCourses = [...courses, response.data];
        setCourses(updatedCourses);

        // Save updated courses to localStorage
        localStorage.setItem('courses', JSON.stringify(updatedCourses));

        setCourseData({
          title: '',
          description: '',
          price: '',
          lessons: '',
          weeks: '',
          type: 'Paid',
          slug: ''
        });

        // Show success notification
        setNotification({ message: 'Course added successfully!', type: 'success' });
      } catch (error) {
        // Log the error if the request fails
        console.error("Error adding course:", error);

        // Show error notification
        setNotification({ message: 'Error adding course. Please try again.', type: 'error' });
      }
    } else {
      setNotification({ message: 'Please fill in all the fields.', type: 'error' });
    }
  };

  const deleteCourse = async (courseId, index) => {
    try {
      const adminToken = localStorage.getItem('adminToken');
      await axios.delete(`http://localhost:5000/api/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      const updatedCourses = courses.filter((_, i) => i !== index);
      setCourses(updatedCourses);

      // Save updated courses to localStorage
      localStorage.setItem('courses', JSON.stringify(updatedCourses));

      setNotification({ message: 'Course deleted successfully!', type: 'success' });
    } catch (error) {
      setNotification({ message: 'Error deleting course.', type: 'error' });
      console.error('Error deleting course:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Change active tab
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><button onClick={() => switchTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>Dashboard</button></li>
          <li><button onClick={() => switchTab('add-course')} className={activeTab === 'add-course' ? 'active' : ''}>Add Course</button></li>
          <li><button onClick={() => switchTab('manage-courses')} className={activeTab === 'manage-courses' ? 'active' : ''}>Manage Courses</button></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="main-content">
        {isLoggedIn ? (
          <>
            {notification.message && (
              <div className={`notification ${notification.type}`}>
                {notification.message}
              </div>
            )}

            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div id="dashboard">
                <h2>Dashboard</h2>
                <p>Welcome to the admin panel. Here you can manage your courses.</p>
              </div>
            )}

            {/* Add Course Tab */}
            {activeTab === 'add-course' && (
              <div id="add-course">
                <h2>Add New Course</h2>
                <form onSubmit={addCourse} className="add-course-form">
                  <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    value={courseData.title}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Course Description"
                    value={courseData.description}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Course Price"
                    value={courseData.price}
                    onChange={handleChange}
                    required
                    min="0"
                  />
                  <input
                    type="number"
                    name="lessons"
                    placeholder="Number of Lessons"
                    value={courseData.lessons}
                    onChange={handleChange}
                    required
                    min="1"
                  />
                  <input
                    type="number"
                    name="weeks"
                    placeholder="Duration in Weeks"
                    value={courseData.weeks}
                    onChange={handleChange}
                    required
                    min="1"
                  />
                  <input
                    type="text"
                    name="slug"
                    placeholder="Course Slug"
                    value={courseData.slug}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="type"
                    value={courseData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="Paid">Paid</option>
                    <option value="Free">Free</option>
                  </select>

                  <button type="submit" className="add-course-btn">Add Course</button>
                </form>
              </div>
            )}

            {/* Manage Courses Tab */}
            {activeTab === 'manage-courses' && (
              <div id="manage-courses">
                <h2>Manage Courses</h2>
                <ul className="course-list">
                  {courses.map((course, index) => (
                    <li key={course._id} className="course-item">
                      <span>{course.title}</span>
                      <button className="delete-btn" onClick={() => deleteCourse(course._id, index)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="login-container">
            <h2>Please Log In</h2>
            <LoginModal isOpen={true} toggleModal={() => setIsLoggedIn(true)} isAdminMode={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
