import React from "react";
import styles from "./downArrowButton.module.css";

interface DownArrowButtonProps {
  text: string;
}

export const DownArrowButton: React.FC<DownArrowButtonProps> = ({ text }) => {
  return (
    <>
      <a href="" className={styles.arrowbutton}>
        {text}
      </a>
    </>
  );
};
