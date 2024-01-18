import React from "react";
import styles from "./colouredText.module.css";

interface ColouredTextProps {
  text: string;
  size: string;
}

export const ColouredText: React.FC<ColouredTextProps> = ({ text, size }) => {
  return (
    <>
      <div className={styles.colorText} style={{ fontSize: size }}>
        {text}
      </div>
    </>
  );
};
