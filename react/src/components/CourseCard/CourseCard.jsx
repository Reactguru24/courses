// CourseCard.jsx
import React from 'react';
import './CourseCard.css'; // Import styling for the course card

const CourseCard = ({ image, title, price, lessons, weeks }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card__image" />
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__price">Price: ${price}</p>
      <p className="course-card__details">{lessons} lessons | {weeks} weeks</p>
    </div>
  );
};

export default CourseCard;
