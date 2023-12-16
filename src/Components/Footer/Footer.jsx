import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import { BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <BsInstagram className="footer-icon" />
        </div>
        <div className="footer-icons-container">
          <BsWhatsapp className="footer-icon" />
        </div>
        <div className="footer-icons-container">
          <BsTwitter className="footer-icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
