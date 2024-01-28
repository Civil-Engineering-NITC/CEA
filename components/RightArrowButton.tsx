import React from "react";
import Image from "next/image";
import styles from "./rightArrowButton.module.css";
import arrowImg from "@/public/rightArrow.png";

interface RightArrowButtonProps {
  text: string;
  redirectLink: string;
  textDec: string;
}

export const RightArrowButton: React.FC<RightArrowButtonProps> = ({
  text,
  redirectLink,
  textDec,
}) => {
  return (
    <>
      <a
        href={redirectLink}
        className={styles.arrowButton}
        style={{ textDecoration: textDec }}
      >
        {text}
        <div className={styles.arrowDiv}>
          <Image src={arrowImg} alt="" className={styles.arrowImg} />
        </div>
      </a>
    </>
  );
};
