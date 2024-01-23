import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { ColouredText } from "./ColouredText";
import { ColourdButton } from "./ColourdButton";
import { MenuBtn } from "./MenuBtn";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={styles.navDiv}>
        <ColouredText text="CEA." size="1.5rem" />
        <div className={styles.navMenu}>
          <div className={styles.navlinks}>
            <a href="">Home.</a>
            <a href="">AboutUs.</a>
            <a href="">Resources.</a>
            <a href="">Members.</a>
            <a href="">ContactUS.</a>
          </div>
          <ColourdButton
            text="Sign In"
            textSize="1.125rem"
            buttonWidth="8.406rem"
            buttonHeight="2.438rem"
            arrowWidth="0.75rem"
            arrowHeight="0.75rem"
          />

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
