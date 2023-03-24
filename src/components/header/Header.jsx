import React, { useEffect } from "react";
import { useState } from "react";
import { links } from "../../Data";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(()=>{
    console.log(document.body.classList)
    document.body.classList.toggle('no-scroll', showMenu)
  },[showMenu])
  return (
    <header className="header">
      <nav className="nav">
        <a className="nav__logo text-cs">San_Deep</a>
        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav__link" key={index}>
                  <a>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav__btns">
          <div className="theme__toggler">
            <BsSun />
          </div>

          <div
            className={`${showMenu ? " nav__toggle cross_sign" : "nav__toggle"}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
