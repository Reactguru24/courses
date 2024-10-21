import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-left'>
          <h3>EduOnline</h3>
          <p>Empowering online learning for everyone.</p>
        </div>
        <div className='footer-center'>
          <h4>Links</h4>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-right'>
          <h4>Follow Us</h4>
          <div className='social-media'>
            <a href='#' aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href='#' aria-label='Twitter'>
              <i className="fab fa-twitter"></i> 
            </a>
            <a href='#' aria-label='Instagram'>
              <i className="fab fa-instagram"></i> 
            </a>
            <a href='#' aria-label='LinkedIn'>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className='footer-contact'>
          <h4>Contact Us</h4>
          <div className='contact-info'>
            <div className='contact-item'>
              <h5>Phone:</h5>
              <p>(123) 456-7890</p>
            </div>
            <div className='contact-item'>
              <h5>Email:</h5>
              <p>info@eduonline.com</p>
            </div>
            <div className='contact-item'>
              <h5>Location:</h5>
              <p>123 Edu St, Learning City, LC 12345</p>
            </div>
            <div className='contact-item'>
              <h5>Map:</h5>
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509117!2d144.95373631568115!3d-37.81627997975182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f2c7b91%3A0xe5bbd4b62d37b6af!2sEduOnline!5e0!3m2!1sen!2sus!4v1628651436340!5m2!1sen!2sus"
                width="200"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} EduOnline. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
