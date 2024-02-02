import React from "react";
import styles from "./bigButton.module.css";
interface BigButtonProps {
  name: string;
}

export const BigButton: React.FC<BigButtonProps> = ({ name }) => {
  return (
    <>
      <button className={styles.button}>{name}</button>
    </>
  );
};
