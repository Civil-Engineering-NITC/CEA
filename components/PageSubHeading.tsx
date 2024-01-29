import React from "react";
import styles from "./pageSubHeading.module.css";

interface PageSubHeadingProps {
  text: string;
}

export const PageSubHeading: React.FC<PageSubHeadingProps> = ({ text }) => {
  return <div className={styles.subHeading}>{text}</div>;
};
