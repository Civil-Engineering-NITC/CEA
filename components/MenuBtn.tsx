"use client";
import { useState } from "react";
import React from "react";
import styles from "./menuBtn.module.css";

export const MenuBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={styles.menuBack}>
        <button
          className={`${styles.hamburger}  ${isActive ? styles.isActive : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
        </button>
      </div>
    </>
  );
};
