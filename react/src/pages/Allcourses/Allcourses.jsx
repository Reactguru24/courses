import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import CourseCard from '../../components/CourseCard/CourseCard';
import './AllCourses.css'; // Import styles

const AllCourses = ({ filter }) => {
  const [courses, setCourses] = useState([]); // State to store courses
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch all courses from the API when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data); // Set the courses data
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError('Failed to load courses'); // Set error if the API call fails
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Filter courses based on the filter prop
  const filteredCourses = filter === 'free'
    ? courses.filter((course) => course.price === 0) // Free courses
    : filter === 'premium'
    ? courses.filter((course) => course.price > 0) // Premium courses (paid)
    : courses; // Show all courses by default if no filter

  if (loading) {
    return <p>Loading courses...</p>; // Show loading message while fetching
  }

  if (error) {
    return <p>{error}</p>; // Show error message if something went wrong
  }

  return (
    <div className="course-list">
      {filteredCourses.map((course) => (
        <Link to={`/course/${course._id}`} key={course._id} style={{ textDecoration: 'none' }}>
          <CourseCard
            image={course.image}
            title={course.title}
            price={course.price}
            lessons={course.lessons}
            weeks={course.weeks}
          />
        </Link>
      ))}
    </div>
  );
};

export default AllCourses;
