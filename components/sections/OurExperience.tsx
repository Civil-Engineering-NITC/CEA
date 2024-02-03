import React from "react";
import styles from "./ourExperience.module.css";
import { OurExperienceCard } from "../OurExperienceCard";
import { DownArrowButton } from "../DownArrowButton";
import { ColouredText } from "../ColouredText";
import { Header } from "../Header";
import axios from "axios";

export const OurExperience = async () => {
  try {
    const info = await axios.get("http://localhost:3000/api/activity");
    const ourExp = info.data;
    var displayData = ourExp.slice(0, 2);
  } catch {
    console.log("Data fetch error from backend");
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.topDiv}>
          <div className={styles.headingContainer}>
            <h1 className={styles.colorText}>DISCOVER</h1>
            <h1 className={styles.colorText}>OUR</h1>
            <h1 className={styles.colorText}>OFFERINGS</h1>
          </div>
          <div className={styles.headingContainer}>
            <h2 className={styles.kind}>EVENT.</h2>
            <h2 className={styles.kind}>WORKSHOP.</h2>
            <h2 className={styles.kind}>LECTURE.</h2>
          </div>
        </div>
        <div className={styles.cardMainDiv}>
          <OurExperienceCard />
          <OurExperienceCard />
        </div>
        <DownArrowButton text="Load More" redirectLink="" />
      </div>
    </>
  );
};
