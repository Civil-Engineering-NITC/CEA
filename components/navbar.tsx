import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import menuIcon from "../public/hamburger Menu.svg";
import { ColouredText } from "./ColouredText";
import { ColourdButton } from "./ColourdButton";

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
          <ColourdButton text="Sign In" redirectLink="" />
        </div>
        <Image src={menuIcon} alt="" className={styles.menuLogo} />
      </div>
    </>
  );
};
