import React from "react";
import styles from "./pageHeading.module.css";

interface PageHeadingProps {
  text: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ text }) => {
  return <div className={styles.pageHeading}>{text}</div>;
};
