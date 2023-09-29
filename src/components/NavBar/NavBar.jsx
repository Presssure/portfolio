import styles from "./NavBar.module.css";
import { slide as Menu } from "react-burger-menu";
import React from "react";
import { Link, useLocation } from "react-router-dom";

// needs to be a class based component as we need to keep track of our url from our location props
const NavBar = () => {
  const location = useLocation();

  const homeClass = location.pathname === "/" ? styles["active-item"] : "";
  // const aboutClass =
  //   location.pathname === "/about" ? styles["active-item"] : "";
  const projectsClass =
    location.pathname === "/projects" ? styles["active-item"] : "";
  const skillsClass =
    location.pathname === "/skills" ? styles["active-item"] : "";
  const contactClass =
    location.pathname === "/contact" ? styles["active-item"] : "";
  return (
    <Menu className={""}>
      {/* try to never use a tags in a react router application */}
      <Link className={`${styles["menu-item"]} ${homeClass}`} to="/">
        Home
      </Link>
      {/* <Link className={` ${styles["menu-item"]} ${aboutClass}`} to="/about">
        About
      </Link> */}
      <Link
        className={` ${styles["menu-item"]} ${projectsClass}`}
        to="/projects"
      >
        Projects
      </Link>
      <Link className={` ${styles["menu-item"]} ${skillsClass}`} to="/skills">
        Skills
      </Link>
      <Link className={` ${styles["menu-item"]} ${contactClass}`} to="/contact">
        Contact
      </Link>
    </Menu>
  );
};

export default NavBar;
