import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.facebook.com">
          <SlSocialFacebook className="social-icon facebook" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram className="social-icon instagram" />
        </a>
        <a href="https://twitter.com">
          <FaTwitter className="social-icon twitter" />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin className="social-icon linkedin" />
        </a>
        <a href="https://wa.me/yourphonenumber">
          <FaWhatsapp className="social-icon whatsapp" />
        </a>
      </div>
      <div className="footer__contact">
        <p>Contact Us:</p>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;
