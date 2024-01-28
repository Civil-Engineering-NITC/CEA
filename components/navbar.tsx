import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { ColouredText } from "./ColouredText";
import { ColourdButton } from "./ColourdButton";
import { MenuBtn } from "./MenuBtn";
import Image from "next/image";
import arrow from "../public/Arrow 1.png";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={styles.navDiv}>
        <h1 className={styles.colorText}>CEA.</h1>
        <div className={styles.navMenu}>
          <div className={styles.navlinks}>
            <a href="">Home.</a>
            <a href="">AboutUs.</a>
            <a href="">Resources.</a>
            <a href="">Members.</a>
            <a href="">ContactUS.</a>
          </div>
          <a href="" className={styles.mainDiv}>
            <div className={styles.buttonDiv}>
              Sign In
              <div className={styles.arrowDiv}>
                <Image src={arrow} alt="" className={styles.arrowButton} />
              </div>
            </div>
            <div className={styles.colorDiv}></div>
          </a>
          <div className={styles.menuBack}>
            <button
              className={`${styles.hamburger}  ${
                isActive ? styles.isActive : ""
              }`}
              onClick={toggleMenu}
            >
              <div className={styles.bar}></div>
            </button>
          </div>
        </div>
        <div
          className={`${styles.mobileNav} ${isActive ? styles.isActive : ""}`}
          onClick={toggleMenu}
        >
          <a href="">Home.</a>
          <a href="">AboutUs.</a>
          <a href="">Resources.</a>
          <a href="">Members.</a>
          <a href="">ContactUS.</a>
        </div>
      </div>
    </>
  );
};
