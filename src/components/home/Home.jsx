import React from "react";
import profileImg from "../../assets/me.png";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import resume from "../../assets/resume.pdf";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__text">
          <p className="home__subtitle text-cs">
            Hello, <span className="home_inner_subtitle">My Name Is</span>
          </p>

          <h1 className="home__title ">
            <span>SANDIP</span> NEPALI
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Web Developer</b>
          </p>
        </div>

        <div className="home__img-wrapper">
          <div className="home__banner">
            <img src={profileImg} alt="" className="home__profile" />
          </div>

          <div className="home_skills_container">
            <p>MY SKILLS</p>
            <div className="home_skills">
              <div className="skill1">React</div>
              <div className="skill2">Express</div>
              <div className="skill3">NodeJS</div>
              <div className="skill4">MongoDB</div>
              <div className="skill5">MYSQL</div>
              <div className="skill6">MaterialUI</div>
              <div className="skill7">AntDesign</div>
              <div className="skill8">TypeScript</div>
            </div>
          </div>
        </div>

        <p className="home__text">
          Hi, I'm Sandip Nepali. A passionate Fullstack Developer based in Kathmandu,Nepal
        </p>

        <div className="home__socials">
          <a  href="https://twitter.com/SandeepNepali18" className="home__social-links">
            <FaTwitter />
          </a>

          <a  href="https://www.instagram.com/sandeep_npbt/" className="home__social-links">
            <FaInstagram />
          </a>

          <a  href="https://github.com/sandeepNpl" className="home__social-links">
            <FaGithub />
          </a>
        </div>

        <div className="home__btns">
          <a href={resume}  download = "Resume" className="btn text-cs">
            Download CV
          </a>
          <a href="" className="hero__link text-cs">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
