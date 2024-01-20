import React from "react";
import styles from "./heading.module.css";

interface HeadingProp {
  text: string;
}

export const Heading: React.FC<HeadingProp> = ({ text }) => {
  return <div className={styles.heading}>{text}</div>;
};
