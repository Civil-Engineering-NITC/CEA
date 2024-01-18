import React from "react";
import styles from "./subHeading.module.css";

interface SubHeadingProp {
  text: string;
}

export const SubHeading: React.FC<SubHeadingProp> = ({ text }) => {
  return <div className={styles.subText}>{text}</div>;
};
