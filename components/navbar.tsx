import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import menuIcon from "../public/hamburger Menu.svg";
// import { ColourdButton } from "./ColourdButton";
import { ColouredText } from "./ColouredText";

export const Navbar = () => {
  return (
    <>
      <div className={styles.navDiv}>
        <ColouredText text="CEA." size="1.5rem" />
        <div className={styles.navlinks}>
          <a href="">Home.</a>
          <a href="">AboutUs.</a>
          <a href="">Resources.</a>
          <a href="">Members.</a>
          <a href="">ContactUS.</a>
          {/* <ColourdButton />
      <div className={styles.mainbut}>
        <button>Hello from other side</button>
        <div className={styles.colback}></div>
      </div> */}
        </div>
        <Image src={menuIcon} alt="" className={styles.menuLogo} />
      </div>
    </>
  );
};
