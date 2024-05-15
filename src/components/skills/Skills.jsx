import React from "react";
import { skills } from "../../Data";
import "./skill.css";
import { IoMdHeartEmpty } from "react-icons/io";

const Skills = () => {
  return (
    <>
      <section className="_skill-container margin-t ">
        <h2 className="section__title text-cs">Skills</h2>
        <div class="relative  overflow-x-hidden py-12">
          <div class=" flex items-center relative animate-marquee">
            {skills.map((skill) => {
              return (
                <div className="stack item-center">
                  <div className="icon">{skill.icon}</div>
                  <div className="title">{skill.title}</div>
                </div>
              );
            })}
            <div class="flex">
              {skills.map((skill) => {
                return (
                  <div className="stack item-center animate-marquee2 ">
                    <div className="icon">{skill.icon}</div>
                    <div className="title">{skill.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
