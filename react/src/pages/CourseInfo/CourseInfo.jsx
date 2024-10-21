import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseData from '../../data/coursedata'; // Import the courseData array
import './CourseInfo.css'; // Import the styles
import LoginModal from '../../components/LoginModal/LoginModal'; // Import the modal component

const CourseInfo = () => {
  const { id } = useParams(); // Get the course id from the URL
  const course = courseData.find((course) => course.id === parseInt(id)); // Find the course by id
  const navigate = useNavigate(); // For navigation
  const [isRegistered, setIsRegistered] = useState(false); // State to check if user is registered
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const handleEnrollClick = () => {
    if (isRegistered) {
      navigate('/checkout'); // Proceed to checkout if registered
    } else {
      setShowModal(true); // Show modal if not registered
    }
  };

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-info">
      <img src={course.image} alt={course.title} className="course-info__image" />
      <h2>{course.title}</h2>
      <p><span>Price:</span> ${course.price}</p>
      <p><span>Lessons:</span> {course.lessons} lessons</p>
      <p><span>Duration:</span> {course.weeks} weeks</p>
      <p>{course.description}</p>
      <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button> {/* Enroll button */}

      <LoginModal 
        isOpen={showModal} 
        toggleModal={() => setShowModal(false)} 
        isRegister={false} // Default to login mode
      />
    </div>
  );
};

export default CourseInfo;
