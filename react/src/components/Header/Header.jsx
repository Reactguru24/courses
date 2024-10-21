
import React from 'react';
import Slider from 'react-slick';
import './Header.css';  
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import homepage1 from '../../assets/homepage1.jpg';
import homepage2 from '../../assets/homepage2.jpg';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  const images = [
    { className: 'slide-background1', title: 'Welcome to MyApp' },
    { className: 'slide-background2', title: 'Explore Our Courses' },
  ];

  return (
    <header className="header">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <div className={image.className}>
              <div className="slide-content">
                <h1 className="animated-title">{image.title}</h1>
                <button className="view-more-button">View More Free Courses</button> 
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default Header;
