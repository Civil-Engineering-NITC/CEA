import React from "react";
import styles from "./mainHeading.module.css";

interface MainHeadingProps {
  text: string;
}

export const MainHeading: React.FC<MainHeadingProps> = ({ text }) => {
  return <div className={styles.mainHeading}>{text}</div>;
};
