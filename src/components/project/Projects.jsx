import React, { useState } from "react";
import "./projects.css";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";

const projectNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Projects = () => {
  const [projectsItems, setProjectsItems] = useState(projects);
  const [navList, setCategories] = useState(projectNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectsItems(projects);
      return;
    }
    const newProjectsItems = projects.filter(
      (item) => item.category === category
    );

    setProjectsItems(newProjectsItems);
  };

  return (
    <section className="project section text-cs" id="project">
      <h2 className="section__title text-cs">Projects</h2>
      <p className="project__subtitle text-cs">
        My <span className="text-stuff">Stuffs</span>
      </p>
      <List list={navList} filterItems={filterItems} />
      <div className="project__container container  grid">
        <Items projectsItems={projectsItems} />
      </div>
    </section>
  );
};

export default Projects;
