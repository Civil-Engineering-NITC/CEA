import React from "react";
import styles from "./resourceCard.module.css";
import Image from "next/image";
import school from "../public/school.svg";

function ResourceCard() {
  return (
    <>
      <div className={styles.borderDiv}>
        <div className={styles.cards}>
          <div className={styles.cardHeading}>
            <Image
              src={school}
              alt=""
              style={{ width: "46.75px", height: "38.25px" }}
            />
            <h2>Competitive.</h2>
            <h3>/Exam</h3>
          </div>
          <div className={styles.cardMainHeading}>
            <h1>CORE</h1>
            <h2>MATERIALS</h2>
            <a href="">Previous Year Papers</a>
          </div>
          <a className={styles.showMore} href="">
            Show More
          </a>
        </div>
      </div>
    </>
  );
}

export default ResourceCard;
