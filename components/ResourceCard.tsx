import React from "react";
import styles from "./resourceCard.module.css";
import Image from "next/image";
import school from "../public/school.svg";
import { RightArrowButton } from "./RightArrowButton";

interface ResourceCardProps {
  title: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ title }) => {
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
            <h1>{title}</h1>
            <h2>MATERIALS</h2>
            <a href="/resources">Previous Year Papers</a>
          </div>
          <RightArrowButton
            text="Show More"
            redirectLink="/resources"
            textDec="none"
          />
        </div>
      </div>
    </>
  );
};
