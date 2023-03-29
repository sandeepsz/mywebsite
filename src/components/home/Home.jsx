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
            Hello, <span>My Name Is</span>
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
          I am from Nepal.I have great potential for learning new skills and
          technology.
        </p>

        <div className="home__socials">
          <a className="home__social-links">
            <FaTwitter />
          </a>

          <a className="home__social-links">
            <FaInstagram />
          </a>

          <a className="home__social-links">
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
