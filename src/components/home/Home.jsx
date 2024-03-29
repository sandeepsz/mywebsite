import React from "react";
import profileImg from "../../assets/me.png";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import "./home.css";
import { skills } from "./../../Data";
import resume from "./../../assets/document/resume.pdf";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ dudration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="home__text"
        >
          <p className="home__subtitle text-cs">
            Hello, <span className="home_inner_subtitle">My Name Is</span>
          </p>

          <h1 className="home__title ">
            <span>SANDIP</span> NEPALI
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Fullstack Developer</b>
          </p>
        </motion.div>

        <div className="home__img-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ dudration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="home__banner"
          >
            <img src={profileImg} alt="" className="home__profile" />
          </motion.div>

          <div className="home_skills_container">
            <p>MY SKILLS</p>
            <div className="home_skills">
              {skills.map((item, id) => {
                return (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                    src={item.img}
                    width="40px"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>

        <p className="home__text">
          A passionate Fullstack Developer based in Kathmandu,Nepal
        </p>

        <div className="home__socials">
          <a
            href="https://twitter.com/SandeepNepali18"
            className="home__social-links"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/sandeep_npbt/"
            className="home__social-links"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/sandeepNpl"
            className="home__social-links"
          >
            <FaGithub />
          </a>
        </div>

        <div className="home__btns">
          <a href={resume} download="Resume" className="btn text-cs">
            Download CV
          </a>
        </div>

        <div className="skills-title text-cs">
          <p>My Skills</p>
        </div>

        <div className="home_skills-mobile">
          {skills.map((item, id) => {
            return (
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
                src={item.img}
                width="40px"
                alt=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
