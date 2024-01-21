import React from "react";
import styles from "./OurExperienceCard.module.css";
import Image from "next/image";
import boxImg from "../public/bg.jpg";

export const OurExperienceCard = () => {
  return (
    <>
      <div className={styles.cardDiv}>
        <h3>Data Analytics</h3>
        <div className={styles.cardBox}>
          <Image
            src={boxImg}
            alt=""
            style={{ maxWidth: "100%", height: "100%", borderRadius: "0.5rem" }}
            objectFit="cover"
            objectPosition="centre"
          />
        </div>
      </div>
    </>
  );
};
