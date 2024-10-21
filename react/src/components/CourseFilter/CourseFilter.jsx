import React from 'react';
import courses from '../../data/courses';
import './CourseFilter.css';

const CourseFilter = ({ activeTab }) => {
    const filteredCourses = courses.filter(course => course.category === activeTab);
    console.log("Active Tab:", activeTab);
    console.log("Filtered Courses:", filteredCourses);

    return (
        <div className="course-lists">
            {filteredCourses.map(course => (
                <div key={course.id} className="course-card">
                    <img src={course.image} alt={course.title} className="course-image" />
                    <h5>{course.title}</h5>
                    <p><strong>Starting:</strong> {course.startingTime}.</p>
                    <p><strong>Duration: </strong>{course.period}.</p>
                </div>
            ))}
        </div>
    );
};

export default CourseFilter;
