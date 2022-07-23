import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
  FaTimes
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; EPL PREDICTIONS</a>
            <a href="#">&bull; TODAYS PREDICTIONS</a>
            <a href="#">&bull; TOMORROWS PREDICTIONS</a>
            <a href="#">&bull; FPL</a>
            <a href="#">&bull; ABOUT US</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support Center</h4>
          <div className="footer-links">
            <a href="#">&bull; CONTACT US</a>
            <a href="#">&bull; TERMS AND CONDITIONS</a>
            <a href="#">&bull; PRIVACY POLICY</a>
            <a href="#">&bull; SUBSCRIBE</a>
            <a href="#">&bull; ABOUT US</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            
            <p>
              <FaEnvelope /> &nbsp; Email: xpredict@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.Xpredict.com
            </p>
          </div>
        </div>
        <div className="footer-box">
        <FaTimes color="#fff" size={33} />
        <p className="logo-text">
          <span>Predict</span>
        </p>
          
       
          <p className="u-text-small">&copy; Copyright 2021. Xpredict.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
