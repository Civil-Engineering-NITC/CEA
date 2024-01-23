import React from "react";
import styles from "./ourExperience.module.css";
import { OurExperienceCard } from "../OurExperienceCard";
import { DownArrowButton } from "../DownArrowButton";
import { ColouredText } from "../ColouredText";

export const OurExperience = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.topDiv}>
          <div className={styles.headingDiv}>
            <ColouredText text="Our Experience" size="4rem" />
            <h2>Your Action</h2>
          </div>
          <p>
            Having gained extensive experience various companies, we've curated
            something unique for you. Delve into our portfolio to witness some
            of our latest experiences and delve deeper into our expertise and
            capabilities.
          </p>
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
