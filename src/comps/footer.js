import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
   
        Contact Me:<div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100080638864868" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/zieuuuus/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className="copyright">
    &copy; 2023 Mouin Boubarkri. All Rights Reserved.
  </div>
      </div>
    </footer>
  );
}

export default Footer;
