import React from "react";
import styles from "./colouredButton.module.css";
import Image from "next/image";
import arrow from "../public/Arrow 1.svg";

interface ColourdButtonProps {
  text: string;
  redirectLink: string;
  size: string;
}

export const ColourdButton: React.FC<ColourdButtonProps> = ({
  text,
  redirectLink,
  size,
}) => {
  return (
    <>
      <a href={redirectLink} className={styles.mainDiv}>
        <div className={styles.buttonDiv} style={{ fontSize: size }}>
          {text}
          <Image src={arrow} alt="" className={styles.arrowButton} />
        </div>
        <div className={styles.colorDiv}></div>
      </a>
    </>
  );
};
