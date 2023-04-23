import React, { useEffect } from "react";
import { useState } from "react";
import { links } from "../../Data";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.css";
import { Link } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import { animateScroll } from "react-scroll";

const Header = () => {
  const getStorageTheme = () => {
    let theme_Toggle = "light-theme";
    if (localStorage.getItem("theme_Toggle")) {
      theme_Toggle = localStorage.getItem("theme_Toggle");
    }
    return theme_Toggle;
  };
  const [showMenu, setShowMenu] = useState(false);
  const [theme_Toggle, setTheme_Toggle] = useState(getStorageTheme());
  const [scrollNav, setScrollNav] = useState(false);
  const scrollTop = () =>{
    animateScroll.scrollToTop();
  };

  const changeNav = () =>{
    if(window.scrollY >=80){
      setScrollNav(true)
    }else{
      setScrollNav(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  },[])

  useEffect(() => {
    console.log(document.body.classList);
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme_Toggle;
    localStorage.setItem("theme_Toggle", theme_Toggle);
  }, [theme_Toggle]);

  const toggleTheme = () => {
    if (theme_Toggle === "light-theme") {
      setTheme_Toggle("dark-theme");
    } else {
      setTheme_Toggle("light-theme");
    }
  };

  return (
    <header className={`${scrollNav ? 'scroll-header': ''} header` }>
      <nav className="nav">
        <Link to= '/' onClick={scrollTop} className="nav__logo text-cs">San_Deep</Link>
        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav__link" key={index}>
                  <Link
                    to={path}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                   {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme_Toggle === "light-theme" ? (
              <BsMoon style={{ color: "black" }} />
            ) : (
              <BsSun />
            )}
          </div>

          <div
            className={`${
              showMenu ? " nav__toggle cross_sign" : "nav__toggle"
            }`}
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
