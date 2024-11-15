import React from "react";
import profileImg from "../../assets/me.png";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./home.css";
import { skills } from "./../../Data";
import resume from "./../../assets/document/resume.pdf";
import { motion } from "framer-motion";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
const Home = () => {
  const codeString = `<p>A passionate Fullstack Developer based in Kathmandu, Nepal. Skilled in building scalable web applications and interactive user experiences  Continuously learning and adapting to new technologies to deliver high-quality solutions.</p>`;

  // Highlight the code
  const highlightedCode = hljs.highlight(codeString, { language: "xml" }).value;
  return (
    <section className="home section" id="home">
      <div className="back-image"></div>
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
            Hello, <span className="home_inner_subtitle">I am</span>
          </p>

          <h1 className="home__title ">
            <span>SANDIP</span> NEPALI
          </h1>
          <p className="home__job">
            <b>A Fullstack Developer</b>
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
        </div>
        <p class="home__text">
          A passionate Fullstack Developer based in Kathmandu, Nepal. Skilled in
          building scalable web applications and interactive user experiences.
          Continuously learning and adapting to new technologies to deliver
          high-quality solutions.
        </p>

        <div className="home__socials">
          <a
            href="https://www.linkedin.com/in/sandipnepali110/"
            className="home__social-links"
          >
            <FaLinkedin />
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
      </div>
    </section>
  );
};

export default Home;
