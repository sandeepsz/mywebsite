import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";

import { motion } from "framer-motion";

const Items = ({ projectsItems }) => {
  return (
    <>
      {projectsItems.map((projectsItems) => {
        const { id, img, category, title, demo, link } = projectsItems;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            className="project__items card card-two"
            key={id}
          >
            <div className="project__img__wrapper">
              <img src={img} alt="" className="project__img" />
            </div>
            <span className="project__category ">{category}</span>
            <h3 className="project__title">{title}</h3>
            <a href="" className="link">
              {category === "Development" ? (
                <GoMarkGithub style={{ marginLeft: "5px" }} />
              ) : category === "UI UX Design" ? (
                <FaFigma />
              ) : (
                <SiAdobeillustrator />
              )}
            </a>
            <a href={link} className="link2">
              {demo}
            </a>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
