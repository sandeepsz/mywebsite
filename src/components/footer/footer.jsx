import React from "react";
import {FaTwitter,FaGithub,FaInstagram} from 'react-icons/fa';
import "./footer.css"
const footer = () => {
  return (
    <section className="footer">
      <div className="footer__container container socials-media grid">
        <div className="footer__socials">
          <a className="footer__social-links">
            <FaTwitter />
          </a>

          <a className="footer__social-links">
            <FaInstagram />
          </a>

          <a className="footer__social-links">
            <FaGithub />
          </a>
        </div>
        <p className="footer__copyright ">
        &copy; 2023
        <span></span>.All Rights Reserved
        </p>
        <p className="footer__copyright">Developed by
         <span>Sandip</span>
        </p>
      </div>
    </section>
  );
};

export default footer;
