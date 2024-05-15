import React from "react";
import { skills } from "../../Data";
import "./skill.css";
import { IoMdHeartEmpty } from "react-icons/io";

const Skills = () => {
  return (
    <>
      <section className="_skill-container">
        <h2 className="section__title text-cs">Skills</h2>
        <div class="relative  overflow-x-hidden py-12">
          <div class=" flex items-center relative animate-marquee whitespace-nowrap">
            {skills.map((skill) => {
              return (
                <div className="stack item-center">
                  <div>{skill.icon}</div>
                  <div>{skill.title}</div>
                </div>
              );
            })}
            <div class="flex   ">
              {skills.map((skill) => {
                return (
                  <div className="stack item-center animate-marquee2 ">
                    <div>{skill.icon}</div>
                    <div>{skill.title}</div>
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
