import React from "react";
import styles from "./downArrowButton.module.css";
import Image from "next/image";
import arrowImg from "@/public/DownArrow.svg";

interface DownArrowButtonProps {
  text: string;
  redirectLink: string;
}

export const DownArrowButton: React.FC<DownArrowButtonProps> = ({
  text,
  redirectLink,
}) => {
  return (
    <>
      <a href={redirectLink} className={styles.arrowButton}>
        {text}
        <div className={styles.arrowDiv}>
          <Image src={arrowImg} alt="" className={styles.arrowImg} />
        </div>
      </a>
    </>
  );
};
