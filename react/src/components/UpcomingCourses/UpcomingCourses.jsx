

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingCourses.css';
import Course from '../../assets/upcomingCourse.png';
import CourseFilter from '../CourseFilter/CourseFilter'; 

function UpcomingCourses() {
  const [activeTab, setActiveTab] = useState('Diploma Courses');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="wrapper"> 
      <div className='upcomingcourse'>
        <div className='upcomingcourse__title'>
          <h4>Upcoming Courses</h4>
        </div>
        <div className="content-section">
          <hr className="divider" />
          <img src={Course} alt="Description" className="content-image" />
          <hr className="divider" />
        </div>
        <div className="upcomingCourse-tabs">
          <div 
            className={`tab ${activeTab === 'Digital Literacy & IT Skills' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Digital Literacy & IT Skills')}
          >
            Digital Literacy & IT Skills
          </div>
          <div 
            className={`tab ${activeTab === 'Business and Enterprise' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Business and Enterprise')}
          >
            Business and Enterprise
          </div>
          <div 
            className={`tab ${activeTab === 'Diploma Courses' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Diploma Courses')}
          >
            Diploma Courses
          </div>
          <div 
            className={`tab ${activeTab === 'Health Literacy' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Health Literacy')}
          >
            Health Literacy 
          </div>
        </div>
        <div className="course-scroll-container"> {/* Scrollable container */}
          <CourseFilter activeTab={activeTab} />
        </div>
        <div className="course-btn-container">
          <Link to="/Allcourses">
            <button className="course-btn">View All Courses</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingCourses;
