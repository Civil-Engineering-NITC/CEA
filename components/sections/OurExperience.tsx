import React from "react";
import styles from "./ourExperience.module.css";
import { OurExperienceCard } from "../OurExperienceCard";

export const OurExperience = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.topDiv}>
          <div className={styles.headingDiv}>
            <h1>Our Experience</h1>
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
        <a href="" className={styles.loadmore}>
          Load More
        </a>
      </div>
    </>
  );
};
